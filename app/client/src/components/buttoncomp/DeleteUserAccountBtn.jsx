import * as React from 'react';
class DelUserAccount extends React.Component {
    constructor(props) {
        super(props)
    }
    handleDelUserAcc = async () => {
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
    displayQuestionDialogBox = () => {
        
    }
    render() {
        return (
            <div id='del-btn'>
                <button id='del-btn' onClick={this.handleDelUserAcc} disabled={this.props.loading}>
                    { this.props.loading ? `Loading, please wait...` : `Delete Account` }
                </button>
            </div>
        );
    }
}
export default DelUserAccount;