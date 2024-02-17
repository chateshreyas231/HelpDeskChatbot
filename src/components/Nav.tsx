import React from 'react';
import styles from './Nav.module.css';
import logo from "../materials/branding.svg";


const Nav: React.FC<{}> = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles['logo-container']}>
                <h1>Technology <br>
                </br>Resources </h1>
            </div>
            <img src={logo} className={styles.navbarimg} alt='UWM logo'/>
           
        </nav>
    )
}

export default Nav;