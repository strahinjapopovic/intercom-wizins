import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import InstallLink from '../components/installLink/index.jsx';
import UnautorisedAccessErrorMsg from '../components/error/errorUnauthorisedAccess.jsx';
//-------------------------------------------------------------------------//
import TitleMain from '../components/title/index.jsx';
//-------------------------------------------------------------------------//
import userAccountIco from '../../src/assets/images/profile-section-ico/userIcon.png';
import downloadSecIco from '../../src/assets/images/profile-section-ico/downloadIcon.png';
import ressetPassSecIco from '../../src/assets/images/profile-section-ico/ressPassIcon.png';
//-------------------------------------------------------------------------//
const Profile = () => {
  return (
    <div id="top">
      <main>
        <TitleMain />
        <section id='profile-main-sec'>
          {Auth.loggedIn() ? (
            <>
              <div id='profileMain'>
                <InstallLink />
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
                  <Link to='/forgot-password'>-:|:- Reset Password</Link>
                </div>
                <div id='profileSection'>
                  <Link to='/account-details'>
                  <img src={userAccountIco} />
                  </Link>
                  <br />
                  <Link to='/account-details'>-:|:- Account Details</Link>
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