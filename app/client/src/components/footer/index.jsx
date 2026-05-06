import React from 'react';
import { Link } from 'react-router-dom';
//-------------------------------------------------------------------------//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';
//-------------------------------------------------------------------------//
class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() };
  }
  //-------------------------------------------------------------------------//
  render() {
    return (
      <footer id="bottom">
        <p><FontAwesomeIcon icon={faJs} style={{color: "aqua", }} /><span> InterCom-FullStackWizInsRepo</span></p>
        <p>Copyright &copy; { this.state.date.getFullYear() } <Link to={"https://github.com/strahinjapopovic/js-wizard"}>strahinjapopovic@github</Link><br />
        All rights reserved.</p>
      </footer>
    );
  }
}
//-------------------------------------------------------------------------//
export default Footer;
