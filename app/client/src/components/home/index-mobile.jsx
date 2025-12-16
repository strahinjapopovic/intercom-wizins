import React from 'react';
import { Link } from 'react-router-dom';
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
class HomeMobileComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='mainDownloadMobile' style={{border: '1px solid rgb(1, 33, 55)', padding: '0 20px 20px 20px', 
            backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', lineHeight: '1.6', }}>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section id='mainTitleHome' 
                    style={{fontWeight: 'bold', padding: '30px 0', fontSize: '20px', color: 'rgb(1, 33, 55)', textAlign:'center', }}>
                    <div><img src={winLogo} width={18} /> Windows-OS & <img src={macLogo} width={18} /> Mac-OSX</div>
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{border: '1px solid rgb(1, 33, 55)', fontSize: '12px', padding: '30px 20px', 
                    borderRadius: '3px', marginBottom: '20px', backgroundColor: 'white', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '14px', color: 'rgba(1, 33, 55)', paddingBottom: '10px', textAlign: 'center', }}>
                        Intercom Wizard Installer Repo (<Link to='https://github.com/strahinjapopovic/intercom-wizins'>intercom-wizins</Link>)
                    </div>
                    <div style={{textAlign: 'justify', }}>
                        Intercom Wizard Installer (ICWI)
                        or <Link to='https://github.com/strahinjapopovic/intercom-wizins'>intercom-wizins</Link> repo application, 
                        has been developed as a part of MERN testing project by utilizing Vite server config-dev patterns with React main concepts through 
                        Client-Serveer architecture, Apollo Server, GraphQL and MongoDB. More about repository you can find 
                        at <Link to='https://github.com/strahinjapopovic/intercom-wizins'>GitHub</Link>.
                        Main idea was to use this software to establish main utility repo-hub at individual private company server with specific adjustments in 
                        number of tools available, so everyone with company clearance can use it in everyday activities. 
                        Software is mainly developed for desktop devices but now it is available for 
                        mobile and tablet devices as well which improves user experience through all sizes.
                        As mentioned above, more about this application, you can find at GitHub repository
                        <Link to='https://github.com/strahinjapopovic/intercom-wizins'>here</Link>.
                    </div>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{border: '1px solid rgb(1, 33, 55)', fontSize: '12px', padding: '30px 20px', 
                    borderRadius: '3px', marginBottom: '20px', backgroundColor: 'white', }}>
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
                <section style={{border: '1px solid rgb(1, 33, 55)', fontSize: '12px', padding: '30px 20px', 
                    borderRadius: '3px', marginBottom: '20px', backgroundColor: 'white', }}>
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
                <section style={{border: '1px solid rgb(1, 33, 55)', fontSize: '12px', padding: '30px 20px', 
                    borderRadius: '3px', marginBottom: '20px', backgroundColor: 'white', }}>
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
                <section style={{border: '1px solid rgb(1, 33, 55)', fontSize: '12px', padding: '30px 20px', 
                    borderRadius: '3px', marginBottom: '20px', backgroundColor: 'white', }}>
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
                <section style={{border: '1px solid rgb(1, 33, 55)', fontSize: '12px', padding: '30px 20px', 
                    borderRadius: '3px', marginBottom: '20px', backgroundColor: 'white', }}>
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
                <section style={{border: '1px solid rgb(1, 33, 55)', fontSize: '12px', padding: '30px 20px', 
                    borderRadius: '3px', marginBottom: '20px', backgroundColor: 'white', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '16px', color: 'rgba(1, 33, 55)', paddingBottom: '10px',  textAlign: 'center', }}>
                        Insomnia (API Development Platform)
                    </div>
                    <div style={{textAlign: 'justify', }}>
                        <img src={insomniaIcon} width={25} /> <strong>Kong Insomnia</strong> is a collaborative open source API development
                        platform that makes it easy to build high-quality APIs — without the bloat and clutter of other tools. It is an application
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