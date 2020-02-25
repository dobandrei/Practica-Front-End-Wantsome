import React from "react";

import styles from './Header.module.css';

function HeaderRight() {
    return (
        <div className = {styles.headerBoxRight}>
           <p><a href="#">Become a host</a></p> 
           <p><a href="#">Help</a></p>
           <p><a href="#">Sign up</a></p>
           <p><a href="#">Log in</a></p>
        </div>
    );
}

export default HeaderRight;