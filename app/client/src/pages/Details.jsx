import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { GET_USER } from '../utils/queries.js';
import { DELETE_USER } from '../utils/mutations';
import idIcon from '../assets/images/details-icon/id-icon.png';
import DataChild from '../components/datarow/DataRowChild.jsx';
import DataParent from '../components/datarow/DataRowParent.jsx';
import passIcon from '../assets/images/details-icon/pass-icon.png';
import emailIcon from '../assets/images/details-icon/email-icon.png';
import userIcon from '../assets/images/details-icon/usertbl-icon.png';
import DelBtnComp from '../components/buttoncomp/DeleteUserAccountBtn.jsx';
import createdAtIcon from '../assets/images/details-icon/account-icon.png';
import UnautorisedAccessErrorMsg from '../components/error/errorUnauthorisedAccess.jsx';
//-------------------------------------------------------------------------//
import TitleMain from '../components/title/index.jsx';
//-------------------------------------------------------------------------//
const Details = () => {
  const [deleteUser, { loading, }] = useMutation(DELETE_USER);
  //--------------------------------------------//
  const getUserData = () => {
    const { data, loading, error } = useQuery(GET_USER, {
      variables: { username: Auth.getProfile().data.username, },
    });
    if(data) {
      return data;
    } 
    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
  }
  //--------------------------------------------//
  let createdat = new Date(parseInt(getUserData().user?.createdAt));
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
                    <span id='first'>Welcome <span id='second'>{getUserData().user?.firstName + ' ' + getUserData().user?.lastName}</span></span><br />
                    Your details include<br />
                    <span id='third'>{`{ ID, Email, Username and Date/Time when signed-up }`}</span>
                  </div>
                  <div id='user-data'>
                    <DataParent>
                      <DataChild imgsrc={idIcon} data={getUserData().user?._id} />
                      <DataChild imgsrc={emailIcon} data={getUserData().user?.email} />
                      <DataChild imgsrc={userIcon} data={getUserData().user?.username} />
                      <DataChild imgsrc={createdAtIcon} data={createdat.toString()} />
                      <DataChild imgsrc={passIcon} data={`************`} link={(<a href='http://localhost:3000/forgot-password'>edit</a>)}/>
                    </DataParent>
                    <DelBtnComp identifier={Auth.getProfile().data._id} deleteUser={deleteUser} loading={loading} />
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
export default Details;