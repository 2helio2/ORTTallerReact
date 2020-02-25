import React, { Component } from 'react';
import styles from './styles.module.css';

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className={styles.loader}>Loading...</div>
        );
    }
}
 
export default Loader;