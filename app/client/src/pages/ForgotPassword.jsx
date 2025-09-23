import htmlEntity from 'he';
import bcrypt from 'bcryptjs';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_EMAIL } from '../utils/queries.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import verificationCodeKey from '../utils/verificationCodeAns.jsx';
import xErrorMsg from '../assets/images/message-icon/xmark-red.png';
import alertSign from '../assets/images/message-icon/alert-sign.png';
import tickSuccess from '../assets/images/message-icon/tick-mark-green.png';
//--------------------------------------------//  
const ForgotPassword = () => {
//--------------------------------------------//
  const [dateState, setDateState] = useState({ date: new Date(), });
  const [formStateEmail, setFormStateEmail] = useState({ email: '',});
  const [checkEmailUser, setCheckEmail] = useState({ checkEmail: '' });
  const [getUserEmail, { data, loading, error }] = useLazyQuery(GET_USER_EMAIL);
  const [errorStateCheck, setErrorStateCheck] = useState({ errorInputCheck: '', });
  //--------------------------------------------//
  const handleChange = function (event) {
    const { name, value } = event.target;
    setFormStateEmail({
      ...formStateEmail,
      [name]: value,
    });
  };
  //--------------------------------------------//
  const handleFormSubmit = async function (event) {
    event.preventDefault();
    setErrorStateCheck({
      errorInputCheck: "checked",
    });
    //-----------------------------------------------------------------------------------//
    localStorage.removeItem('resetData');
    //-----------------------------------------------------------------------------------//
    try {
      if (formStateEmail.email !== '' && /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formStateEmail.email)) {
        //-----------------------------------------------------------------------------------//
        const { data } = await getUserEmail({ 
          variables: { email: formStateEmail.email, },
        });
        //-----------------------------------------------------------------------------------//
        if(data.getUserEmail !== null) {
          setCheckEmail({
            checkEmail: 'successfully',
          });
          console.log(`data is processed!\nUsername: ${data.getUserEmail.username}`);
          console.log(data.getUserEmail.email);
          //-----------------------------------------------------------------------------------//
          const codexID = verificationCodeKey(20);
          const codeyID = verificationCodeKey(21);
          const resetAddressURI = `http://localhost:3000/reset-password?userEmail=${data.getUserEmail.email}&codexid=${codexID}&codeyid=${codeyID}`;
          console.log(`\n---\nCodeXID: ${codexID}\n---\nCodeYID: ${codeyID}\n---\nReset Address: ${resetAddressURI}`); 
          //-----------------------------------------------------------------------------------//
          let codexIdAlphaNumStr = bcrypt.hashSync(codexID, 10);
          let codeyIdAlphaNumStr = bcrypt.hashSync(codeyID, 10);
          //-----------------------------------------------------------------------------------//
          const arrMonth = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
          let dateStart = dateState.date.getTime();
          let dateEnd = dateStart + 1800000;
          const year = dateState.date.getFullYear();
          const month = arrMonth[dateState.date.getMonth()];
          let hour = dateState.date.getHours();
          let minute = dateState.date.getMinutes() + 30;
          let second = dateState.date.getSeconds();
          const dDate = dateState.date.getDate();
          //-----------------------------------------------------------------------------------//
          let lab = '';
          if(hour > 12) {
              hour = hour - 12; 
              lab = 'PM';
          } 
          else if(hour == 24){
              hour = '00';
              lab = 'AM';
          } 
          else if(hour == 12){
              lab = 'PM';
          } 
          else if(hour < 12) {
              lab = 'AM';
          }
          if(minute >= 60) {
            hour += 1;
            minute = minute - 60;
          }
          else if(minute < 10) {
            minute = `0${minute}`;
          }
          if(second < 10) {
            second = `0${second}`;
          }
          //-----------------------------------------------------------------------------------//
          let dateMsg = `${dDate}-${month}-${year} at ${hour}:${minute}:${second} ${lab}`;
          console.log(`Date Start: ${dateStart}\n---\nDate End: ${dateEnd}\n---\nDate Message: ${dateMsg}`);
          //-----------------------------------------------------------------------------------//
          let objData = {
            userEmail: data.getUserEmail.email,
            codexID: codexIdAlphaNumStr,
            codeyID: codeyIdAlphaNumStr,
            dateStart: dateStart,
            dateEnd: dateEnd,
            dateMsg: dateMsg,
          };
          localStorage.setItem("resetData", JSON.stringify(objData));
          //-----------------------------------------------------------------------------------//
          setErrorStateCheck({
            errorInputCheck: '',
          });
          //-----------------------------------------------------------------------------------//
          emailjs.send("emailjs_intercom_wizins","template_respas_intercom",{
           from_name: "Intercom WizIns Repo",
           clientFirstName: data.getUserEmail.firstName,
           resetPassURI: resetAddressURI,
           messageExpires: `Verification code expires in 30 min on ${dateMsg}`,
           reply_to: formStateEmail.email,
           codexID: codexID,
           codeyID: codeyID,
          }, 
              { 
                  publicKey: 'P6E7ZMa50IU2wMlSt', 
              }
            )
            .then(() => { 
                console.log('Email sent successfully by using EmailJS services!'); 
            }, 
            (error) => { 
                console.log(error);
            },
          );
          //-----------------------------------------------------------------------------------//
          // setTimeout(() => {
          //   window.location.assign('/login');
          // }, 8000);
          //-----------------------------------------------------------------------------------//
        } else {
          setErrorStateCheck({
            errorInputCheck: '',
          });
          setCheckEmail({
            checkEmail: 'failed',
          });
          console.log(`data is undefined!\ndata: ${data}`);
          // window.location.assign('/login');
        }
        //-----------------------------------------------------------------------------------//
      }
    } catch (error) {
      console.error(error);
      setFormStateEmail({
        email: '',
      });
    }
  //--------------------------------------------//
    // clear form values
    setFormStateEmail({
      email: '',
    });
  };
  //--------------------------------------------//
  console.log(checkEmailUser.checkEmail);
  return (
    <>
      {(<div id="top">
          <section className="input-login-form" >
            <div id="input-login-sec">
              <form id='login' onSubmit={handleFormSubmit}>
                <span id='title-main' style={{marginLeft: '10%', }}>JS</span>
                <p id='titleMessage' style={{marginBottom: '20px', }}>Recover Your Password</p>
                { 
                  (errorStateCheck.errorInputCheck !== '' && !(formStateEmail.email) && 
                  (checkEmailUser.checkEmail !== 'successfully' || checkEmailUser.checkEmail !== 'failed')) ? 
                    (<div id="error-message"><span><img src={alertSign} style={{ width: '23px', }}/> Email Address Empty</span><br /><br />
                    {`( * ) - Insert your email address`}</div>) : 
                  (errorStateCheck.errorInputCheck !== '' && !(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formStateEmail.email)) && 
                  (checkEmailUser.checkEmail !== 'successfully' || checkEmailUser.checkEmail !== 'failed')) && 
                    (<div id="error-message"><span><img src={alertSign} style={{ width: '23px', }}/> Email Address Not Valid</span><br /><br />
                    {`( * ) - Insert valid email`}</div>)
                }
                {
                  (checkEmailUser.checkEmail === 'successfully' && 
                    errorStateCheck.errorInputCheck === '' && 
                    (formStateEmail.email !== '' || !(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formStateEmail.email)))) ? 
                  (<>
                    <div id='openDialogBoxMsg' style={{ marginTop: '40px', marginBottom: '40px', }}>
                    <span><img src={tickSuccess} style={{ width: '20px', }}/> Recover Email Send Successfully</span><br /><br />
                      Recover email with instructions is sent successfully.<br />Please go to your email and follow the instructios provided.
                    </div>
                  </>) : 
                  (checkEmailUser.checkEmail === 'failed' && 
                    errorStateCheck.errorInputCheck === '' && 
                    (formStateEmail.email !== '' || !(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formStateEmail.email)))) &&
                  (<div id='openDialogBoxMsg'>
                    <span><img src={xErrorMsg} style={{ width: '20px', }}/> Send Recover Email Failed</span><br /><br />
                    Entered email not found.<br />Please try again.<br />
                  </div>)
                }
                {
                  (checkEmailUser.checkEmail !== 'successfully') && 
                  (<>
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="text" id="email" name="email" placeholder="Insert your email" value={formStateEmail.email} onChange={handleChange} />
                      {
                        errorStateCheck.errorInputCheck && !(formStateEmail.email) ? 
                          (<div id="error-message-signup"><span id='alertSign' style={{fontSize: '17px', }}>{`${htmlEntity.decode("&#9888;")}`}</span> Insert email address</div>) :
                        errorStateCheck.errorInputCheck && !(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formStateEmail.email)) && 
                          (<div id="error-message-signup"><span id='alertSign' style={{fontSize: '17px', }}>{`${htmlEntity.decode("&#9888;")}`}</span> Insert valid email</div>)
                      }
                    <button type="submit" id="submit" name="submit"><FontAwesomeIcon icon={faCircleCheck} /> Send Instructions</button>
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
export default ForgotPassword;
