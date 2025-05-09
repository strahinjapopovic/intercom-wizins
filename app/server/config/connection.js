require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
// process.env.MONGODB_URI ||

mongoose.connect('mongodb://127.0.0.1:27017/mern-wizard-repo-db');

module.exports = mongoose.connection;