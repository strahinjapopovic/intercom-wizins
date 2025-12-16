import Auth from '../utils/auth';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
//-------------------------------------------------------------------------//
import TitleMain from '../components/title/index.jsx';
import HomeComponent from '../components/home/index.jsx';
import HomeMobileComponent from '../components/home/index-mobile.jsx';
//-------------------------------------------------------------------------//
function ErrorMessage() {
  const backArrow = "<<<";
  return (
    <code>
      <p id='error-message'>Access denied!</p>
      <p id='message-unautorised'>You have to logout. Press button below.</p>
      <p id="link"><Link to="/" onClick={Auth.logout()}> {backArrow} Back</Link></p>
    </code>
  );
}

const Home = () => {
  useEffect(() => {
    let isAuthenticatedToken = localStorage.getItem('id_token');
    if (isAuthenticatedToken && isAuthenticatedToken !== undefined) {
      localStorage.removeItem('id_token');
      window.location.assign('/');
    }
  }, []);

  return (
    <div id="top">
      <main>
        <TitleMain />
        <section id='table-section'>
          {Auth.loggedIn() ? (
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
