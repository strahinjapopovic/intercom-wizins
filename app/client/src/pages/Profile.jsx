import Auth from '../utils/auth';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { UPDATE_ONLINE_STATUS } from '../utils/mutations.js';
import InstallLink from '../components/installLink/index.jsx';
import UnautorisedAccessErrorMsg from '../components/error/errorUnauthorisedAccess.jsx';
//-------------------------------------------------------------------------//
import TitleMain from '../components/title/index.jsx';
//-------------------------------------------------------------------------//
import dashboardIco from '../../src/assets/images/profile-section-ico/dashboard.png';
import userAccountIco from '../../src/assets/images/profile-section-ico/userIcon.png';
import whoseOnlineIco from '../../src/assets/images/profile-section-ico/whosOnline.png';
import downloadSecIco from '../../src/assets/images/profile-section-ico/downloadIcon.png';
import ressetPassSecIco from '../../src/assets/images/profile-section-ico/resetPassIcon.png';
//-------------------------------------------------------------------------//
const Profile = () => {
  const [updateOnlineStatus, { data, loading, error }] = useMutation(UPDATE_ONLINE_STATUS);
  useEffect(() => {
    const username = Auth.getProfile().data.username;
    let sessionStatusChangeObj = {
      username: username,
      onlineStatus: 'Yes',
    };
    localStorage.setItem('online_status_change', JSON.stringify(sessionStatusChangeObj));
    const updateStatus = async () => {
      const { data } = await updateOnlineStatus({
        variables: {
          username: JSON.parse(localStorage.getItem('online_status_change')).username,
          online: JSON.parse(localStorage.getItem('online_status_change')).onlineStatus,
        }
      });
      data ? console.log(data) : console.log(`Error updating status`);
    }
    updateStatus();
  }, []);

  //-------------------------------------------------------------------------//
  return (
    <div id="top">
      <main>
        <TitleMain />
        <section id='profile-main-sec'>
          {Auth.loggedIn() ? (
            <>
              <div id='profileMain'>
                <div id='profileSection'>
                  <Link to='/dashboard'>
                    <img src={dashboardIco} />
                  </Link>
                  <br />
                  <Link to='/dashboard'>-:|:- <u>Dashboard</u></Link>
                </div>
                <InstallLink />
                <div id='profileSection'>
                  <Link to='/user-online'>
                    <img src={whoseOnlineIco} />
                  </Link>
                  <br />
                  <Link to='/user-online'>-:|:- Who's online</Link>
                </div>
                <div id='profileSection'>
                  <Link to='/download'>
                    <img src={downloadSecIco} />
                  </Link>
                  <br />
                  <Link to='/download'>-:|:- Download</Link>
                </div>
                <div id='profileSection'>
                  <Link to='/forgot-password'>
                    <img src={ressetPassSecIco} />
                  </Link>
                  <br />
                  <Link to='/forgot-password'>-:|:- Password reset</Link>
                </div>
                <div id='profileSection'>
                  <Link to='/account-details'>
                    <img src={userAccountIco} />
                  </Link>
                  <br />
                  <Link to='/account-details'>-:|:- Account details</Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <section id='table-section'>
                <UnautorisedAccessErrorMsg />
              </section>
            </>
          )}
        </section>
      </main>
    </div>
  );
}
export default Profile;