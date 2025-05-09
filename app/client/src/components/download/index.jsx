import { Link } from 'react-router-dom';
import React, { Component } from 'react';
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
class DownloadComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table id='main'>
                <tbody>
                    <tr>
                        <th colSpan={4}>
                            <table id='table-title'>
                                <tbody>
                                    <tr>
                                        <th><img src={winLogo} width={60} /></th><th>Windows-OS</th><th><img src={macLogo} width={60} /></th><th>Mac-OSX</th>
                                    </tr>
                                </tbody>
                            </table>
                        </th>
                    </tr>
                    {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <tr>
                        <td colSpan={4}>
                            <table id='sub-tbl'>
                                <tbody>
                                    <tr>
                                    <td rowSpan={2} id="desc-img"><img src={vscIcon} width={60} /></td><td id='title' colSpan={3}>Visual Studio Code ( VS Code )</td>
                                    </tr>
                                    <tr>
                                        <td id="desc" colSpan={3}><strong>Visual Studio Code</strong>, also commonly referred to as VS Code,
                                            is a source-code editor developed by Microsoft for Windows, Linux, macOS and web browsers. Features include support for debugging,
                                            syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded version control with Git.
                                            For more information click <Link to='https://code.visualstudio.com/download'>here</Link>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="devider" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="space" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="label">Operating System:</td><td id='os-box'>WindowsOS x86-64 (10, 11)</td>
                                        <td id="slabel">Operating System:</td><td id='os-box'>MacOS x86-64 (10.15+)</td>
                                    </tr>
                                    <tr>
                                        <td id="label">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/win/VSCode-Setup-1.91.1_WindowsOS-x64.exe' download>VSCode-Setup-1.91.1_WindowsOS-x64 (.exe)</a></td>
                                        <td id="slabel">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/mac/VSCode-Universal_MacOS.zip' download>VSCode-Universal_MacOS (.zip)</a></td>
                                    </tr>
                                    <tr>
                                        <td id="label">94.9 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/VSCode-Setup-1.91.1_WindowsOS-x64.exe' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                        <td id="slabel">212 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/VSCode-Universal_MacOS.zip' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="devider" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="space" colSpan={4}></td>
                                    </tr>
                                    {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
                                    <tr>
                                        <td id="label">Operating System:</td><td id='os-box'>WindowsOS x64 (ARM64)</td>
                                        <td id="slabel">Operating System:</td><td id='os-box'>Apple Silicon (ARM64)</td>
                                    </tr>
                                    <tr>
                                        <td id="label">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/win/VSCodeUserSetup-1.91.1-ARM64.exe' download>VSCodeUserSetup-1.91.1-ARM64 (.exe)</a></td>
                                        <td id="slabel">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/mac/VSCode-darwin-arm64.zip' download>VSCode-darwin-arm64 (.zip)</a></td>
                                    </tr>
                                    <tr>
                                        <td id="label">94.9 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/VSCodeUserSetup-1.91.1-ARM64.exe' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                        <td id="slabel">124 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/VSCode-darwin-arm64.zip' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <tr>
                        <td colSpan={4}>
                            <table id='sub-tbl'>
                                <tbody>
                                    <tr>
                                        <td rowSpan={2} id='desc-img'><img src={nodeIcon} width={60} /></td><td id='title' colSpan={3}>Node.js ( JS-RTE )</td>
                                    </tr>
                                    <tr>
                                        <td id="desc" colSpan={3}><strong>Node.js</strong> is a cross-platform, open-source JavaScript
                                            runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes
                                            JavaScript code outside a web browser. For more information click <a href='https://nodejs.org/en/download/prebuilt-installer'>here</a>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="devider" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="space" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="label">Operating System:</td><td id='os-box'>WindowsOS x86-64</td>
                                        <td id="slabel">Operating System:</td><td id='os-box'>MacOS x86-64</td>
                                    </tr>
                                    <tr>
                                        <td id="label">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/win/Node-v22.5.1_WindowsOS-x64.msi' download>Node-v22.5.1_WindowsOS-x64 (.msi)</a></td>
                                        <td id="slabel">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/mac/Node-v22.5.1_MacOS-x64.pkg'>Node-v22.5.1_MacOS-x64 (.pkg)</a></td>
                                    </tr>
                                    <tr>
                                        <td id="label">27.5 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/Node-v22.5.1_WindowsOS-x64.msi' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                        <td id="slabel">78.6 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/Node-v22.5.1_MacOS-x64.pkg' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="devider" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="space" colSpan={4}></td>
                                    </tr>
                                    {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
                                    <tr>
                                        <td id="label">Operating System:</td><td id='os-box'>WindowsOS (ARM64)</td>
                                        <td id="slabel">Operating System:</td><td id='os-box'>MacOS (ARM64)</td>
                                    </tr>
                                    <tr>
                                        <td id="label">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/win/Node-v22.5.1_WindowsOS-ARM64.msi' download>Node-v22.5.1_WindowsOS-ARM64 (.msi)</a></td>
                                        <td id="slabel">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/mac/Node-v22.5.1_MacOS-ARM64.pkg' download>Node-v22.5.1_MacOS-ARM64 (.pkg)</a></td>
                                    </tr>
                                    <tr>
                                        <td id="label">24.2 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/Node-v22.5.1_WindowsOS-ARM64.msi'>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                        <td id="slabel">70.7 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/Node-v22.5.1_MacOS-ARM64.pkg' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <tr>
                        <td colSpan={4}>
                            <table id='sub-tbl'>
                                <tbody>
                                    <tr>
                                    <td rowSpan={2} id='desc-img'><img src={postgresIcon} width={60} /></td><td id='title' colSpan={3}>PostgreSQL Database ( Postgres )</td>
                                    </tr>
                                    <tr>
                                        <td id="desc" colSpan={3}><strong>PostgreSQL</strong> is a powerful, open source object-relational
                                            database system, also known as Postgres. It is a free and open-source relational database management system emphasizing extensibility and SQL
                                            compliance. For more information click here for <a href='https://www.postgresql.org/download/windows/'>Windows OS</a> and here for
                                            <a href='https://www.enterprisedb.com/downloads/postgres-postgresql-downloads'> Mac OS X</a>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="devider" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="space" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="label">Operating System:</td><td id='os-box'>WindowsOS x86-64</td>
                                        <td id="slabel">Operating System:</td><td id='os-box'>MacOS x86-64</td>
                                    </tr>
                                    <tr>
                                        <td id="label">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/win/PostgreSQL-16.3-2_WindowsOS-x64.exe' download>PostgreSQL-16.3-2_WindowsOS-x64 (.exe)</a></td>
                                        <td id="slabel">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/mac/PostgreSQL-16.3-1_OSX.dmg' download>PostgreSQL-16.3-1_OSX (.dmg)</a></td>
                                    </tr>
                                    <tr>
                                        <td id="label">367 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/PostgreSQL-16.3-2_WindowsOS-x64.exe' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                        <td id="slabel">369 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/PostgreSQL-16.3-1_OSX.dmg' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <tr>
                        <td colSpan={4}>
                            <table id='sub-tbl'>
                                <tbody>
                                    <tr>
                                    <td rowSpan={2} id='desc-img'><img src={mongodbIcon} width={60} /></td><td id='title' colSpan={3}>MongoDB ( NoSQL database )</td>
                                    </tr>
                                    <tr>
                                        <td id="desc" colSpan={3}><strong>MongoDB</strong> is a source-available, cross-platform,
                                            document-oriented database program. Classified as a NoSQL database product, MongoDB utilizes JSON-like documents with optional schemas.
                                            MongoDB is developed by MongoDB Inc. and current versions are licensed under the Server Side Public License. For more information
                                            click here for <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/'>Windows OS</a> and here for
                                            <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/'> Mac OSX</a>. To visit official MongoDB download center click
                                            <a href='https://www.mongodb.com/try/download/community'> here</a>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="devider" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="space" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="label">Operating System:</td><td id='os-box'>WindowsOS x86-64</td>
                                        <td id="slabel">Operating System:</td><td id='os-box'>MacOS x86-64</td>
                                    </tr>
                                    <tr>
                                        <td id="label">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/win/MongoDB-7.0.12_WindowsOS-x86-64-signed.msi' download>MongoDB-7.0.12_WindowsOS-x86-64-signed (.msi)</a></td>
                                        <td id="slabel">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/mac/MongoDB-7.0.12_MacOS-x86-64.tgz' download>MongoDB-7.0.12_MacOS-x86-64 (.tgz)</a></td>
                                    </tr>
                                    <tr>
                                        <td id="label">568 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/MongoDB-7.0.12_WindowsOS-x86-64-signed.msi' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                        <td id="slabel">70.8 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/MongoDB-7.0.12_MacOS-x86-64.tgz' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                    </tr>
                                    {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
                                    <tr>
                                        <td id="devider" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="space" colSpan={4}></td>
                                    </tr>
                                    {/* ------------------------------------------------------------------------------------------------------------------------------------- */}
                                    <tr>
                                        <td id="label">Operating System:</td><td id='os-box'>WindowsOS x86-64</td>
                                        <td id="slabel">Operating System:</td><td id='os-box'>MacOS (ARM64)</td>
                                    </tr>
                                    <tr>
                                        <td id="label">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/win/MongoDB-7.0.12_Windows-x86_64.zip' download>MongoDB-7.0.12_Windows-x86_64 (.zip)</a></td>
                                        <td id="slabel">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/mac/MongoDB-7.0.12_MacOS-ARM64.tgz' download>MongoDB-7.0.12_MacOS-ARM64 (.tgz)</a></td>
                                    </tr>
                                    <tr>
                                        <td id="label">590 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/MongoDB-7.0.12_Windows-x86_64.zip' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                        <td id="slabel">65.3 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/MongoDB-7.0.12_MacOS-ARM64.tgz' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <tr>
                        <td colSpan={4}>
                            <table id='sub-tbl'>
                                <tbody>
                                    <tr>
                                    <td rowSpan={2} id='desc-img'><img src={mongodbIcon} width={60} /></td><td id='title' colSpan={3}>Mongosh ( MongoDB Shell )</td>
                                    </tr>
                                    <tr>
                                        <td id="desc" colSpan={3}><strong>The MongoDB Shell or mongosh</strong>, is a JavaScript and Node.js REPL
                                            (Read Eval Print Loop) environment for interacting with MongoDB deployments in Atlas  , locally, or on another remote host.
                                            Use the MongoDB Shell to test queries and interact with the data in your MongoDB database. For more information
                                            click here for <a href='https://www.mongodb.com/docs/mongodb-shell/install/'>installation </a>guide, also for
                                            <a href='https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/'> downloads</a> and for additional
                                            <a href='https://www.mongodb.com/docs/mongodb-shell/'> info</a>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="devider" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="space" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="label">Operating System:</td><td id='os-box'>WindowsOS x86-64</td>
                                        <td id="slabel">Operating System:</td><td id='os-box'>MacOS x86-64</td>
                                    </tr>
                                    <tr>
                                        <td id="label">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/win/Mongosh-2.2.12_WindowsOS-x64.msi' download>Mongosh-2.2.12_WindowsOS-x64 (.msi)</a></td>
                                        <td id="slabel">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/mac/Mongosh-2.2.12_MacOS-x64.zip' download>Mongosh-2.2.12_MacOS-x64 (.zip)</a></td>
                                    </tr>
                                    <tr>
                                        <td id="label">44.3 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/Mongosh-2.2.12_WindowsOS-x64.msi' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                        <td id="slabel">69.5 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/Mongosh-2.2.12_MacOS-x64.zip' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <tr>
                        <td colSpan={4}>
                            <table id='sub-tbl'>
                                <tbody>
                                    <tr>
                                    <td rowSpan={2} id='desc-img'><img src={insomniaIcon} width={60} /></td><td id='title' colSpan={3}>Insomnia ( API Development Platform )</td>
                                    </tr>
                                    <tr>
                                        <td id="desc" colSpan={3}><strong>Kong Insomnia</strong> is a collaborative open source API development
                                            platform that makes it easy to build high-quality APIs — without the bloat and clutter of other tools. It's an application
                                            that takes the pain out of interacting with and designing, debugging, and testing APIs. Insomnia combines an easy-to-use interface with advanced
                                            functionality like authentication helpers, code generation, and environment variables. For more information
                                            click here for <a href='https://docs.insomnia.rest/insomnia/install'>installation </a>guide, also for
                                            <a href='https://insomnia.rest/download'> downloads</a> and for all available downloads at
                                            <a href='https://github.com/Kong/insomnia/releases/tag/core@9.3.2'> GitHub</a>.
                                        </td>
                                    </tr>
                                    <tr>
                                        <td id="devider" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="space" colSpan={4}></td>
                                    </tr>
                                    <tr>
                                        <td id="label">Operating System:</td><td id='os-box'>WindowsOS x86-64</td>
                                        <td id="slabel">Operating System:</td><td id='os-box'>MacOS x86-64</td>
                                    </tr>
                                    <tr>
                                        <td id="label">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/win/Insomnia-Core-9.3.2_WindowsOS-x64.exe' download>Insomnia-Core-9.3.2_WindowsOS-x64 (.exe)</a></td>
                                        <td id="slabel">File Name:</td>
                                        <td><a href='https://js-wizard-s3.s3.amazonaws.com/mac/Insomnia-Core-9.3.2_MacOSX.dmg' download>Insomnia-Core-9.3.2_MacOSX (.dmg)</a></td>
                                    </tr>
                                    <tr>
                                        <td id="label">151 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/win/Insomnia-Core-9.3.2_WindowsOS-x64.exe' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                        <td id="slabel">216 (MB)</td>
                                        <td>
                                            <a href='https://js-wizard-s3.s3.amazonaws.com/mac/Insomnia-Core-9.3.2_MacOSX.dmg' download>
                                                <button id='download'>Download<span id="vline"><FontAwesomeIcon icon={faDownload} style={{ color: "#00FFFF7", }} /></span></button>
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                    {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
                </tbody>
            </table>
        );
    }
}
export default DownloadComponent;