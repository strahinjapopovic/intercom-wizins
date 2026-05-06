import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../utils/authent.js';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/graphql/mutations.ts';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Checkbox } from '../components/checkbox/index.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SpinnerLoader from '../components/spinner/spinnerLoader.jsx';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import alertSign from '../assets/images/message-icon/alert-sign.png';
import UpdateOnlineStatusChange from '../components/updateuserstatus/useronlinestatus.tsx';
//--------------------------------------------//  
const Login = () => {
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
  const [checked, setChecked] = useState(true);
  const onHandleChange = () => {
    setChecked(!checked);
  }
  //--------------------------------------------//
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [iconShowPass, setIconShowPass] = useState(<FaEyeSlash />);
  const [logins, { data, loading, error }] = useMutation(LOGIN_USER);
  //--------------------------------------------//
  const handleShowPasswordVisibility = () => {
    setShowPassword(!showPassword);
    setIconShowPass(showPassword ? <FaEyeSlash /> : <FaEye />);
  }
  //--------------------------------------------//
  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  //--------------------------------------------//
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    try {
      const { data } = await logins({
        variables: { ...formState },
      });
      if (loading) return <SpinnerLoader/>;
      if (error) return <p>{error.message}</p>;
      if (data) {
        setTimeout(() => {
          login(data.login.token);
        }, 2000);
      }
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
                <span id='title-main' style={{ marginLeft: '10%', }}>JS</span>
                <p id='titleMessage' style={{ marginBottom: '20px', }}>Profile Login</p>
                {error && (<div id="error-message"><span><img src={alertSign} style={{ width: '23px', }} /> {`${error.name}`}</span><br /><br />{`${error.message}`}</div>)}
                {checked ?
                  (<>
                    <label htmlFor="email">Email <span>*</span></label>
                    <input type="text" id="email" name="email" placeholder="Insert your email" value={formState.email} onChange={handleChange} />
                  </>) :
                  (<>
                    <label htmlFor="username">Username <span>*</span></label>
                    <input type="text" id="username" name="username" placeholder="Insert your username" value={formState.username} onChange={handleChange} />
                  </>)}
                <div
                  style={{
                    position: 'relative',
                  }}>
                  <label htmlFor="password">Password <span>*</span></label>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Insert password"
                    value={formState.password}
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
                <Checkbox label="Uncheck to use an username to login" value={checked} onChange={onHandleChange} /><br />
                <p><Link id='forgot-password' to='/forgot-password'>Forgot your password?</Link></p>
                <button type="submit" id="submit" name="submit"><FontAwesomeIcon icon={faRightToBracket} /> Login</button>
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
