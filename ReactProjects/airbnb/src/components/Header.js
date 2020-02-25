import React from "react";

import styles from './Header.module.css';

import HeaderLeft from "./HeaderLeft";

import HeaderRight from "./HeaderRight";

function Header() {
    return (
        <div className = {styles.headerBox}>
            <HeaderLeft />
            <HeaderRight />
        </div>
    );
}

export default Header;