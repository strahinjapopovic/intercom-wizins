import { useState, useEffect } from 'react';
import { GET_USER } from '../utils/graphql/queries.ts';
import { DELETE_USER } from '../utils/graphql/mutations.ts';
import idIcon from '../assets/images/details-icon/id-icon.png';
import DataChild from '../components/datarow/DataRowChild.jsx';
import type { PayloadGetUserTypes } from '../../types/types.ts';
import DataParent from '../components/datarow/DataRowParent.jsx';
import passIcon from '../assets/images/details-icon/pass-icon.png';
import SpinnerLoader from '../components/spinner/spinnerLoader.jsx';
import emailIcon from '../assets/images/details-icon/email-icon.png';
import userIcon from '../assets/images/details-icon/usertbl-icon.png';
import { skipToken, useQuery, useMutation } from '@apollo/client/react';
import { LoggedIn, getProfile, IsTokenExpired } from '../utils/authent.js';
import createdAtIcon from '../assets/images/details-icon/account-icon.png';
import DelBtnDialogBoxComp from '../components/dialogbox/deleteuserdialog.jsx';
import UnautorisedAccessErrorMsg from '../components/error/errorUnauthorisedAccess.jsx';
//-------------------------------------------------------------------------//
import TitleMain from '../components/title/index.jsx';
//-------------------------------------------------------------------------//
const Details = () => {
  const localStorToken = localStorage.getItem('id_token');
  const [userIdState, setUserIdState] = useState<string | null>();
  const [usernameState, setUsernameState] = useState<string | null>();
  const [lastNameState, setLastNameState] = useState<string | null>();
  const [firstNameState, setFirstNameState] = useState<string | null>();
  const [deleteUser, { loading: delLoading, }] = useMutation(DELETE_USER);
  //--------------------------------------------//
  useEffect(() => {
    const getUsername = getProfile() as PayloadGetUserTypes | null;
    //--------------------------------------------//
    try {
      if (getUsername) {
        const userId = getUsername?.data._id;
        const userName = getUsername?.data.username;
        const firstNameStr = getUsername?.data.firstName;
        const lastNameStr = getUsername?.data.lastName;
        //----------------------------------------------//
        setUserIdState(userId);
        setUsernameState(userName);
        setFirstNameState(firstNameStr);
        setLastNameState(lastNameStr);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  //--------------------------------------------//
  const getUserData = () => {
    const { data, loading, error } = useQuery(
      GET_USER,
      usernameState
        ? { variables: { username: usernameState } }
        : skipToken
    );
    useEffect(() => {
      if (data) {
        console.log("Data loaded successfully!", data);
      }
    }, [data]);
    useEffect(() => {
      if (error) {
        console.error("Query failed:", error);
      }
    }, [error]);
    let createdat = new Date(parseInt(data?.user?.createdAt ?? "0"));
    return (
      <>
        {(error) ? <p style={{ paddingLeft: '10px', }}> Error: {error.message}</p> :
          (
            (loading) ? <div style={{ margin: '20px 5px 0 5px', }}><SpinnerLoader /></div> :
              (data) &&
              (<div id='user-data'>
                <DataParent>
                  <DataChild imgsrc={idIcon} data={data?.user?.userID} />
                  <DataChild imgsrc={emailIcon} data={data?.user?.email} />
                  <DataChild imgsrc={userIcon} data={data?.user?.username} />
                  <DataChild imgsrc={createdAtIcon} data={createdat.toString()} />
                  <DataChild imgsrc={passIcon} data={`************`} link={(<a href='http://localhost:3000/forgot-password'>edit</a>)} />
                </DataParent>
                <DelBtnDialogBoxComp identifier={userIdState} deleteUser={deleteUser} loading={delLoading} />
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
          {localStorToken && (LoggedIn() && IsTokenExpired(localStorToken) === false) ?
            (
              <div id='user-sec' >
                <div id='user-subsec'>
                  <div id='user-data-titlemain'>
                    <img src={userIcon} /><br />
                    <span id='first'>Welcome <span id='second'>{firstNameState + ' ' + lastNameState}</span></span>
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