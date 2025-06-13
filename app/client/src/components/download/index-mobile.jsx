import React from 'react';
import { Link } from 'react-router-dom';
//-------------------------------------------------------------------------//
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
class DownloadMobileComp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='mainDownloadMobile' style={{border: '1px solid rgb(1, 33, 55)', padding: '0 20px 20px 20px', 
            backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', }}>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section id='mainTitleDownload' 
                style={{fontWeight: 'bold', padding: '30px 0', fontSize: '20px', color: 'rgb(1, 33, 55)', textAlign:'center', }}>
                    <div><img src={winLogo} width={18} /> Windows-OS & <img src={macLogo} width={18} /> Mac-OSX</div>
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{fontSize: '12px', padding: '20px', border: '1px solid rgb(1, 33, 55)', 
                    backgroundColor: 'white', marginBottom: '20px', borderRadius: '3px', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '18px', }}>Visual Studio Code (VS Code)</div><br />
                    <div style={{textAlign: 'justify', }}>
                        <img src={vscIcon} width={30} /> <strong>Visual Studio Code</strong>, also commonly referred to as VS Code,
                        is a source-code editor developed by Microsoft for Windows, Linux, macOS and web browsers. Features include support for debugging,
                        syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded version control with Git.
                        For more information click <Link to='https://code.visualstudio.com/download'>here</Link>.
                    </div><br />
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', }}>
                        <div><p><strong>OS:</strong> WindowsOS x86-64 (10, 11)</p></div>
                        <div>
                            <p><strong>File:</strong> <a href='https://js-wizard-s3.s3.amazonaws.com/win/VSCode-Setup-1.91.1_WindowsOS-x64.exe' download>VSCode-Setup-1.91.1_WindowsOS-x64 (.exe)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 94.9 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/VSCode-Setup-1.91.1_WindowsOS-x64.exe' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', marginTop: '20px', }}>
                        <div><p><strong>OS:</strong> MacOS x86-64 (10.15+)</p></div>
                        <div>
                            <p><strong>File:</strong> <a href='https://js-wizard-s3.s3.amazonaws.com/mac/VSCode-Universal_MacOS.zip' download>VSCode-Universal_MacOS (.zip)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 212 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/VSCode-Universal_MacOS.zip' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', marginTop: '20px', }}>
                        <div><p><strong>OS:</strong> WindowsOS x64 (ARM64)</p></div>
                        <div>
                            <p><strong>File:</strong> <a href='https://js-wizard-s3.s3.amazonaws.com/win/VSCodeUserSetup-1.91.1-ARM64.exe' download>VSCodeUserSetup-1.91.1-ARM64 (.exe)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 94.9 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/VSCodeUserSetup-1.91.1-ARM64.exe' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    <section id='subSection'
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', marginTop: '20px', }}>
                        <div><p><strong>OS:</strong> Apple Silicon (ARM64)</p></div>
                        <div>
                            <p><strong>File:</strong> <a href='https://js-wizard-s3.s3.amazonaws.com/mac/VSCode-darwin-arm64.zip' download>VSCode-darwin-arm64 (.zip)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 124 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/VSCode-darwin-arm64.zip' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{fontSize: '12px', padding: '20px', border: '1px solid rgb(1, 33, 55)', 
                    backgroundColor: 'white', marginBottom: '20px', borderRadius: '3px', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '18px', }}>Node.js (JS-RTE)</div><br />
                    <div style={{textAlign: 'justify', }}>
                        <img src={nodeIcon} width={30} /> <strong>Node.js</strong> is a cross-platform, open-source JavaScript
                        runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes
                        JavaScript code outside a web browser. For more information click <a href='https://nodejs.org/en/download/prebuilt-installer'>here</a>.
                    </div><br />
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', }}>
                        <div><p><strong>OS:</strong> WindowsOS x86-64</p></div>
                        <div>
                            <p><strong>File:</strong> <a href='https://js-wizard-s3.s3.amazonaws.com/win/Node-v22.5.1_WindowsOS-x64.msi' download>Node-v22.5.1_WindowsOS-x64 (.msi)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 27.5 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/Node-v22.5.1_WindowsOS-x64.msi' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', marginTop: '20px', }}>
                        <div><p><strong>OS:</strong> MacOS x86-64</p></div>
                        <div>
                            <p><strong>File:</strong> <a href='https://js-wizard-s3.s3.amazonaws.com/mac/Node-v22.5.1_MacOS-x64.pkg'>Node-v22.5.1_MacOS-x64 (.pkg)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 78.6 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/Node-v22.5.1_MacOS-x64.pkg' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', marginTop: '20px', }}>
                        <div><p><strong>OS:</strong> WindowsOS (ARM64)</p></div>
                        <div>
                            <p><strong>File:</strong> <a href='https://js-wizard-s3.s3.amazonaws.com/win/Node-v22.5.1_WindowsOS-ARM64.msi' download>Node-v22.5.1_WindowsOS-ARM64 (.msi)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 24.2 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/Node-v22.5.1_WindowsOS-ARM64.msi'>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    <section id='subSection'
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', marginTop: '20px', }}>
                        <div><p><strong>OS:</strong> MacOS (ARM64)</p></div>
                        <div>
                            <p><strong>File:</strong> <a href='https://js-wizard-s3.s3.amazonaws.com/mac/Node-v22.5.1_MacOS-ARM64.pkg' download>Node-v22.5.1_MacOS-ARM64 (.pkg)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 70.7 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/Node-v22.5.1_MacOS-ARM64.pkg' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{fontSize: '12px', padding: '20px', border: '1px solid rgb(1, 33, 55)', 
                    backgroundColor: 'white', marginBottom: '20px', borderRadius: '3px', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '18px', }}>PostgreSQL Database (Postgres)</div><br />
                    <div style={{textAlign: 'justify', }}>
                        <img src={postgresIcon} width={30} /> <strong>PostgreSQL</strong> is a powerful, open source object-relational
                        database system, also known as Postgres. It is a free and open-source relational database management system emphasizing extensibility and SQL
                        compliance. For more information click here for <a href='https://www.postgresql.org/download/windows/'>Windows OS</a> and here for
                        <a href='https://www.enterprisedb.com/downloads/postgres-postgresql-downloads'> Mac OS X</a>.
                    </div><br />
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', }}>
                        <div><p><strong>OS:</strong> WindowsOS x86-64</p></div>
                        <div>
                            <p>
                                <strong>File: </strong> 
                                <a href='https://js-wizard-s3.s3.amazonaws.com/win/PostgreSQL-16.3-2_WindowsOS-x64.exe' download>PostgreSQL-16.3-2_WindowsOS-x64 (.exe)</a>
                            </p>
                        </div>
                        <div><p><strong>Size:</strong> [ 367 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/PostgreSQL-16.3-2_WindowsOS-x64.exe' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', marginTop: '20px', }}>
                        <div><p><strong>OS:</strong> MacOS x86-64</p></div>
                        <div>
                            <p>
                                <strong>File: </strong> 
                                <a href='https://js-wizard-s3.s3.amazonaws.com/mac/PostgreSQL-16.3-1_OSX.dmg' download>PostgreSQL-16.3-1_OSX (.dmg)</a>
                            </p>
                        </div>
                        <div><p><strong>Size:</strong> [ 369 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/PostgreSQL-16.3-1_OSX.dmg' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{fontSize: '12px', padding: '20px', border: '1px solid rgb(1, 33, 55)', 
                    backgroundColor: 'white', marginBottom: '20px', borderRadius: '3px', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '18px', }}>MongoDB (NoSQL database)</div><br />
                    <div style={{textAlign: 'justify', }}>
                        <img src={mongodbIcon} width={30} /> <strong>MongoDB</strong> is a source-available, cross-platform,
                        document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.
                        MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License. For more information
                        click here for <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/'>Windows OS</a> and here for
                        <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/'> Mac OSX</a>. To visit official MongoDB download center click
                        <a href='https://www.mongodb.com/try/download/community'> here</a>.
                    </div><br />
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', }}>
                        <div><p><strong>OS:</strong> WindowsOS x86-64</p></div>
                        <div>
                            <p><strong>File:</strong> <a href='https://js-wizard-s3.s3.amazonaws.com/win/MongoDB-7.0.12_WindowsOS-x86-64-signed.msi' download>MongoDB-7.0.12_WindowsOS-x86-64-signed (.msi)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 568 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/MongoDB-7.0.12_WindowsOS-x86-64-signed.msi' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', marginTop: '20px', }}>
                        <div><p><strong>OS:</strong> MacOS x86-64</p></div>
                        <div>
                            <p><strong>File:</strong> <a href='https://js-wizard-s3.s3.amazonaws.com/mac/MongoDB-7.0.12_MacOS-x86-64.tgz' download>MongoDB-7.0.12_MacOS-x86-64 (.tgz)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 70.8 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/MongoDB-7.0.12_MacOS-x86-64.tgz' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', marginTop: '20px', }}>
                        <div><p><strong>OS:</strong> WindowsOS x86-64</p></div>
                        <div>
                            <p>
                                <strong>File: </strong> 
                                <a href='https://js-wizard-s3.s3.amazonaws.com/win/MongoDB-7.0.12_Windows-x86_64.zip' download>MongoDB-7.0.12_Windows-x86_64 (.zip)</a>
                            </p>
                        </div>
                        <div>
                            <p><strong>Size:</strong> [ 590 (MB) ]</p>
                        </div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/MongoDB-7.0.12_Windows-x86_64.zip' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    <section id='subSection'
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', marginTop: '20px', }}>
                        <div><p><strong>OS:</strong> MacOS (ARM64)</p></div>
                        <div>
                            <p>
                                <strong>File: </strong> 
                                <a href='https://js-wizard-s3.s3.amazonaws.com/mac/MongoDB-7.0.12_MacOS-ARM64.tgz' download>MongoDB-7.0.12_MacOS-ARM64 (.tgz)</a>
                            </p>
                        </div>
                        <div><p><strong>Size:</strong> [ 65.3 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/MongoDB-7.0.12_MacOS-ARM64.tgz' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{fontSize: '12px', padding: '20px', border: '1px solid rgb(1, 33, 55)', 
                    backgroundColor: 'white', marginBottom: '20px', borderRadius: '3px', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '18px', }}>Mongosh (MongoDB Shell)</div><br />
                    <div style={{textAlign: 'justify', }}>
                        <img src={mongodbIcon} width={30} /> <strong>The MongoDB Shell or mongosh</strong>, is a JavaScript and Node.js REPL
                        (Read Eval Print Loop) environment for interacting with MongoDB deployments in Atlas  , locally, or on another remote host.
                        Use the MongoDB Shell to test queries and interact with the data in your MongoDB database. For more information
                        click here for <a href='https://www.mongodb.com/docs/mongodb-shell/install/'>installation </a>guide, also for
                        <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/'> downloads</a> and for additional
                        <a href='https://www.mongodb.com/docs/mongodb-shell/'> info</a>.
                    </div><br />
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', }}>
                        <div><p><strong>OS:</strong> WindowsOS x86-64</p></div>
                        <div>
                            <p><strong>File: </strong> 
                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/Mongosh-2.2.12_WindowsOS-x64.msi' download>Mongosh-2.2.12_WindowsOS-x64 (.msi)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 44.3 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/Mongosh-2.2.12_WindowsOS-x64.msi' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', marginTop: '20px', }}>
                        <div><p><strong>OS:</strong> MacOS x86-64</p></div>
                        <div>
                            <p><strong>File: </strong> 
                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/Mongosh-2.2.12_MacOS-x64.zip' download>Mongosh-2.2.12_MacOS-x64 (.zip)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 69.5 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/Mongosh-2.2.12_MacOS-x64.zip' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                <section style={{fontSize: '12px', padding: '20px', border: '1px solid rgb(1, 33, 55)', 
                    backgroundColor: 'white', marginBottom: '20px', borderRadius: '3px', }}>
                    <div id='title' style={{fontWeight: 'bold', fontSize: '18px', }}>Insomnia (API Development Platform)</div><br />
                    <div style={{textAlign: 'justify', }}>
                        <img src={insomniaIcon} width={30} /> <strong>Kong Insomnia</strong> is a collaborative open source API development
                        platform that makes it easy to build high-quality APIs — without the bloat and clutter of other tools. It is an application
                        that takes the pain out of interacting with and designing, debugging, and testing APIs. Insomnia combines an easy-to-use interface with advanced
                        functionality like authentication helpers, code generation, and environment variables. For more information
                        click here for <a href='https://docs.insomnia.rest/insomnia/install'>installation </a>guide, also for
                        <a href='https://insomnia.rest/download'> downloads</a> and for all available downloads at
                        <a href='https://github.com/Kong/insomnia/releases/tag/core@9.3.2'> GitHub</a>.
                    </div><br />
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', }}>
                        <div><p><strong>OS:</strong> WindowsOS x86-64</p></div>
                        <div>
                            <p><strong>File: </strong> 
                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/Insomnia-Core-9.3.2_WindowsOS-x64.exe' download>Insomnia-Core-9.3.2_WindowsOS-x64 (.exe)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 151 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/Insomnia-Core-9.3.2_WindowsOS-x64.exe' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    <section id='subSection' 
                    style={{padding: '5px 5px 0 5px', backgroundColor: 'rgb(240, 240, 240)', borderRadius: '3px', border: '1px solid black', marginTop: '20px', }}>
                        <div><p><strong>OS:</strong> MacOS x86-64</p></div>
                        <div>
                            <p><strong>File: </strong> 
                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/Insomnia-Core-9.3.2_MacOSX.dmg' download>Insomnia-Core-9.3.2_MacOSX (.dmg)</a></p>
                        </div>
                        <div><p><strong>Size:</strong> [ 216 (MB) ]</p></div>
                        <div>
                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/Insomnia-Core-9.3.2_MacOSX.dmg' download>
                                <button id='download'>Download
                                    <span id="vline">
                                        <FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} />
                                    </span>
                                </button>
                            </a>
                        </div>
                    </section>
                    {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
                </section>
                {/*----------------------------------------------------------------------------------------------------------------------------------------------*/}
            </div>
        );
    }
}
export default DownloadMobileComp;