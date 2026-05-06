import React from 'react';
import htmlEntity from 'he';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { LoggedIn, Logout } from '../utils/authent.js';
import { RESET_PASSWORD } from '../utils/graphql/mutations.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import tickSuccess from '../assets/images/message-icon/tick-mark-green.png';
import { GetResPassParam, BcryptCompareResetPassX, BcryptCompareResetPassY } from '../../../utils/auth.ts';
//--------------------------------------------//  
const ResetPassword = () => {
  const codexid = GetResPassParam().codexid;
  const codeyid = GetResPassParam().codeyid;
  //--------------------------------------------//
  const [dateState, setDateState] = useState({ date: new Date(), });
  const [stateForm, setStateForm] = useState({ password: '', confirm: '', });
  const [errorStateChack, setErrorStateCheck] = useState({ errorInputCheck: '', });
  const [showPassword, setShowPassword] = useState(false);
  const [iconShowPass, setIconShowPass] = useState(<FaEyeSlash />);
  const [resPass, { data, loading, error }] = useMutation(RESET_PASSWORD);
  //--------------------------------------------//
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setStateForm({
      ...stateForm,
      [name]: value,
    });
  };
  //--------------------------------------------//
  const handleShowPasswordVisibility = () => {
    setShowPassword(!showPassword);
    setIconShowPass(showPassword ? <FaEyeSlash /> : <FaEye />);
  }
  //-----------------------------------------------------------------------------------//
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const localData = localStorage.getItem('resetData');
    setErrorStateCheck({
      errorInputCheck: "checked",
    });
    //-----------------------------------------------------------------------------------//
    if (localData) {
      try {
        if (/^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(stateForm.password) === true &&
          /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(stateForm.confirm) === true &&
          stateForm.password !== '' && stateForm.confirm !== '' && stateForm.password === stateForm.confirm) {
          //-----------------------------------------------------------------------------------//
          console.log(`SUCCESSFULL: Password can be processed for local storage`);
          console.log(`e:` + JSON.parse(localData).userEmail, `x: ` + codexid, `y: ` + codeyid);
          //-----------------------------------------------------------------------------------//
          if (codexid !== null && codeyid !== null) {
            const matchX = await BcryptCompareResetPassX(codexid, JSON.parse(localData).codexID);
            const matchY = await BcryptCompareResetPassY(codeyid, JSON.parse(localData).codeyID);
            //---//
            if (matchX === true && matchY === true) {
              console.log(matchX, matchY, `SUCCESSFULL: Password can be fully processed`);
              console.log(`New password: ${stateForm.password}`);
              const { data } = await resPass({
                variables: {
                  email: JSON.parse(localData).userEmail,
                  password: stateForm.password,
                }
              });
              if (data) {
                console.log(data);
                console.log(`Password changed successfully!`);
                //-----------------------------------------------------------------------------------//
                localStorage.removeItem('resetData');
                //-----------------------------------------------------------------------------------//
                setTimeout(() => {
                  LoggedIn() ? Logout() : window.location.replace('/login');
                }, 8000);
              } else {
                window.location.assign('/forgot-password');
              }
            } else {
              console.log(`ERROR: Reset passwords no match!`);
            }
            //---//
          }
          //-----------------------------------------------------------------------------------//
        }
        else {
          console.log(`ERROR: Reset Password Failed`);
        }
      } catch (error) {
        console.error(error);
      }
      //--------------------------------------------//
    }
  }
  //--------------------------------------------//
  return (
    <>
      {(<div id="top">
        <section className="input-login-form" >
          <div id="input-login-sec">
            <form id='login' onSubmit={handleFormSubmit}>
              <span id='title-main' style={{ marginLeft: '10%', }}>JS</span>
              <p id='titleMessage' style={{ marginBottom: '20px', }}>Reset Your Password</p>
              {
                data ?
                  (<div id='openDialogBoxMsg' style={{ marginTop: '40px', marginBottom: '40px', }}>
                    <span><img src={tickSuccess} style={{ width: '20px', }} /> Email Change Successfully</span>
                    <br />
                    <br />Recover email processed <b>successfully!</b>
                    <br />
                    <br />Redirecting to <b>login</b> in seconds...
                  </div>) :
                  (<>
                    <div
                      style={{
                        position: 'relative',
                      }}>
                      <label htmlFor="password">New Password <span>*</span></label>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        name="password"
                        placeholder="Insert password"
                        value={stateForm.password}
                        onChange={handleChange}
                      />
                      <span
                        onClick={handleShowPasswordVisibility}
                        style={{
                          position: 'absolute',
                          cursor: 'pointer',
                          right: '11%',
                          top: '53%',
                        }}>
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    </div>
                    {
                      errorStateChack.errorInputCheck && !(stateForm.password) ?
                        (<div id="error-message-single">{`${htmlEntity.decode("&#9888;")} Insert new password `}</div>) :
                        errorStateChack.errorInputCheck && !(/^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(stateForm.password)) &&
                        (<div id="error-message-single">{`${htmlEntity.decode("&#9888;")} Password not valid `}</div>)
                    }
                    <label htmlFor="confirm">Confirm New Password <span>*</span></label>
                    <input type="password" id="confirm" name="confirm" placeholder="Confirm your password" value={stateForm.confirm} onChange={handleChange} />
                    {
                      errorStateChack.errorInputCheck && !(stateForm.confirm) ?
                        (<div id="error-message-single">{`${htmlEntity.decode("&#9888;")} Confirm new password `}</div>) :
                        errorStateChack.errorInputCheck && (!(/^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(stateForm.confirm))) ?
                          (<div id="error-message-single">{`${htmlEntity.decode("&#9888;")} Confirm not valid `}</div>) :
                          errorStateChack.errorInputCheck && ((/^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(stateForm.confirm)) &&
                            stateForm.confirm !== stateForm.password) &&
                          (<div id="error-message-single">{`${htmlEntity.decode("&#9888;")} Passwords do not match `}</div>)
                    }
                    <button type='submit' id="submit" name="submit"><FontAwesomeIcon icon={faCircleCheck} /> Send Instructions</button>
                  </>)
              }
            </form>
            <div id='newUserRegistrationBox'>
              <div id='newSub'>
                <p>Already got password? <Link to='/login'>Go to Login!</Link></p>
              </div>
            </div>
          </div>
        </section>
      </div>)
      }
    </>
  );
};
//--------------------------------------------//
export default ResetPassword;
