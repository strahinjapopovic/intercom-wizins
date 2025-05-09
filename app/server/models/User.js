const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first: {
    type: String,
    alias: 'firstName',
    required: [true, '(*)'],
    unique: false,
    trim: true,
  },
  last: {
    type: String,
    alias: 'lastName',
    required: [true, '(*)'],
    unique: false,
    trim: true,
  },
  username: {
    type: String,
    required: [true, '(*)'],
    minlength: [3, '(*) - username must be at least 3 characters long'],
    unique: [true, `given username already exists`],
    trim: true,
    validate: {
      validator: (e) => {
        return /^[0-9A-Za-z]{6,16}$/.test(e);
        //await User.findOne({ username: e }).then((data) => { data ? console.log(`username taken`) : console.log(`username free`); });
      },
      message: () => { return `(*) - username should be 6 to 16 chars long only containing numbers and letters`; },
    },
  },
  email: {
    type: String,
    unique: [true, 'email already exists'],
    required: [true, '(*)'],
    validate: {
        validator: (e) => {
            return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(e);
        },
        message: () => { return `(*) - not valid email address`; },
    },
  },
  password: {
    type: String,
    required: [true, '(*)'],
    minlength: [8, '(*) - password must be at least 8 characters long'],
    validate: {
      validator: (e) => {
          return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e);
      },
      message: () => { return '(*) - password has to be at least 8 chars long mix of a numbers, lower case letters, upper case letters and special characters'; },
    },
  },
  confirmed: {
    type: String,
    required: [true, '(*)'],
    minlength: [8, '(*) - confirm must be same length as password'],
    validate: {
      validator: (e) => {
          return /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e);
      },
      message: () => { return '(*) - confirm has to match password'; },
    },
    default: 'confirmed_successfully',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
      type: Date,
      default: Date.now,
  },
},
{
  toJSON: {
      virtuals: true,
      getters: true,
  },
  id: false,
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    //const saltRounds = 10;
    this.confirmed = 'confirmed_successfully';
    this.password = bcrypt.hashSync(this.password, 10);
  }
  return next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  const match = await bcrypt.compare(password, this.password);
  return match;
};

userSchema.methods.formatCreateddAt = function() {
  return this.createdAt.toLocaleDateString() + ", " + this.createdAt.toLocaleTimeString('en-US') + `, GMT+` + this.createdAt.getTimezoneOffset()/-60;
};

userSchema.static.formatUpdatedAt = function() {
  return this.updatedAt.toLocaleDateString() + ", " + this.updatedAt.toLocaleTimeString('en-US') + `, GMT+` + this.updatedAt.getTimezoneOffset()/-60;
};

userSchema.virtual('fullName').
get( function () { return `${this.first} ${this.last}`; }).
set( function(v) {
  const firstName = v.substring(0, v.indexOf(' '));
  const lastName = v.substring(v.indexOf(' ') + 1);
  this.set({ firstName, lastName });
});

const User = mongoose.model('User', userSchema);

module.exports = User;
