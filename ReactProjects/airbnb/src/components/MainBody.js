import React from "react";

import styles from './Main.module.css';

import ImageComponent from "./ImageComponent";

let property = [{
    url : "https://r-cf.bstatic.com/images/hotel/max1024x768/173/173383105.jpg",
    availibility : "ENTIRE",
    type : "APARTMENT",
    city : "ROME",
    name : "PETINARRI CAMPO DE FIORI",
    stars : "588 votes",
    superhost : "-Superhost"
    },
    {
    url : "https://media.workandmoney.com/2a/76/2a763836b02d426197466e2d396d5ba8.jpeg",
    availibility : "ENTIRE",
    type : "APARTMENT",
    city : "MINSK",
    name : "BELARUS STUDIO IN HISTORICAL CENTER",
    stars : "307 votes",
    superhost : "-Superhost"
    },
    {
    url : "https://media.fazwaz.com/unit/86332/c/5bbdb5096a478f32544b36b7-search-page-mobile.jpg",
    availibility : "ENTIRE",
    type : "COTTAGE",
    city : "GOVERNATOR CELSO",
    name : "EXCEPTIONAL PROPERTY IN THE BEACH",
    stars : "88 votes",
    superhost : ""
    },
    {
        url : "https://r-cf.bstatic.com/images/hotel/max1024x768/173/173383105.jpg",
        availibility : "ENTIRE",
        type : "APARTMENT",
        city : "ROME",
        name : "PETINARRI CAMPO DE FIORI",
        stars : "588 votes",
        superhost : "-Superhost"
        },
        {
        url : "https://media.workandmoney.com/2a/76/2a763836b02d426197466e2d396d5ba8.jpeg",
        availibility : "ENTIRE",
        type : "APARTMENT",
        city : "MINSK",
        name : "BELARUS STUDIO IN HISTORICAL CENTER",
        stars : "307 votes",
        superhost : "-Superhost"
        },
        {
        url : "https://media.fazwaz.com/unit/86332/c/5bbdb5096a478f32544b36b7-search-page-mobile.jpg",
        availibility : "ENTIRE",
        type : "COTTAGE",
        city : "GOVERNATOR CELSO",
        name : "EXCEPTIONAL PROPERTY IN THE BEACH",
        stars : "88 votes",
        superhost : ""
        }
    ]

function MainBody() {
    return (
        <div className = {styles.mainBox}>
            {property.map ( 
                (propertyObj, index) => <ImageComponent imageDetails={propertyObj} key={index} />    
                )
        }
        </div>
    );
}

export default MainBody;