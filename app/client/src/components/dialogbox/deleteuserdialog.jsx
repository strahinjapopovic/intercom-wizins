import * as React from 'react';
import attentionSign from '../../assets/images/message-icon/alert-sign.png';
class DeleteUserDialogBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isDialogBoxOpen: false,
        }
        this.dialogRef = React.createRef();
        this.handleOpenDialogBox = this.handleOpenDialogBox.bind(this);
        this.handleExitDialog = this.handleExitDialog.bind(this);
        this.handleDelUserAcc = this.handleDelUserAcc.bind(this);
    }
    async handleDelUserAcc() {
        try {
            const dataResult = await this.props.deleteUser({ variables: { id: this.props.identifier.toString(), }, });
            if(dataResult) {
                console.log(`Function data message: ` + this.props.data);
                console.log(JSON.stringify(dataResult, null, 2));
                window.location.assign("/");
                return dataResult;
            }            
        } catch (err) {
            console.log(`ERROR (catch: err): ` + err);
        }
    }
    handleOpenDialogBox(e) {
        e.preventDefault();
        this.setState({
            isDialogBoxOpen: true,
        })
        if(this.dialogRef.current) this.dialogRef.current.showModal();
    }
    handleExitDialog(e) {
        e.preventDefault();
        if(this.dialogRef.current) {
            this.setState({
                isDialogBoxOpen: false,
            });
            this.dialogRef.current.close();
        }
    }
    render() {
        return(
            <>
                <div id='del-btn'>
                    <button id='del-btn' onClick={this.handleOpenDialogBox} disabled={this.props.loading}>
                        { this.props.loading ? `Loading, please wait...` : `Delete Account` }
                    </button>
                </div>
                <dialog id="deleteUserDialogBox" ref={this.dialogRef}>
                    <p id='delMainTitle'>*** Delete Account Facility ***</p>
                    <div id='dialogContainer'>
                        <section id='attentionSign'>
                            <img src={attentionSign}/>
                        </section>
                        <section id='descDialog'>
                            <p>Click Delete button to confirm that you want to delete your account, otherwise, click Cancel button to exit dialog.</p>
                        </section>
                        <section id='btnDialog'>
                            <button id='deleteUserBtn' onClick={this.handleDelUserAcc}>Delete</button>
                            <button id='exitDialogBtn' onClick={this.handleExitDialog}>Cancel</button>
                        </section>
                        <p id='smallMsg'>* If you decide to delete your account process will be irreversible and your data will be removed.</p>
                    </div>
                </dialog>
            </>
        );
    }
}
export default DeleteUserDialogBox;