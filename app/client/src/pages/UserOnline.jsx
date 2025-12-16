import Auth from '../utils/auth.js';
import { useQuery } from '@apollo/client';
import { GET_ONLINE_USERS } from '../utils/queries.js';
import SpinnerLoader from '../components/spinner/spinnerLoader.jsx';
import emailIcon from '../assets/images/details-icon/email-icon.png';
import userIcon from '../assets/images/details-icon/usertbl-icon.png';
import UnautorisedAccessErrorMsg from '../components/error/errorUnauthorisedAccess.jsx';
//-------------------------------------------------------------------------//
import TitleMain from '../components/title/index.jsx';
//-------------------------------------------------------------------------//
const DetailsOnlineUsers = () => {
  //--------------------------------------------//
  const { data, loading, error } = useQuery(GET_ONLINE_USERS);
  //--------------------------------------------//
  return (
    <div id="top">
      <main>
        <TitleMain />
        <section id='profile-main-sec'>
          { (Auth.loggedIn() && Auth.isTokenExpired(localStorage.getItem('id_token')) === false) ? (
              <div id='user-sec' >
                <div id='user-subsec'>
                  <div id='user-data-titlemain'>
                    <img src={userIcon}/><br />
                    <span id='first'><span id='second'>Currently online users </span>{`>`}</span>
                  </div>
                  <div id='user-data'>
                    <div id='onlineUserTbl' style={{display: 'flex', flexDirection: 'column', }} >
                        { (error) ? <div style={{ paddingLeft: '10px', }}> Error: {error.message}</div> :
                          (
                            (loading) ? <div style={{margin: '20px 5px 0 5px', }}><SpinnerLoader /></div> :
                            (data) && data.getOnlineUsers.map(user => (
                            <div id='onlineUser' key={user._id} style={{display: 'flex', flexDirection: 'row', }} >
                              <div id='usrImg' style={{margin: '0 auto', width: '100%', borderBottom: '1px solid navy', }} >
                                <div id='onlineUsrDesc' style={{display: 'flex', flexDirection: 'row', padding: '10px', }}>
                                  <img src={userIcon} alt="User icon" style={{width: '40px', height: '40px', paddingRight: '10px', }}/>
                                  <p style={{margin: '0', padding: '0', }}>
                                    <b>{user.firstName} {user.lastName}</b>
                                    <br /><strong>Username:</strong> {user.username} 
                                    <br />( <img src={emailIcon} style={{width: '20px', }}/> {user.email} )
                                    <br /><strong>Online:</strong> {user.online}
                                  </p>
                                </div>
                              </div>
                            </div>
                            ))
                          )
                        }
                    </div>
                  </div>
                </div>
              </div>
          ) : (
            <section id='table-section'>
              <UnautorisedAccessErrorMsg />
            </section>
          )}
        </section>
      </main>
    </div>
  );
}
export default DetailsOnlineUsers;