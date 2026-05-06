import * as React from 'react';
//-------------------------------------------------------------------------//
import SignupErrorMsg from '../components/error/errorSignup.jsx';
//-------------------------------------------------------------------------//
class SignupError extends React.Component {
  render() {
    return (
      <div id="top">
        <main>
          <h3><span id='title-main'>JS</span> Full-Stack Software Repository</h3>
          <section id='profile-main-sec'>
              <section id='table-section'>
                  <SignupErrorMsg />
              </section>
          </section>
        </main>
      </div>
    );
  }
}
export default SignupError;