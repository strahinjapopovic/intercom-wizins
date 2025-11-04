import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';
import { GET_USER } from '../utils/queries.js';
import { DELETE_USER } from '../utils/mutations';
import idIcon from '../assets/images/details-icon/id-icon.png';
import DataChild from '../components/datarow/DataRowChild.jsx';
import DataParent from '../components/datarow/DataRowParent.jsx';
import passIcon from '../assets/images/details-icon/pass-icon.png';
import SpinnerLoader from '../components/spinner/spinnerLoader.jsx';
import emailIcon from '../assets/images/details-icon/email-icon.png';
import userIcon from '../assets/images/details-icon/usertbl-icon.png';
import createdAtIcon from '../assets/images/details-icon/account-icon.png';
import DelBtnDialogBoxComp from '../components/dialogbox/deleteuserdialog.jsx';
import UnautorisedAccessErrorMsg from '../components/error/errorUnauthorisedAccess.jsx';
//-------------------------------------------------------------------------//
import TitleMain from '../components/title/index.jsx';
//-------------------------------------------------------------------------//
const Details = () => {
  const [deleteUser, { delLoading, }] = useMutation(DELETE_USER);
  //--------------------------------------------//
  const getUserData = () => {
    const { data, loading, error } = useQuery(GET_USER, {
      variables: { username: Auth.getProfile().data.username, },
    });
    let createdat = new Date(parseInt(data?.user.createdAt));
    return (
      <>
        {(error) ? <p style={{ paddingLeft: '10px', }}> Error: {error.message}</p> :
          (
            (loading) ? <div style={{ margin: '20px 5px 0 5px', }}><SpinnerLoader /></div> :
              (data) &&
              (<div id='user-data'>
                <DataParent>
                  <DataChild imgsrc={idIcon} data={data?.user.userID} />
                  <DataChild imgsrc={emailIcon} data={data?.user.email} />
                  <DataChild imgsrc={userIcon} data={data?.user.username} />
                  <DataChild imgsrc={createdAtIcon} data={createdat.toString()} />
                  <DataChild imgsrc={passIcon} data={`************`} link={(<a href='http://localhost:3000/forgot-password'>edit</a>)} />
                </DataParent>
                <DelBtnDialogBoxComp identifier={Auth.getProfile().data._id} deleteUser={deleteUser} loading={delLoading} />
              </div>)
          )
        }
      </>
    );
  }
  //--------------------------------------------//
  return (
    <div id="top">
      <main>
        <TitleMain />
        <section id='profile-main-sec'>
          {(Auth.loggedIn() && Auth.isTokenExpired(localStorage.getItem('id_token')) === false) ?
            (
              <div id='user-sec' >
                <div id='user-subsec'>
                  <div id='user-data-titlemain'>
                    <img src={userIcon} /><br />
                    <span id='first'>Welcome <span id='second'>{Auth.getProfile().data.firstName + ' ' + Auth.getProfile().data.lastName}</span></span>
                    <br />
                    Your details include
                    <br />
                    <span id='third'>{`( id, email, username and date/time when signed-up )`}</span>
                  </div>
                  {getUserData()}
                </div>
              </div>
            ) :
            (<section id='table-section'>
              <UnautorisedAccessErrorMsg />
            </section>)
          }
        </section>
      </main>
    </div>
  );
}
export default Details;