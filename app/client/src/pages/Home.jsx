import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import { Component } from 'react';
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
class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
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
}
export default Home;
