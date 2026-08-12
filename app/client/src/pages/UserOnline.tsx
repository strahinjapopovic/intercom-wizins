import { useQuery } from '@apollo/client/react';
import type { UserDataDisplay } from '../../types/types.ts';
import { GET_ONLINE_USERS } from '../utils/graphql/queries.ts';
import { LoggedIn, IsTokenExpired } from '../utils/authent.js';
import SpinnerLoader from '../components/spinner/spinnerLoader.jsx';
import emailIcon from '../assets/images/details-icon/email-icon.png';
import userIcon from '../assets/images/details-icon/usertbl-icon.png';
import UnautorisedAccessErrorMsg from '../components/error/errorUnauthorisedAccess.jsx';
//-------------------------------------------------------------------------//
import TitleMain from '../components/title/index.jsx';
//-------------------------------------------------------------------------//
const DetailsOnlineUsers = () => {
  const localStorToken = localStorage.getItem('id_token');
  const { data, loading, error } = useQuery<UserDataDisplay>(GET_ONLINE_USERS);
  //--------------------------------------------//
  return (
    <div id="top">
      <main>
        <TitleMain />
        <section id='profile-main-sec'>
          {localStorToken && (LoggedIn() && IsTokenExpired(localStorToken) === false) ? (
            <div id='user-sec' >
              <div id='user-subsec'>
                <div id='user-data-titlemain'>
                  <img src={userIcon} /><br />
                  <span id='first'><span id='second'>Currently online users </span>{`>_`}</span>
                </div>
                <div id='user-data'>
                  <div id='onlineUserTbl' style={{ display: 'flex', flexDirection: 'column', }} >
                    <div id='onlineUsersHeader' >
                      <div>Name</div><div>Username</div><div>Email</div><div>Online status</div>
                    </div>
                    <div id='helperBorder'>
                      {(error) ? <div style={{ paddingLeft: '10px', }}> Error: {error.message}</div> :
                        (
                          (loading) ? <div style={{ margin: '20px 5px 0 5px', }}><SpinnerLoader /></div> :
                            (data) && data?.getOnlineUsers.map(user => (
                              <div id='onlineUser'
                                key={user._id}
                              >
                                <div id='usrerDescription'>
                                  <div id='onlineUsrDesc'>
                                    <div id='onlineUserDescImg'>
                                      <img
                                        src={userIcon}
                                        alt="User icon"
                                      />
                                    </div>
                                    <div>
                                      <b id='labelData'>Name: </b>{user.firstName} {user.lastName}
                                    </div>
                                    <div>
                                      <b id='labelData'>Username: </b>{user.username}
                                    </div>
                                    <div>
                                      <b id='labelData'>Email: </b>{user.email}
                                    </div>
                                    <div>
                                      <b id='labelData'>Online status: </b>{user.online}
                                    </div>
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