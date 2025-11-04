import htmlEntity from 'he';
import { useState } from 'react';
import Auth from '../utils/auth.js';
import { Link } from 'react-router-dom';
import Util from '../../../utils/auth.js';
import { useMutation } from '@apollo/client';
import { RESET_PASSWORD } from '../utils/mutations.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import tickSuccess from '../assets/images/message-icon/tick-mark-green.png';
//--------------------------------------------//  
const ResetPassword = () => {
//--------------------------------------------//
  const codexid = Util.getResPassParam().codexid;
  const codeyid = Util.getResPassParam().codeyid;
//--------------------------------------------//
  const [dateState, setDateState] = useState({ date: new Date(), });
  const [stateForm, setStateForm] = useState({ password: '', confirm: '', });
  const [errorStateChack, setErrorStateCheck] = useState({ errorInputCheck: '', });
  const [resPass, { data, loading, error }] = useMutation(RESET_PASSWORD);
  //--------------------------------------------//
  const handleChange = function (event) {
    const { name, value } = event.target;
    setStateForm({
      ...stateForm,
      [name]: value,
    });
  };
  //-----------------------------------------------------------------------------------//
  const handleFormSubmit = async function (event) {
    event.preventDefault();
    setErrorStateCheck({
      errorInputCheck: "checked",
    });
    //-----------------------------------------------------------------------------------//
    try {
      if( /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(stateForm.password) === true && 
      /^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(stateForm.confirm) === true &&
      stateForm.password !== '' && stateForm.confirm !== '' && stateForm.password === stateForm.confirm ) {
        //-----------------------------------------------------------------------------------//
        console.log(`SUCCESSFULL: Password can be processed for local storage`);
        console.log(`e:` + JSON.parse(localStorage.getItem('resetData')).userEmail, `x: ` + codexid, `y: ` + codeyid);
        //-----------------------------------------------------------------------------------//
        const matchX = await Util.bcryptCompareResetPassX(codexid, JSON.parse(localStorage.getItem('resetData')).codexID);
        const matchY = await Util.bcryptCompareResetPassY(codeyid, JSON.parse(localStorage.getItem('resetData')).codeyID);
        //-----------------------------------------------------------------------------------//
        if(matchX === true && matchY === true) {
          console.log(matchX, matchY, `SUCCESSFULL: Password can be fully processed`);
          console.log(`New password: ${stateForm.password}`);
          const { data } = await resPass({
            variables: {
              email: JSON.parse(localStorage.getItem('resetData')).userEmail,
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
              Auth.loggedIn() ? Auth.logout() : window.location.assign('/login');
            }, 8000);
          } else {
              window.location.assign('/forgot-password');
          }
        } else {
          console.log(`ERROR: Reset password failed!`);
        }
      }
      else {
        console.log(`ERROR: Reset Password Failed`);
      }
    } catch (error) {
      console.error(error);
      // setStateForm({
      //   confirm: '',
      //   password: '',
      // });
    }
    //--------------------------------------------//
    // clear form values
    // setStateForm({ 
    //   confirm: '',
    //   password: '',
    // });
  }
  //--------------------------------------------//
  return (
    <>    
      {(<div id="top">
          <section className="input-login-form" >
            <div id="input-login-sec">
              <form id='login' onSubmit={handleFormSubmit}>
                <span id='title-main' style={{marginLeft: '10%', }}>JS</span>
                <p id='titleMessage' style={{marginBottom: '20px', }}>Reset Your Password</p>
                {
                  data ? 
                  (<div id='openDialogBoxMsg' style={{ marginTop: '40px', marginBottom: '40px', }}>
                  <span><img src={tickSuccess} style={{ width: '20px', }}/> Email Change Successfully</span>
                    <br />
                    <br />Recover email processed <b>successfully!</b>
                    <br />
                    <br />Redirecting to <b>login</b> in seconds...
                  </div>) :
                  (<>
                      <label htmlFor="password">New Password <span>*</span></label>
                      <input type="password" id="password" name="password" placeholder="Insert your password" value={stateForm.password} onChange={handleChange} />
                      { 
                        errorStateChack.errorInputCheck && !(stateForm.password) ? 
                          (<div id="error-message-single">{`${htmlEntity.decode("&#9888;")} Insert new password `}</div>) : 
                        errorStateChack.errorInputCheck && !(/^(?=.*\d)(?=.*[!@#$%^&_*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(stateForm.password)) && 
                          (<div id="error-message-single">{`${htmlEntity.decode("&#9888;")} Password not valid `}</div>)
                      }
                      <label htmlFor="confirm">Confirm <span>*</span></label>
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
