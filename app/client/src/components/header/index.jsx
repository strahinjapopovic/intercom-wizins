import { useState } from 'react';
import Auth from '../../utils/auth.js';
import { NavLink } from 'react-router-dom';
import { GET_USER } from '../../utils/queries';
import { useQuery, useMutation } from '@apollo/client';
import { UPDATE_ONLINE_STATUS } from '../../utils/mutations.js';
//-------------------------------------------------------------------------//
import topBanner from '../../assets/react.svg';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconMain from '../../assets/images/favicon/starliner-1.png';
//-------------------------------------------------------------------------//
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [installable, setInstallable] = useState(false);
  const [updateOnlineStatus, {data, loading, error}] = useMutation(UPDATE_ONLINE_STATUS);
  //-------------------------------------------------------------------------//
  const logout = async (event) => {
    event.preventDefault();
    try {
      const { data } = await updateOnlineStatus({
        variables: {
          username: JSON.parse(localStorage.getItem('online_status_change')).username,
          online: 'No',
        }
      });
      data ? Auth.logout() : console.log(`Error updating status`);
    } catch(error) {
      console.log(error);
    }
  };
  //-------------------------------------------------------------------------//
  const loggedIn = function() {
    const { data: dataq, loading: loadingq, error: errorq } = useQuery(GET_USER, {
      variables: { username: Auth.getProfile().data.username, },
    });
    if(dataq)
    { return `Hi ${dataq.user.firstName} ${dataq.user.lastName}!`; }
  }
  //-------------------------------------------------------------------------//
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    setInstallable(true);
  });
  window.addEventListener('appinstalled', function (event) {
    window.deferredPrompt = null;
  });
  const handleInstallClick = function (event) {
    event.preventDefault();
    const promptEvent = window.deferredPrompt;
    if(!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
  };
  //-------------------------------------------------------------------------//
  const classNameIsActiveFunc = ({ isActive }) => { return ( isActive ? 'isActive' : 'topBtn' )};
  //-------------------------------------------------------------------------//
  return (
    <>
      <div id='mainNavBarTop' className={ Auth.loggedIn() ? (isOpen ? 'isOpenTopLoggedIn' : '') : (isOpen ? 'isOpenTopHome' : '') }>
        <img src={topBanner} style={{height: '60px', paddingTop: '5px', marginLeft: '10px', }} />
        { Auth.loggedIn() ? ( 
          <>
            {isOpen &&
              (<div id='openNavLink'>
                <div id='headerBtnDiv' className={isOpen ? 'isOpen' : ''} >
                  <NavLink id="Link" className="topBtn" onClick={handleInstallClick}>Install</NavLink>
                  <NavLink id='Link' className={classNameIsActiveFunc} to="/user-online">Who's Online</NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} to="/dashboard">Dashboard</NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} to="/download">Download</NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} to="/account-details">Account Details</NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} to="/forgot-password">Reset Password</NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} onClick={logout} style={{
                    textDecoration: 'none', backgroundColor: 'rgb(1, 33, 55)',
                    color: 'aqua',
                  }}>Logout</NavLink>
                </div>
              </div>)
            }
          </>
        ) : (
          <>
            {isOpen &&
              (<div id='openNavLink'>
                <div id='headerBtnDiv' className={isOpen ? 'isOpen' : ''}>
                    <NavLink id="Link" className="topBtn" onClick={handleInstallClick}>Install</NavLink>
                    <NavLink id="Link" className={classNameIsActiveFunc} to="/">Home</NavLink>
                    <NavLink id="Link" className={classNameIsActiveFunc} to="/login">Login</NavLink>
                    <NavLink id="Link" className={classNameIsActiveFunc} to="/signup">Sign up</NavLink>
                    <NavLink id="Link" className={classNameIsActiveFunc} to="/forgot-password">Forgot Password</NavLink>
                </div>
              </div>)
            }
          </>
        )}
      </div>
      <button id='burgerBtnNavBar' onClick={() => setIsOpen(!isOpen)}>
        <div id='btnSec' className={isOpen ? 'isOpen' : ''}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div id="header" className={ Auth.loggedIn() ? 'isLoggedInGreetingMarginTop'  : '' } >
        <section id="header-main" className={ Auth.loggedIn() ? (isOpen ? 'isOpenMoveDownLoggedIn' : '') : (isOpen ? 'isOpenMoveDownHome' : '') } >
          <span id='greeting'>{ Auth.loggedIn() ? loggedIn() : `` }</span>
          <p><FontAwesomeIcon icon={faJs} style={{color: "#012137", }} /> Intercom<br />FS WizIns<br /><span>Repo</span></p>
          <img id='mobileImgMain' src={iconMain} width={110} style={{margin: '10px calc((100% - 90px) / 2 )', }}/>
        </section>
      </div>
    </>
  );
}
export default Header;
