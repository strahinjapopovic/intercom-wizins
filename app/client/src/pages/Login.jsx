import { useState } from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { Checkbox } from '../components/checkbox/index.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SpinnerLoader from '../components/spinner/spinnerLoader.jsx';
import alertSign from '../assets/images/message-icon/alert-sign.png';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
//--------------------------------------------//  
const Login = (props) => {
//--------------------------------------------//
  const [checked, setChecked] = useState(true);
  const onHandleChange = () => {
    setChecked(!checked);
  };
  //--------------------------------------------//
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [login, { data, loading, error }] = useMutation(LOGIN_USER);
  //--------------------------------------------//
  const handleChange = function (event) {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  //--------------------------------------------//
  const handleFormSubmit = async function (event) {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      setTimeout(() => {
        Auth.login(data.login.token);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  //--------------------------------------------//
    // clear form values
    setFormState({
      email: '',
      username: '',
      password: '',
    });
  };
  //--------------------------------------------//
  return (
    <>
    {data ?
      <SpinnerLoader /> : 
      <div id="top">
        <section className="input-login-form">
          <div id="input-login-sec">
            <form id='login' onSubmit={handleFormSubmit}>
              <span id='title-main' style={{marginLeft: '10%', }}>JS</span>
              <p id='titleMessage' style={{marginBottom: '20px', }}>Profile Login</p>
              {error && (<div id="error-message"><span><img src={alertSign} style={{ width: '23px', }}/> {`${error.name}`}</span><br /><br />{`${error.message}`}</div>)}
              {checked ?
              (<>
                <label htmlFor="email">Email <span>*</span></label>
                <input type="text" id="email" name="email" placeholder="Insert your email" value={formState.email} onChange={handleChange} />
              </>) :
              (<>
                <label htmlFor="username">Username <span>*</span></label>
                <input type="text" id="username" name="username" placeholder="Insert your username" value={formState.username} onChange={handleChange} />
              </>)}
              <label htmlFor="password">Password <span>*</span></label>
              <input type="password" id="password" name="password" placeholder="Insert password" value={formState.password} onChange={handleChange}/>
              <Checkbox label="Uncheck to use an username to login" value={checked} onChange={onHandleChange} /><br />
              <p><Link id='forgot-password' to='/forgot-password'>Forgot your password?</Link></p>
              <button type="submit" id="submit" name="submit"><FontAwesomeIcon icon={faRightFromBracket} /> Login</button>
            </form>
            <div id='newUserRegistrationBox'>
              <div id='newSub'>
                <p>New to Wizard Repo? <Link to='/signup'>Create your profile!</Link></p>
              </div>
            </div>
          </div>
        </section>
      </div>}
    </>
  );
};
//--------------------------------------------//
export default Login;
