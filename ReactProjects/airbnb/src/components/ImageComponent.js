import styles from './Main.module.css';
import React from 'react';

function ImageComponent({imageDetails}) {
    return (
        <div className = {styles.pictureBox}>
            <img src={imageDetails.url} alt =""></img>
            <p>{imageDetails.availibility} {imageDetails.type} - {imageDetails.city}</p>
            <p>{imageDetails.name}</p>
            <p>{imageDetails.stars} <span>{imageDetails.superhost}</span></p>
            
        </div>
    );
    
}

export default ImageComponent;