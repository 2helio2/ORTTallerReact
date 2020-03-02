import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logOutUser } from '../../Redux/Actions';
import styles from './styles.module.css';

export class LogOut extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.dispatch(logOutUser());
    }

    render() {
        return (
            <div>
                <input className={styles.logOutButton} type="submit" value="Log out" onClick={(e) => this.handleClick(e)}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user    
})

export default connect(mapStateToProps)(LogOut);
