import * as React from 'react';
class ProfileParent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div id='profileMain'>
                {this.props.children}
            </div>
        );
    }
}
export default ProfileParent;