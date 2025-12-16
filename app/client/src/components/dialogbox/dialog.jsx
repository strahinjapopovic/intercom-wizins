import './style.scss';
import bcrypt from 'bcryptjs';
import * as React from 'react';
import Auth from '../../utils/auth';
import emailjs from '@emailjs/browser';
import verificationCodeKey from '../../utils/verificationCodeSpc.jsx';
import okCheckIcon from '../../assets/images/message-icon/ok-check-icon.png';
import errorCheckIcon from '../../assets/images/message-icon/err-check-icon.png';

class ConfirmationDialogBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
            verificationCodeStr: '',
            sendBtnOn: false,
            verifyBtnOn: false,
        };
        this.dialogRef = React.createRef();
        this.openDialog = this.openDialog.bind(this);
        this.verifyEmail = this.verifyEmail.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
    }
    async mutateAddUser() {
        try {
            console.log(`User count: ` + this.props.getAllUsr)
            const { data } = await this.props.addUser({
                variables: {
                    userID: `intercom-x01e1025` + this.props.getAllUsr,
                    email: this.props.cEmail,
                    confirmed: this.props.cConfirm,
                    username: this.props.cUsername,
                    lastName: this.props.cLastName,
                    password: this.props.cPassword,
                    firstName: this.props.cFirstName,
                }
            });
            if (data) {
                setTimeout(() => {
                    Auth.login(data.addUser.token);
                }, 10000);
            } else {
                window.location.assign('/signup-error');
            }
        } catch (error) {
            console.error(error);
        }
    }
    openDialog(e) {
        e.preventDefault();
        this.setState(prevState => ({
            sendBtnOn: !prevState.sendBtnOn,
        }));
        //--------------------------------------------//
        const verificationCodeStr = verificationCodeKey(15);
        //-----------------------------------------------------------------------------------------------------------------//
        localStorage.removeItem('data');
        let verificationCode = bcrypt.hashSync(verificationCodeStr, 10);
        //-----------------------------------------------------------------------------------------------------------------//
        this.setState({
            date: new Date(),
        });
        const arrMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let dateStart = this.state.date.getTime();
        let dateEnd = dateStart + 300000;
        const year = this.state.date.getFullYear();
        const month = arrMonth[this.state.date.getMonth()];
        let hour = this.state.date.getHours();
        let minute = this.state.date.getMinutes() + 5;
        let second = this.state.date.getSeconds();
        const dDate = this.state.date.getDate();
        let lab = '';
        if (hour > 12) {
            hour = hour - 12;
            lab = 'PM';
        } else if (hour == 24) {
            hour = '00';
            lab = 'AM';
        }
        else if (hour == 12) {
            lab = 'PM';
        }
        else if (hour < 12) {
            lab = 'AM';
        }
        //-----------------------------------------------------------------------------------//
        if(minute >= 60) {
            hour += 1;
            minute = minute - 60;
        }
        else if(minute < 10) {
            minute = `0${minute}`;
        }
        //-----------------------------------------------------------------------------------//
        if(second < 10) {
            second = `0${second}`;
        }
        //-----------------------------------------------------------------------------------//
        let dateMsg = `${dDate}-${month}-${year} at ${hour}:${minute}:${second} ${lab}`;
        //-----------------------------------------------------------------------------------//
        let objData = {
            verificationCode: verificationCode,
            dateStart: dateStart,
            dateEnd: dateEnd,
            dateMsg: dateMsg,
        };
        localStorage.setItem("data", JSON.stringify(objData));
        //-----------------------------------------------------------------------------------//
        emailjs.send("emailjs_intercom_wizins", "template_econf_intercom",
            {
                clientFirstName: this.props.cFirstName,
                verificationCodeString: verificationCodeStr,
                messageExpires: `Verification code expires on ${dateMsg}`,
                reply_to: this.props.cEmail,
            },
            {
                publicKey: 'P6E7ZMa50IU2wMlSt',
            }
        )
            .then(() => {
                console.log('Email sent successfully by using EmailJS services!');
            },
                (error) => {
                    console.log(error);
                },
            );
        //-----------------------------------------------------------------------------------//
        console.log(`Verification Code is: ${verificationCodeStr}`);
        if (this.dialogRef.current) this.dialogRef.current.showModal();
    }
    async verifyEmail(e) {
        e.preventDefault();
        this.setState(prevState => ({
            verifyBtnOn: !prevState.verifyBtnOn,
        }));
        if (this.dialogRef.current) {
            if (localStorage.getItem('data') === null || this.state.verificationCodeStr === '') {
                this.setState({
                    verifyBtnOn: false,
                });
            } else {
                const match = await bcrypt.compare(this.state.verificationCodeStr, JSON.parse(localStorage.getItem('data')).verificationCode);
                console.log(match);
                if (match === true && new Date().getTime() <= JSON.parse(localStorage.getItem('data')).dateEnd) {
                    console.log(`data can be inserted`);
                    this.mutateAddUser();
                } else {
                    console.log(`error inserting data`);
                    window.location.assign('/signup-error');
                }
                return match;
            }
        }
    }
    closeDialog() {
        localStorage.removeItem('data');
        if (this.dialogRef.current) {
            this.setState({
                verificationCodeStr: '',
                sendBtnOn: false,
                verifyBtnOn: false,
            });
            this.dialogRef.current.close();
        }
    }

    render() {
        let dateMessage = '';
        if (localStorage.getItem('data') === null) {
            dateMessage = null;
        }
        else {
            dateMessage = JSON.parse(localStorage.getItem('data')).dateMsg;
        }
        return (
            <>
                <button id="open" value={this.state.sendBtnOn} onClick={this.openDialog}>
                    Verify Email Address
                </button>
                <div id='dialogContainer'>
                    <div id='dialogMain'>
                        <dialog id="dialog" ref={this.dialogRef}>
                            <div id='container'>
                                <section id='desc'>
                                    <div id='dialogLabel'><img id='dialogOkLogo' src={okCheckIcon} /></div>
                                    <span id='dialogTitle'>Email Confirmation Dialog</span>
                                    <div id='mainDesc'>
                                        <label htmlFor="verificationCodeStr">To verify email address:</label>
                                        <span id='infoNumbers'>
                                            1. Email sent to <span id='inlineEmail'>{this.props.cEmail}</span>
                                            {(this.state.sendBtnOn === true) ?
                                                (<span id="dialogBoxCheck"><img src={okCheckIcon} /></span>) :
                                                (<span id="dialogBoxCheck"><img src={errorCheckIcon} /></span>)}
                                            <br />
                                            2. Insert verification code sent to your email
                                            {(this.state.verificationCodeStr) ?
                                                (<span id="dialogBoxCheck"><img src={okCheckIcon} /></span>) :
                                                (<span id="dialogBoxCheck"><img src={errorCheckIcon} /></span>)}
                                            <br />
                                            3. Click Verify Email button
                                            {(this.state.verifyBtnOn === true) ?
                                                (<span id="dialogBoxCheck"><img src={okCheckIcon} /></span>) :
                                                (<span id="dialogBoxCheck"><img src={errorCheckIcon} /></span>)}
                                        </span>
                                        <input
                                            type="text"
                                            id="verificationCodeStr"
                                            name="verificationCodeStr"
                                            placeholder="Insert eCode here"
                                            value={this.state.verificationCodeStr}
                                            onChange={(e) => {
                                                this.setState({
                                                    ...this.state,
                                                    verificationCodeStr: e.target.value
                                                });
                                            }}
                                        />
                                        {dateMessage ? (<span id='info'>( * ) - Verification code expires on {dateMessage}</span>) :
                                            <span id='info'>( * ) - Verification code sent to your email expires in 5 minutes</span>}
                                    </div>
                                </section>
                                <section id='buttonSec'>
                                    <div>
                                        <button id='verify' value={this.state.verifyBtnOn} onClick={this.verifyEmail}>Verify Email</button>
                                    </div>
                                    <div>
                                        <button id='exit' onClick={this.closeDialog}>Exit Dialog</button>
                                    </div>
                                </section>
                            </div>
                        </dialog>
                    </div>
                </div>
            </>
        );
    }
}
export default ConfirmationDialogBox;