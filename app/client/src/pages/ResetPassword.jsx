import htmlEntity from 'he';
import bcrypt from 'bcryptjs';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { GET_USER_EMAIL } from '../utils/queries.js';
import { RESET_PASSWORD } from '../utils/mutations.js';
import getResPassParam from '../hooks/use-resetpass-params.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import verificationCodeKey from '../utils/verificationCodeAns.jsx';
import SpinnerLoader from '../components/spinner/spinnerLoader.jsx';
import wizardFavicon from '../assets/images/favicon/wizardFavicon.png';
import okCheckIcon from '../assets/images/message-icon/ok-check-icon.png';
import errorCheckIcon from '../assets/images/message-icon/err-check-icon.png';
//--------------------------------------------//  
const ResetPassword = () => {
//--------------------------------------------//
  const codexid = getResPassParam().codexid;
  const codeyid = getResPassParam().codeyid;
//--------------------------------------------//
  const [dateState, setDateState] = useState({ date: new Date(), });
  const [stateForm, setStateForm] = useState({ password: '', confirm: '', });
  const [errorStateChack, setErrorStateCheck] = useState({ errorInputCheck: '', });
  const [resPass, { data, loading, error }] = useMutation(RESET_PASSWORD);
  //--------------------------------------------//
  const handleChange = (event) => {
    const { name, value } = event.target;
    setStateForm({
      ...stateForm,
      [name]: value,
    });
  };
  //-----------------------------------------------------------------------------------//
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setErrorStateCheck({
      errorInputCheck: "checked",
    });
    //-----------------------------------------------------------------------------------//
    try {
      if( /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(stateForm.password) === true && 
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(stateForm.confirm) === true &&
      stateForm.password !== '' && stateForm.confirm !== '' && stateForm.password === stateForm.confirm ) {
        //-----------------------------------------------------------------------------------//
        console.log(`SUCCESSFULL: Password can be processed for local storage`);
        console.log(codexid, codeyid);
        const matchX = await bcrypt.compare(codexid, JSON.parse(localStorage.getItem('resetData')).codexID);
        const matchY = await bcrypt.compare(codeyid, JSON.parse(localStorage.getItem('resetData')).codeyID);
        if(matchX === true && matchY === true) {
          console.log(matchX, matchY, `\nSUCCESSFULL: Password can be fully processed`);
          // const { data } = await resPass({
          //   variables: {
          //     email: stateForm.email,
          //     password: stateForm.password,
          //   }
          // });
          // if (data) {
          //   setTimeout(() => {
          //     window.location.assign('/login');
          //   }, 3000);
          // } else {
          //     window.location.assign('/forgot-password');
          // }
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
                <label htmlFor="password">New Password <span>*</span></label>
                  <input type="password" id="password" name="password" placeholder="Insert your password" value={stateForm.password} onChange={handleChange} />
                  { 
                    errorStateChack.errorInputCheck && !(stateForm.password) ? 
                      (<div id="error-message-single">{`${htmlEntity.decode("&#9888;")} Insert new password `}</div>) : 
                    errorStateChack.errorInputCheck && !(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(stateForm.password)) && 
                      (<div id="error-message-single">{`${htmlEntity.decode("&#9888;")} Password not valid `}</div>)
                  }
                <label htmlFor="confirm">Confirm <span>*</span></label>
                  <input type="password" id="confirm" name="confirm" placeholder="Confirm your password" value={stateForm.confirm} onChange={handleChange} />
                  { 
                    errorStateChack.errorInputCheck && !(stateForm.confirm) ? 
                      (<div id="error-message-single">{`${htmlEntity.decode("&#9888;")} Confirm new password `}</div>) : 
                    errorStateChack.errorInputCheck && (!(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(stateForm.confirm)) 
                    || stateForm.confirm !== stateForm.password) && 
                      (<div id="error-message-single">{`${htmlEntity.decode("&#9888;")} Confirm not valid `}</div>)
                  }
                <button type="submit" id="submit" name="submit"><FontAwesomeIcon icon={faCircleCheck} /> Send Instructions</button>
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
