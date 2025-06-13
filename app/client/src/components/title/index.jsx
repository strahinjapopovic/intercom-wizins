import React from 'react';
//-------------------------------------------------------------------------//
import dirIcon from '../../assets/images/directory-icon/folder-dev-icon.png';
//-------------------------------------------------------------------------//
class TitleMain extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <>
                <h2><span id='title-main'>JS</span> Full-Stack Software Repository</h2>
                <h1><img id='icrImg' src={dirIcon} /> Inter Company Wizard Installer (ICWI)</h1>
            </>
        );
    }
}
export default TitleMain;