import { LoggedIn } from '../utils/authent.js';
import InstallLink from '../components/installLink/index.jsx';
import UnautorisedAccessErrorMsg from '../components/error/errorUnauthorisedAccess.jsx';
import UpdateOnlineStatusClone from '../components/updateuserstatus/useronlinestatusclone.tsx';
//-------------------------------------------------------------------------//
import TitleMain from '../components/title/index.jsx';
//-------------------------------------------------------------------------//
import ProfilePart from '../components/dashboard/parent/ProfileParent.jsx';
//-------------------------------------------------------------------------//
import DashLnk from '../components/dashboard/children/DashLink.jsx';
import UserOnline from '../components/dashboard/children/UserOnline.jsx';
import DetailsLink from '../components/dashboard/children/DetailsLink.jsx';
import DownloadLink from '../components/dashboard/children/DownloadLink.jsx';
import ResetPassLink from '../components/dashboard/children/ResetPassLink.jsx';
//-------------------------------------------------------------------------//
const Profile = () => {
  UpdateOnlineStatusClone();
  //-------------------------------------------------------------------------//
  return (
    <div id="top">
      <main>
        <TitleMain />
        <section id='profile-main-sec'>
          {LoggedIn() ? (
            <ProfilePart>
              <DashLnk />
              <InstallLink />
              <UserOnline />
              <DownloadLink />
              <DetailsLink />
              <ResetPassLink />
            </ProfilePart>
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