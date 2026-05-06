import { Link } from 'react-router-dom';
import { LoggedIn, Logout } from '../utils/authent.js';
//-------------------------------------------------------------------------//
import TitleMain from '../components/title/index.jsx';
import HomeComponent from '../components/home/index.jsx';
import HomeMobileComponent from '../components/home/index-mobile.jsx';
import UpdateOnlineStatusChange from '../components/updateuserstatus/useronlinestatus.tsx';
//-------------------------------------------------------------------------//
const Home = () => {
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
  const ErrorMessage = () => {
    const backArrow = "<<<";
    return (
      <code>
        <p id='error-message'>Access denied!</p>
        <p id='message-unautorised'>You have to logout. Press button below.</p>
        <p id="link"><Link to="/" onClick={() => Logout()}> {backArrow} Back</Link></p>
      </code>
    );
  }
  //--------------------------------------------//
  return (
    <div id="top">
      <main>
        <TitleMain />
        <section id='table-section'>
          {LoggedIn() ? (
            <>
              <ErrorMessage />
            </>
          ) : (
            <>
              <HomeComponent />
              <HomeMobileComponent />
            </>
          )}
        </section>
      </main>
    </div>
  );
}
export default Home;
