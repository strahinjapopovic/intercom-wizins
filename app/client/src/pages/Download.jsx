import Auth from '../utils/auth';
import React, { Component } from 'react';
//-------------------------------------------------------------------------//
import TitleMain from '../components/title/index.jsx';
import DownloadComponent from '../components/download/index.jsx';
import DownloadMobileComp from '../components/download/index-mobile.jsx';
//-------------------------------------------------------------------------//
import UnautorisedAccessErrorMsg from '../components/error/errorUnauthorisedAccess.jsx';
//-------------------------------------------------------------------------//
class Download extends Component {
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
  };
}
export default Download;