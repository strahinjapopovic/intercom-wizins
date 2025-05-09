import { Link } from 'react-router-dom';
import React, { Component } from 'react';
//-------------------------------------------------------------------------//
import winLogo from '../../assets/images/software-icon/win-logo.png';
import macLogo from '../../assets/images/software-icon/mac-logo.png';
//-------------------------------------------------------------------------//
import vscIcon from '../../assets/images/software-icon/vsc-icon.png';
import nodeIcon from '../../assets/images/software-icon/node-icon.png';
import mongodbIcon from '../../assets/images/software-icon/mongodb-icon.png';
import insomniaIcon from '../../assets/images/software-icon/insomnia-icon.png';
import postgresIcon from '../../assets/images/software-icon/postgresql-icon.png';
//-------------------------------------------------------------------------//
class HomeMobileComp extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='mainDownloadMobile' style={{padding: '10px', }}>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section id='mainTitle' 
                style={{borderBottom: '1px solid black', fontWeight: 'bold', fontSize: '18px', padding: '20px 0', color: 'rgba(1, 33, 55)', textAlign: 'center', }}>
                    <div><img src={winLogo} width={18} /> Windows-OS & <img src={macLogo} width={18} /> Mac-OSX</div>
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{borderBottom: '1px solid black', fontSize: '12px', padding: '30px 0', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '14px', color: 'rgba(1, 33, 55)', paddingBottom: '10px', textAlign: 'center', }}>
                        JS Full Stack Wizard Repo ( <Link to='https://github.com/strahinjapopovic/js-wizard'>js-wizard</Link> )
                    </div>
                    <div style={{textAlign: 'justify', }}>
                        GitHub Repository, <Link to='https://github.com/strahinjapopovic/js-wizard'>
                        js-wizard</Link> has been developed as a part of MERN testing project by utilizing React main concepts through Vite server config-dev patterns 
                        with Client-Serveer architecture, Apollo Server with GraphQL and MongoDB. More about repository you can find 
                        at <Link to='https://github.com/strahinjapopovic/js-wizard'>GitHub</Link>.
                        Main idea was to use this software to establish main utility repo-hub at individual private company server with specific adjustments in 
                        number of tools available, so everyone with company clearance can use it in everyday activities. 
                        This utility hub got a name Inter-Company Hub Repos ( ICHRs ).
                        Software is mainly developed for desktop devices but with minor responsivnes ajustments now it is awailable for 
                        mobile and tablet devices which improves user experience.
                        As mentioned above, more about this application and others, you can visit my GitHub 
                        repo <Link to='https://github.com/strahinjapopovic'>here</Link>.
                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{borderBottom: '1px solid black', fontSize: '12px', padding: '30px 0', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '16px', color: 'rgba(1, 33, 55)', paddingBottom: '10px', textAlign: 'center', }}>
                        Visual Studio Code (VS Code)
                    </div>
                    <div style={{textAlign: 'justify', }}>
                        <img src={vscIcon} width={25} /> <strong>Visual Studio Code</strong>, also commonly referred to as VS Code,
                        is a source-code editor developed by Microsoft for Windows, Linux, macOS and web browsers. Features include support for debugging,
                        syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded version control with Git.
                        For more information click <Link to='https://code.visualstudio.com/download'>here</Link>.
                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{borderBottom: '1px solid black', fontSize: '12px', padding: '30px 0', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '16px', color: 'rgba(1, 33, 55)', paddingBottom: '10px',  textAlign: 'center', }}>
                        Node.js (JS-RTE)
                    </div>
                    <div style={{textAlign: 'justify', }}>
                        <img src={nodeIcon} width={25} /> <strong>Node.js</strong> is a cross-platform, open-source JavaScript
                        runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes
                        JavaScript code outside a web browser. For more information click <a href='https://nodejs.org/en/download/prebuilt-installer'>here</a>.
                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{borderBottom: '1px solid black', fontSize: '12px', padding: '30px 0', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '16px', color: 'rgba(1, 33, 55)', paddingBottom: '10px',  textAlign: 'center', }}>
                        PostgreSQL Database (Postgres)
                    </div>
                    <div style={{textAlign: 'justify', }}>
                        <img src={postgresIcon} width={25} /> <strong>PostgreSQL</strong> is a powerful, open source object-relational
                        database system, also known as Postgres. It is a free and open-source relational database management system emphasizing extensibility and SQL
                        compliance. For more information click here for <a href='https://www.postgresql.org/download/windows/'>Windows OS</a> and here for
                        <a href='https://www.enterprisedb.com/downloads/postgres-postgresql-downloads'> Mac OS X</a>.
                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{borderBottom: '1px solid black', fontSize: '12px', padding: '30px 0', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '16px', color: 'rgba(1, 33, 55)', paddingBottom: '10px',  textAlign: 'center', }}>
                        MongoDB (NoSQL database)
                    </div>
                    <div style={{textAlign: 'justify', }}>
                        <img src={mongodbIcon} width={25} /> <strong>MongoDB</strong> is a source-available, cross-platform,
                        document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.
                        MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License. For more information
                        click here for <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/'>Windows OS</a> and here for
                        <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/'> Mac OSX</a>. To visit official MongoDB download center click
                        <a href='https://www.mongodb.com/try/download/community'> here</a>.
                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{borderBottom: '1px solid black', fontSize: '12px', padding: '30px 0', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '16px', color: 'rgba(1, 33, 55)', paddingBottom: '10px',  textAlign: 'center', }}>
                        Mongosh (MongoDB Shell)
                    </div>
                    <div style={{textAlign: 'justify', }}>
                        <img src={mongodbIcon} width={25} /> <strong>The MongoDB Shell or mongosh</strong>, is a JavaScript and Node.js REPL
                        (Read Eval Print Loop) environment for interacting with MongoDB deployments in Atlas  , locally, or on another remote host.
                        Use the MongoDB Shell to test queries and interact with the data in your MongoDB database. For more information
                        click here for <a href='https://www.mongodb.com/docs/mongodb-shell/install/'>installation </a>guide, also for
                        <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/'> downloads</a> and for additional
                        <a href='https://www.mongodb.com/docs/mongodb-shell/'> info</a>.
                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{fontSize: '12px', padding: '30px 0', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '16px', color: 'rgba(1, 33, 55)', paddingBottom: '10px',  textAlign: 'center', }}>
                        Insomnia (API Development Platform)
                    </div>
                    <div style={{textAlign: 'justify', }}>
                        <img src={insomniaIcon} width={25} /> <strong>Kong Insomnia</strong> is a collaborative open source API development
                        platform that makes it easy to build high-quality APIs — without the bloat and clutter of other tools. It's an application
                        that takes the pain out of interacting with and designing, debugging, and testing APIs. Insomnia combines an easy-to-use interface with advanced
                        functionality like authentication helpers, code generation, and environment variables. For more information
                        click here for <a href='https://docs.insomnia.rest/insomnia/install'>installation </a>guide, also for
                        <a href='https://insomnia.rest/download'> downloads</a> and for all available downloads at
                        <a href='https://github.com/Kong/insomnia/releases/tag/core@9.3.2'> GitHub</a>.
                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
            </div>
        );
    }
}
export default HomeMobileComp;