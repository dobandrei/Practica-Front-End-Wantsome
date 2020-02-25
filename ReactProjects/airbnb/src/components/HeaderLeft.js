import React from "react";

import logo from './Images/airbnb.png';

import styles from './Header.module.css';

function HeaderLeft() {
    return (
        <div className = {styles.headerBoxLeft}>
            <img className ={styles.logo} src={logo} alt = "logo"/>
            <input  placeholder = "Search">
            
            </input>
        </div>
    );
}

export default HeaderLeft;