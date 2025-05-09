import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../utils/queries.js';
import { useNavigate, Link } from 'react-router-dom';
import backArrow from '../assets/images/profile-section-ico/backArrow.png';
import UnautorisedAccessErrorMsg from '../components/error/errorUnauthorisedAccess.jsx';
//-------------------------------------------------------------------------//
import TitleMain from '../components/title/index.jsx';
//-------------------------------------------------------------------------//
const Details = () => {
  //--------------------------------------------//
  const getUserData = () => {
    const { data, loading, error } = useQuery(GET_USER, {
      variables: { username: Auth.getProfile().data.username, },
    });
    //--------------------------------------------//
    if(data) {
      console.log(data);
      console.log(Auth.getProfile());
      return data;
    } else if(error) {
      return `Error! ${error}`;
    } else if(loading) {
      return `Loading...`;
    }
  }
  //--------------------------------------------//
  console.log
  const navigate = useNavigate();
  return (
    <div id="top">
      <main>
        <TitleMain />
        <section id='profile-main-sec'>
          { Auth.loggedIn() ? (
            <>
              <div id='user-sec' >
                <div id='user-data'>
                  {/* <span style={{ cursor: 'pointer', }} onClick={() => navigate("/profile")}>
                    <img style={{ width: '35px', border: '1px solid aqua', background: 'aqua', }} src={backArrow} alt='Back button image'/>
                  </span> */}
                  <p id='user-data-sub-title'>Account User Data</p>
                  <div id='data-main'>
                    <p>Owner {getUserData()?.user?.firstName} {getUserData()?.user?.lastName}</p>
                  </div>
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
export default Details;