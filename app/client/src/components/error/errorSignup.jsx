import React from 'react';
import { Link } from 'react-router-dom';
//-------------------------------------------------------------------------//
class SignupErrorMsg extends React.Component {
  constructor(props) {
    super(props)
  }
  //-------------------------------------------------------------------------//
  render() {
    const backArrow = "<<<";
    return (
        <code>
            <p id='error-message'>Signup error!</p>
            <p id='message-unautorised'>Error occurred during signup process.<br />
              Main reason probably eCode validation failed. <br />
              Go to <Link to="/login">Login</Link> | <Link to="/signup" >Signup</Link>
            </p>
            <p id="link"><Link to="/" > {backArrow} Go to Home</Link></p>
        </code>
    );
  }
}
//-------------------------------------------------------------------------//
export default SignupErrorMsg;
