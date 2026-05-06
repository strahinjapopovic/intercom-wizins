import { LoggedIn } from '../utils/authent.js';
//-------------------------------------------------------------------------//
import TitleMain from '../components/title/index.jsx';
import DownloadComponent from '../components/download/index.jsx';
import DownloadMobileComp from '../components/download/index-mobile.jsx';
//-------------------------------------------------------------------------//
import UnautorisedAccessErrorMsg from '../components/error/errorUnauthorisedAccess.jsx';
//-------------------------------------------------------------------------//
const Download = () => {
  return (
    <div id="top">
      <main>
        <TitleMain />
        <section id='table-section'>
          {LoggedIn() ? (
            <>
              <DownloadComponent />
              <DownloadMobileComp />
            </>
          ) : (
            <>
              <UnautorisedAccessErrorMsg />
            </>
          )}
        </section>
      </main>
    </div>
  );
}
export default Download;