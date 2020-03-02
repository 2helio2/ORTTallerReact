import React from 'react';
import logo from '../../Assets/Icons/supermarket.svg';
import styles from './styles.module.css';

const Logo = () => {
    return(
        <div className={styles.logoWrapper}>
            <img className={styles.logo} src={logo} alt=""/>
            <h1> 
                Market
            </h1>
        </div>
    )
}

export default Logo;