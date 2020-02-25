import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className={this.props.color}>
                <p>{this.props.message}</p>
            </div>
        );
    }
}
 
export default Message;