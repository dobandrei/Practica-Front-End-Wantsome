import React from 'react';

import styles from './Tabs.module.css';

function Tabs() {
    return (
        <div className={styles.box}>
            <div className={styles.divBox}><a href = "#">Dates</a></div>
            <div className={styles.divBox}><a href = "#">Guests</a></div>
        </div>
    );
}

export default Tabs;