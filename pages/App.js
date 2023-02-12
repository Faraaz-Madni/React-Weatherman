// Package Imports
import React from "react";

// CSS Stylesheet Imports
import H1Styles from '../styles/h1.module.css';
import DivStyles from '../styles/div.module.css';
import PStyles from '../styles/p.module.css';
import InputStyles from '../styles/input.module.css';

function App(){
    return(
        <div className={DivStyles.centered}>
            <h1 className={H1Styles.title}> Weatherman </h1>
        </div>
    );
}

export function WeatherCard(){
    return(
        <div className={`${DivStyles.card}`}>
            <input className={InputStyles.location} placeholder="E.g: Kerala, Nairobi" type="text" id="location" />
            <label className={`${PStyles.normal} ${PStyles.distanced}`} htmlFor="location">Please Insert City.</label>            
            <span className={`${DivStyles.cardDecor}`}>
                
            </span>
            <br/>
            <br/>
            <input className={InputStyles.submit} type="button" value="Submit"/>
        </div>
    );
}

export default App;
