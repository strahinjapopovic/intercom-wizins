import htmlEntity from 'he';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client/react';
import { LoggedIn, Logout } from '../utils/authent.js';
import verificationCodeKey from '../utils/alphaNumStr.ts';
import { GET_USER_EMAIL } from '../utils/graphql/queries.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import xErrorMsg from '../assets/images/message-icon/xmark-red.png';
import alertSign from '../assets/images/message-icon/alert-sign.png';
import tickSuccess from '../assets/images/message-icon/tick-mark-green.png';
import { BcryptHashingForgotPassX, BcryptHashingForgotPassY } from '@utils/auth';
import UpdateOnlineStatusChange from '../components/updateuserstatus/useronlinestatus.tsx';
//--------------------------------------------//  
const ForgotPassword = () => {
  const updateUserStatus = () => {
      const localStoreData = localStorage.getItem('online_status_change');
      if (localStoreData !== null) {
        const parsedData = JSON.parse(localStoreData);
        const onlineStatus = parsedData.onlineStatus;
        if (onlineStatus === "Yes") {
          UpdateOnlineStatusChange();
        }
      }
    }
    updateUserStatus();
  //--------------------------------------------//
  const [dateState, setDateState] = useState({ date: new Date(), });
  const [formStateEmail, setFormStateEmail] = useState({ email: '', });
  const [checkEmailUser, setCheckEmail] = useState({ checkEmail: '' });
  const [getUserEmail, { data, loading, error }] = useLazyQuery(GET_USER_EMAIL);
  const [errorStateCheck, setErrorStateCheck] = useState({ errorInputCheck: '', });
  //--------------------------------------------//
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormStateEmail({
      ...formStateEmail,
      [name]: value,
    });
  };
  //--------------------------------------------//
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
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
        if (data !== null) {
          setCheckEmail({
            checkEmail: 'successfully',
          });
          console.log(`data is processed!\nUsername: ${data?.getUserEmail?.username}`);
          console.log(data?.getUserEmail?.email);
          //-----------------------------------------------------------------------------------//
          const codexID = verificationCodeKey(20);
          const codeyID = verificationCodeKey(21);
          const resetAddressURI = `http://localhost:3000/reset-password?userEmail=${data?.getUserEmail?.email}&codexid=${codexID}&codeyid=${codeyID}`;
          console.log(`\n---\nCodeXID: ${codexID}\n---\nCodeYID: ${codeyID}\n---\nReset Address: ${resetAddressURI}`);
          //-----------------------------------------------------------------------------------//
          const arrMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          let dateStart = dateState.date.getTime();
          let dateEnd = dateStart + 1800000;
          const year = dateState.date.getFullYear();
          const month = arrMonth[dateState.date.getMonth()];
          let hour = dateState.date.getHours();
          let minute = dateState.date.getMinutes() + 30;
          let second = dateState.date.getSeconds();
          const dDate = dateState.date.getDate();
          let hourStr = '';
          let minStr = '';
          let secStr = '';
          //-----------------------------------------------------------------------------------//
          let lab = '';
          if (hour > 12) {
            hour = hour - 12;
            hourStr = hour.toString();
            lab = 'PM';
          }
          else if (hour == 24) {
            hourStr = '00';
            lab = 'AM';
          }
          else if (hour == 12) {
            lab = 'PM';
          }
          else if (hour < 12) {
            lab = 'AM';
          }
          if (minute >= 60) {
            hour += 1;
            minute = minute - 60;
            hourStr = hour.toString();
            minStr = minute.toString();
          }
          else if (minute < 10) {
            minStr = `0${minute.toString()}`;
          }
          if (second < 10) {
            secStr = `0${second.toString()}`;
          }
          //-----------------------------------------------------------------------------------//
          let dateMsg = `${dDate}-${month}-${year} at ${hourStr}:${minStr}:${secStr} ${lab}`;
          console.log(`Date Start: ${dateStart}\n---\nDate End: ${dateEnd}\n---\nDate Message: ${dateMsg}`);
          //-----------------------------------------------------------------------------------//
          let objData = {
            userEmail: data?.getUserEmail?.email,
            codexID: BcryptHashingForgotPassX(codexID),
            codeyID: BcryptHashingForgotPassY(codeyID),
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
          emailjs.send("emailjs_intercom_wizins", "template_respas_intercom", {
            from_name: "Intercom WizIns Repo",
            clientFirstName: data?.getUserEmail?.firstName,
            resetPassURI: resetAddressURI,
            messageExpires: `Verification code expires in 30 min on ${dateMsg}`,
            to_email: formStateEmail.email,
            reply_to: 'js.wizard.info@gmail.com',
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
          setTimeout(() => {
            LoggedIn() ? Logout() : window.location.assign('/login');
          }, 10000);
          //-----------------------------------------------------------------------------------//
        } else {
          setErrorStateCheck({
            errorInputCheck: '',
          });
          setCheckEmail({
            checkEmail: 'failed',
          });
          console.log(`data is undefined!\ndata: ${data}`);
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
              <span id='title-main' style={{ marginLeft: '10%', }}>JS</span>
              <p id='titleMessage' style={{ marginBottom: '20px', }}>Recover Your Password</p>
              {
                (errorStateCheck.errorInputCheck !== '' && !(formStateEmail.email) &&
                  (checkEmailUser.checkEmail !== 'successfully' && checkEmailUser.checkEmail !== 'failed')) ?
                  (<div id="error-message"><span><img src={alertSign} style={{ width: '23px', }} /> Email Address Empty</span><br /><br />
                    {`( * ) - Insert your email address`}</div>) :
                  (errorStateCheck.errorInputCheck !== '' && !(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formStateEmail.email)) &&
                    (checkEmailUser.checkEmail !== 'successfully' && checkEmailUser.checkEmail !== 'failed')) &&
                  (<div id="error-message"><span><img src={alertSign} style={{ width: '23px', }} /> Email Address Not Valid</span><br /><br />
                    {`( * ) - Insert valid email`}</div>)
              }
              {
                (checkEmailUser.checkEmail === 'successfully' &&
                  errorStateCheck.errorInputCheck === '' &&
                  (formStateEmail.email !== '' || !(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formStateEmail.email)))) ?
                  (<>
                    <div id='openDialogBoxMsg' style={{ marginTop: '40px', marginBottom: '40px', }}>
                      <span><img src={tickSuccess} style={{ width: '20px', }} /> Recover Email Send Successfully</span>
                      <br />
                      <br />Recover email with instructions is sent to <b>{formStateEmail.email}</b>
                      <br />Please go to your email and follow the instructios provided
                      <br />
                      <br />Redirecting in seconds...
                    </div>
                  </>) :
                  (checkEmailUser.checkEmail === 'failed' &&
                    errorStateCheck.errorInputCheck === '' &&
                    (formStateEmail.email !== '' || !(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formStateEmail.email)))) &&
                  (<div id='openDialogBoxMsg'>
                    <span><img src={xErrorMsg} style={{ width: '20px', }} /> Send Recover Email Failed</span><br /><br />
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
                      (<div id="error-message-signup"><span id='alertSign' style={{ fontSize: '17px', }}>{`${htmlEntity.decode("&#9888;")}`}</span> Insert email address</div>) :
                      errorStateCheck.errorInputCheck && !(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(formStateEmail.email)) &&
                      (<div id="error-message-signup"><span id='alertSign' style={{ fontSize: '17px', }}>{`${htmlEntity.decode("&#9888;")}`}</span> Insert valid email</div>)
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
