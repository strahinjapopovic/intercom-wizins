import * as React from 'react';
class DataRowChild extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <>
                <div id='data-icon'>
                    <img src={this.props.imgsrc} />
                </div>
                <div id='data-ans'>{this.props.data}</div>
                <div id='data-link'>{this.props.link}</div>
            </>
        );
    }
}
export default DataRowChild;