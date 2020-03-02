import React from 'react';
import  styles  from './styles.module.css';
import CartIcon from '../CartIcon';
import LogOut from '../LogOut';
import Logo from '../Logo';

const Header = () => {  
    return (
        <header className={styles.mainHeader}>
            <div className={styles.headerWrapper}>
                <section className={styles.leftMenu}>
                    <Logo />
                </section>            
                <section className={styles.rightMenu}>
                    <CartIcon />
                    <LogOut />
                </section>         
            </div>
        </header>
    );
}

export default Header;