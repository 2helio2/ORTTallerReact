import React, { Component } from 'react';
import styles from './styles.module.css';

class Message extends Component {
    render() {
        let color;
        switch(this.props.color){
            case 'red':
                color = styles.red
                break;
            case 'green':
                color = styles.green
                break;    
            default:
                color = styles.grey
                break;
        }
        return (
            <div className={`${styles.message} ${color}`}>
                <p>{this.props.message}</p>
            </div>
        );
    }
}
 
export default Message;