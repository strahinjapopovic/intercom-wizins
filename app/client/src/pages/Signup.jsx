import htmlEntity from 'he';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ADD_USER } from '../utils/mutations';
import { useMutation, useQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import SpinnerLoader from '../components/spinner/spinnerLoader.jsx';
import alertSign from '../assets/images/message-icon/alert-sign.png';
import VerificationDialogBox from '../components/dialogbox/dialog.jsx';
import okCheckIcon from '../assets/images/message-icon/ok-check-icon.png';
import tickSuccess from '../assets/images/message-icon/tick-mark-green.png';
import errorCheckIcon from '../assets/images/message-icon/err-check-icon.png';
import { GET_ALL_USERS, GET_USER, GET_USER_EMAIL } from '../utils/queries.js';
//--------------------------------------------//
const Signup = () => {
  localStorage.removeItem('data');
  const [formState, setFormState] = useState({ firstName: '', lastName: '', username: '', email: '', password: '', confirmed: '', });
  //--------------------------------------------//
  const [addUser, { data, loading, error }] = useMutation(ADD_USER);
  //--------------------------------------------//
  const handleOnChange = function (event) {
    //spred sintax: formState.firstName = event.target.value => setFormState({...formState, firstName: event.target.value, )};
    const { name, value } = event.target; 
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  //(formState.password === formState.confirmed) ? console.log(`confirmed successfull`) : console.log(`passwords not same`);
  //--------------------------------------------//
    const { data: dataq, loading: loadingq, error: errorq } = useQuery(GET_USER, {
      variables: { username: formState.username, },
    });
    const { data: dataqe, loading: loadingqe, error: errorqe } = useQuery(GET_USER_EMAIL, {
      variables: { email: formState.email, },
    });
    const { data: dataAllUsr, loading: loadingAllUsr, error: errorAllUsr } = useQuery(GET_ALL_USERS);
    if(dataAllUsr) {
      console.log(`int_com_x01e_25${dataAllUsr.users.length+1}`);
    }
  //--------------------------------------------//
  const handleFormSubmit = async function (event) {
    event.preventDefault();
    //--------------------------------------------//
    try {
      if (!(formState.firstName &&
        formState.lastName &&
        formState.username &&
        formState.password &&
        formState.confirmed &&
        /^[0-9A-Za-z]{6,16}$/.test(formState.username) &&
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formState.email) &&
        /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.password) &&
        /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.confirmed))) {
          const { data } = await addUser({ variables: { ...formState }, });
        }
      // console.log(formState.email); 
      // console.log(verificationCodeStr);
      // const { data } = await addUser({
      //   variables: { ...formState },
      // });
      // Auth.login(data.addUser.token);
    } catch (error) {
      console.error(error);
    }
    //--------------------------------------------//
    // clear form values
    // setFormState({
    //   firstName: '',
    //   lastName: '',
    //   username: '',
    //   email: '',
    //   password: '',
    //   confirmed: '',
    // });
  //--------------------------------------------//
  };
  //--------------------------------------------//
  return (
    <>
      {data ?
        <SpinnerLoader /> : 
        <div id="top">
          <section className="input-login-form" >
            <div id="input-login-sec">
              <form id='login' onSubmit={handleFormSubmit}>
                <span id='title-main' style={{marginLeft: '10%', }}>JS</span>
                <p id='titleMessage'>Register Your Profile</p>
                <table id="signup-tbl">
                  <tbody>
                    <tr>
                      <td colSpan={2}>
                        {(error &&
                          !(formState.firstName &&
                            formState.lastName &&
                            formState.username &&
                            formState.confirmed && 
                            formState.password &&
                            /^[0-9A-Za-z]{6,16}$/.test(formState.username) &&
                            /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.password) &&
                            /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.confirmed) &&
                            /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formState.email))) ?
                            (<div id="error-message">
                              <span><img src={alertSign} style={{ width: '23px', }}/> {`${error.name}`}</span><br /><br />
                              {`${error.message}`}<br /><br />
                              {`( * ) - Insert all required fields`}
                            </div>) :
                          ((formState.firstName &&
                            formState.lastName &&
                            formState.username &&
                            formState.confirmed && 
                            formState.password &&
                            /^[0-9A-Za-z]{6,16}$/.test(formState.username) &&
                            /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.password) &&
                            /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.confirmed) &&
                            /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formState.email))) &&
                            !(dataq?.user) && !(dataqe?.getUserEmail) &&
                            (formState.confirmed === formState.password) &&
                          (<div id='openDialogBoxMsg'>
                            <span><img src={tickSuccess} style={{ width: '23px', }}/> Registration Info</span><br /><br />
                            To register a profile, please verify your email address.<br />To do so, click on a dialog box at bottom left-side.<br />
                            Instructions will be sent to your nominated email address.
                          </div>)
                        }
                      </td>
                    </tr>
                    <tr>
                      <td><label htmlFor="firstName">First Name <span>*</span></label></td>
                      <td><label htmlFor="lastName">Last Name <span>*</span></label></td>
                    </tr>
                    <tr>
                      <td><input placeholder="Your first name" id="firstName" name="firstName" type="text" value={formState.firstName} onChange={handleOnChange} /></td>
                      <td><input placeholder="Your last name" id="lastName" name="lastName" type="text" value={formState.lastName} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                      <td>
                        {error && !(formState.firstName) && 
                        (<div id="error-message-signup-first"><span id='alertSign' style={{fontSize: '17px', }}>
                        {`${htmlEntity.decode("&#9888;")}`}</span> Insert first name</div>)}
                      </td>
                      <td>
                        {error && !(formState.lastName) && 
                        (<div id="error-message-signup-next"><span id='alertSign' style={{fontSize: '17px', }}>
                        {`${htmlEntity.decode("&#9888;")}`}</span> Insert last name</div>)}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}><label htmlFor="username">Username <span>*</span></label></td>
                    </tr>
                    <tr>
                      <td colSpan={2}><input placeholder="Your username" id="username" name="username" type="text" value={formState.username} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        { dataq?.user ? 
                          <span id='usernameError'><img src={errorCheckIcon} /> Username {formState.username} exists or already taken</span> : 
                          ( formState.username &&
                            /^[0-9A-Za-z]{6,16}$/.test(formState.username)) && 
                          (<span id='usernameSuccess'><img src={okCheckIcon} /> Username free</span>) 
                        }
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>{error && !(formState.username) && (<div id="error-message-signup"><span id='alertSign' style={{fontSize: '17px', }}>{`${htmlEntity.decode("&#9888;")}`}</span> Insert username</div>)}</td>
                    </tr>
                    <tr>
                      <td colSpan={2}><label htmlFor="email">Email <span>*</span></label></td>
                    </tr>
                    <tr>
                      <td colSpan={2}><input type="text" id="email" name="email" placeholder="Insert your email" value={formState.email} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        { dataqe?.getUserEmail ? 
                          <span id='usernameError'><img src={errorCheckIcon} /> Email { formState.email } exists or already taken</span> : 
                          ( formState.email &&
                            /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formState.email)) && 
                          (<span id='usernameSuccess'><img src={okCheckIcon} /> Email free</span>) 
                        }
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        {error && !(formState.email) && 
                        (<div id="error-message-signup">
                        <span id='alertSign' style={{fontSize: '17px', }}>{`${htmlEntity.decode("&#9888;")}`}</span> Insert email</div>)}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}><label htmlFor="password">Password <span>*</span></label></td>
                    </tr>
                    <tr>
                      <td colSpan={2}><input type="password" id="password" name="password" placeholder="Insert password" 
                      value={formState.password} onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                      <td colSpan={2}>{error && !(formState.password) && (<div id="error-message-signup"><span id='alertSign' style={{fontSize: '17px', }}>
                        {`${htmlEntity.decode("&#9888;")}`}</span> Insert password</div>)}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}><label htmlFor="confirmed">Confirm <span>*</span></label></td>
                    </tr>
                    <tr>
                      <td colSpan={2}><input type="password" id="confirmed" name="confirmed" placeholder="Confirm password" value={formState.confirmed} 
                      onChange={handleOnChange} /></td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        {error && !(formState.confirmed) && 
                        (<div id="error-message-signup">
                          <span id='alertSign' style={{fontSize: '17px', }}>{`${htmlEntity.decode("&#9888;")}`}</span> Confirm password</div>)}
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        {(formState.confirmed && 
                          formState.password &&
                          /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.password) &&
                          /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.confirmed)) &&
                          (formState.confirmed === formState.password) ? 
                            (<span id='usernameSuccess'>
                              <img src={okCheckIcon} /> Password confirmed successfully
                            </span>) : 
                          ((!(/^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.password) &&
                            /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.confirmed)) &&
                            formState.confirmed && 
                            formState.password &&
                            ((formState.confirmed !== formState.password) || (formState.confirmed === formState.password))) || 
                            ((/^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.password) &&
                            /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.confirmed)) &&
                            formState.confirmed && 
                            formState.password &&
                            ((formState.confirmed !== formState.password)))) &&
                            (<span id='usernameError'>
                              <img src={errorCheckIcon} /> Password failed or do not match
                            </span>)
                        } 
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}><button type="submit" id="submit" name="submit"><FontAwesomeIcon icon={faCircleCheck} /> Sign-up</button></td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        {(formState.confirmed && 
                          formState.password &&
                          formState.firstName &&
                          formState.lastName &&
                          formState.username &&
                          /^[0-9A-Za-z]{6,16}$/.test(formState.username) &&
                          /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.password) &&
                          /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(formState.confirmed) &&
                          /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formState.email)) &&
                          !(dataq?.user) && !(dataqe?.getUserEmail) &&
                          (formState.confirmed === formState.password) &&
                          (<VerificationDialogBox 
                            cEmail={formState.email}
                            cConfirm={formState.confirmed}
                            cUsername={formState.username}
                            cLastName={formState.lastName} 
                            cPassword={formState.password}
                            cFirstName={formState.firstName}
                            addUser={addUser}
                            getAllUsr={dataAllUsr.users.length+1}
                          />)
                        }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
              <div id='newUserRegistrationBox'>
                <div id='newSub'>
                  <p>Already registered? <Link to='/login'>Sign in to continue!</Link></p>
                </div>
              </div>
            </div>
          </section>
        </div>
      }
    </>
  );
};
//--------------------------------------------//
export default Signup;
