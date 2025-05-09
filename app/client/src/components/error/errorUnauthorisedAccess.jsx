import React from 'react';
import { Link } from 'react-router-dom';
//-------------------------------------------------------------------------//
class UnauthorisedAccessError extends React.Component {
  constructor(props) {
    super(props)
  }
  //-------------------------------------------------------------------------//
  render() {
    const backArrow = "<<<";
    return (
        <code>
            <p id='error-message'>Access denied!</p>
            <p id='message-unautorised'>Authentication required. Go to <Link to="/login">Login</Link> | <Link to="/signup" >Signup</Link></p>
            <p id="link"><Link to="/" > {backArrow} Go to Home</Link></p>
        </code>
    );
  }
}
//-------------------------------------------------------------------------//
export default UnauthorisedAccessError;
