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
class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table id='main'>
                <tbody>
                    <tr>
                        <th>
                            <table id='table-title'>
                                <tbody>
                                    <tr>
                                        <th><img src={winLogo} width={60} /></th>
                                        <th>Windows-OS</th>
                                        <th><img src={macLogo} width={60} /></th>
                                        <th>Mac-OSX</th>
                                    </tr>
                                </tbody>
                            </table>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <table id='sub-tbl' style={{paddingTop: '40px ', paddingBottom: '40px', }}>
                                <tbody>
                                    <tr>
                                        <td id='title' style={{width: '100%', padding: '20px 20px', color: 'rgb(1, 33, 55)', }}>
                                            JS Full Stack Wizard Repo ( <Link to='https://github.com/strahinjapopovic/inter-com-wizins'>inter-com-wizins</Link> )
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="desc" style={{padding: '20px 20px', }}>Inter Company Wizard Installer (ICWI)
                                            or <Link to='https://github.com/strahinjapopovic/inter-com-wizins'>inter-com-wizins</Link> repo application, 
                                            has been developed as a part of MERN testing project by utilizing Vite server config-dev patterns with React main concepts through 
                                            Client-Serveer architecture, Apollo Server, GraphQL and MongoDB. More about repository you can find 
                                            at <Link to='https://github.com/strahinjapopovic/inter-com-wizins'>GitHub</Link>.
                                            Main idea was to use this software to establish main utility repo-hub at individual private company server with specific adjustments in 
                                            number of tools available, so everyone with company clearance can use it in everyday activities. 
                                            Software is mainly developed for desktop devices but now it is available for 
                                            mobile and tablet devices as well which improves user experience through all sizes.
                                            As mentioned above, more about this application, you can find at GitHub repository
                                            <Link to='https://github.com/strahinjapopovic/inter-com-wizins'>here</Link>.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table id='sub-tbl' style={{paddingTop: '40px ', paddingBottom: '40px', }}>
                                <tbody>
                                    <tr>
                                        <td rowSpan={2} id="desc-img" style={{width: '20%', borderRight: '3px solid rgb(8, 115, 187)', }}>
                                            <img src={vscIcon} width={70} />
                                        </td>
                                        <td id='title' style={{width: '80%', paddingLeft: '20px', }}>
                                            Visual Studio Code ( VS Code )
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="desc" style={{paddingLeft: '20px', }}><strong>Visual Studio Code</strong>, also commonly referred to as VS Code,
                                            is a source-code editor developed by Microsoft for Windows, Linux, macOS and web browsers. Features include support for debugging,
                                            syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded version control with Git.
                                            For more information click <a href='https://code.visualstudio.com/download'>here</a>.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table id='sub-tbl' style={{paddingTop: '40px ', paddingBottom: '40px', }}>
                                <tbody>
                                    <tr>
                                        <td id='desc-img' rowSpan={2} style={{width: '20%', borderRight: '3px solid rgb(3, 102, 3)', }}>
                                            <img src={nodeIcon} width={70} />
                                        </td>
                                        <td id='title' style={{width: '80%', paddingLeft: '20px', }}>
                                            Node.js ( JS-RTE )
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="desc" style={{paddingLeft: '20px', }}><strong>Node.js</strong> is a cross-platform, open-source JavaScript
                                            runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes
                                            JavaScript code outside a web browser. For more information click <a href='https://nodejs.org/en/download/prebuilt-installer'>here</a>.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table id='sub-tbl' style={{paddingTop: '40px ', paddingBottom: '40px', }}>
                                <tbody>
                                    <tr>
                                        <td rowSpan={2} id='desc-img' style={{width: '20%', borderRight: '3px solid rgb(7, 93, 151)', }}>
                                            <img src={postgresIcon} width={70} />
                                        </td>
                                        <td id='title' style={{width: '80%', paddingLeft: '20px', }}>
                                            PostgreSQL Database ( Postgres )
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="desc" style={{paddingLeft: '20px', }}><strong>PostgreSQL</strong> is a powerful, open source object-relational
                                            database system, also known as Postgres. It is a free and open-source relational database management system emphasizing extensibility and SQL
                                            compliance. For more information click here for <a href='https://www.postgresql.org/download/windows/'>Windows OS</a> and here for
                                            <a href='https://www.enterprisedb.com/downloads/postgres-postgresql-downloads'> Mac OS X</a>.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <table id='sub-tbl' style={{paddingTop: '40px ', paddingBottom: '40px', }}>
                                <tbody>
                                    <tr>
                                        <td rowSpan={2} id='desc-img' style={{width: '20%', borderRight: '3px solid rgb(3, 102, 3)', }}>
                                            <img src={mongodbIcon} width={70} />
                                        </td>
                                        <td id='title' style={{width: '80%', paddingLeft: '20px', }}>
                                            MongoDB ( NoSQL database )
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="desc" style={{paddingLeft: '20px', }}><strong>MongoDB</strong> is a source-available, cross-platform,
                                            document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.
                                            MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License. For more information
                                            click here for <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/'>Windows OS</a> and here for
                                            <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/'> Mac OSX</a>. To visit official MongoDB download center click
                                            <a href='https://www.mongodb.com/try/download/community'> here</a>.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table id='sub-tbl' style={{paddingTop: '40px ', paddingBottom: '40px', }}>
                                <tbody>
                                    <tr>
                                        <td rowSpan={2} id='desc-img' style={{width: '20%', borderRight: '3px solid rgb(3, 102, 3)', }}>
                                            <img src={mongodbIcon} width={70} />
                                        </td>
                                        <td id='title' style={{width: '80%', paddingLeft: '20px', }}>
                                            Mongosh ( MongoDB Shell )
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="desc" style={{paddingLeft: '20px', }}><strong>The MongoDB Shell or mongosh</strong>, is a JavaScript and Node.js REPL
                                            (Read Eval Print Loop) environment for interacting with MongoDB deployments in Atlas  , locally, or on another remote host.
                                            Use the MongoDB Shell to test queries and interact with the data in your MongoDB database. For more information
                                            click here for <a href='https://www.mongodb.com/docs/mongodb-shell/install/'>installation </a>guide, also for
                                            <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/'> downloads</a> and for additional
                                            <a href='https://www.mongodb.com/docs/mongodb-shell/'> info</a>.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <table id='sub-tbl' style={{paddingTop: '40px ', paddingBottom: '40px', }}>
                                <tbody>
                                    <tr>
                                        <td rowSpan={2} id='desc-img' style={{width: '20%', borderRight: '3px solid rgb(75,0,130)', }}>
                                            <img src={insomniaIcon} width={70} />
                                        </td>
                                        <td id='title' style={{width: '80%', paddingLeft: '20px', }}>
                                            Insomnia ( API Development Platform )
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="desc" style={{paddingLeft: '20px', }}><strong>Kong Insomnia</strong> is a collaborative open source API development
                                            platform that makes it easy to build high-quality APIs — without the bloat and clutter of other tools. It is an application
                                            that takes the pain out of interacting with and designing, debugging, and testing APIs. Insomnia combines an easy-to-use interface with advanced
                                            functionality like authentication helpers, code generation, and environment variables. For more information
                                            click here for <a href='https://docs.insomnia.rest/insomnia/install'>installation </a>guide, also for
                                            <a href='https://insomnia.rest/download'> downloads</a> and for all available downloads at
                                            <a href='https://github.com/Kong/insomnia/releases/tag/core@9.3.2'> GitHub</a>.
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}
export default HomeComponent;