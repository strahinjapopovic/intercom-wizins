import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER } from '../../utils/graphql/queries.ts';
import { UPDATE_ONLINE_STATUS } from '../../utils/graphql/mutations.ts';
import { Logout, LoggedIn, getProfile} from '../../utils/authent.ts';
//-------------------------------------------------------------------------//
import topBanner from '../../assets/react.svg';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import iconMain from '../../assets/images/favicon/wLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRightToBracket, faHouse, faGear, faPersonCirclePlus, faLock,
  faCube, faUser, faDownload, faUsersViewfinder, faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';
//-------------------------------------------------------------------------//
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [installable, setInstallable] = useState(false);
  const [updateOnlineStatus, { data, loading, error }] = useMutation(UPDATE_ONLINE_STATUS);
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
      data ? Logout() : console.log(`Error updating status`);
    } catch (error) {
      console.log(error);
    }
  };
  //-------------------------------------------------------------------------//
  const loggedIn = function () {
    const { data: dataq, loading: loadingq, error: errorq } = useQuery(GET_USER, {
      variables: { username: getProfile().data.username, },
    });
    if (dataq) { return `Hi ${dataq.user.firstName} ${dataq.user.lastName}!`; }
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
    if (!promptEvent) {
      return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
  };
  //-------------------------------------------------------------------------//
  const classNameIsActiveFunc = ({ isActive }) => { return (isActive ? 'isActive' : 'topBtn') };
  //-------------------------------------------------------------------------//
  return (
    <>
      <div id='mainNavBarTop' className={LoggedIn() ? (isOpen ? 'isOpenTopLoggedIn' : '') : (isOpen ? 'isOpenTopHome' : '')}>
        <img src={topBanner} style={{ height: '60px', paddingTop: '5px', marginLeft: '10px', }} />
        {LoggedIn() ? (
          <>
            {isOpen &&
              (<div id='openNavLink'>
                <div id='headerBtnDiv' className={isOpen ? 'isOpen' : ''} >
                  <NavLink id="Link" className="topBtn" onClick={handleInstallClick}><FontAwesomeIcon id='solidIcon' icon={faGear} /></NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} to="/dashboard"><FontAwesomeIcon id='solidIcon' icon={faCube} /></NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} to="/download"><FontAwesomeIcon id='solidIcon' icon={faDownload} /></NavLink>
                  <NavLink id='Link' className={classNameIsActiveFunc} to="/user-online"><FontAwesomeIcon id='solidIcon' icon={faUsersViewfinder} /></NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} to="/account-details"><FontAwesomeIcon id='solidIcon' icon={faUser} /></NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} to="/change-password"><FontAwesomeIcon id='solidIcon' icon={faLock} /></NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} onClick={logout} style={{
                    textDecoration: 'none',
                    backgroundColor: 'rgb(1, 33, 55)',
                    color: 'aqua',
                  }}><FontAwesomeIcon id='solidIcon' icon={faRightFromBracket} /></NavLink>
                </div>
              </div>)
            }
          </>
        ) : (
          <>
            {isOpen &&
              (<div id='openNavLink'>
                <div id='headerBtnDiv' className={isOpen ? 'isOpen' : ''}>
                  <NavLink id="Link" className="topBtn" onClick={handleInstallClick}><FontAwesomeIcon id='solidIcon' icon={faGear} /></NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} to="/"><FontAwesomeIcon id='solidIcon' icon={faHouse} /></NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} to="/login"><FontAwesomeIcon id='solidIcon' icon={faRightToBracket} /></NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} to="/signup"><FontAwesomeIcon id='solidIcon' icon={faPersonCirclePlus} /></NavLink>
                  <NavLink id="Link" className={classNameIsActiveFunc} to="/forgot-password"><FontAwesomeIcon id='solidIcon' icon={faLock} /></NavLink>
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
      <div id="header" className={LoggedIn() ? 'isLoggedInGreetingMarginTop' : ''} >
        <section id="header-main" className={LoggedIn() ? (isOpen ? 'isOpenMoveDownLoggedIn' : '') : (isOpen ? 'isOpenMoveDownHome' : '')} >
          <span id='greeting'>{LoggedIn() ? loggedIn() : ``}</span>
          <p><FontAwesomeIcon icon={faJs} style={{ color: "#012137", }} /> Intercom<br />FS WizIns<br /><span>Repo</span></p>
          <img id='mobileImgMain' src={iconMain} width={90} style={{ margin: '10px calc((100% - 90px) / 2 )', }} />
        </section>
      </div>
    </>
  );
}
export default Header;
