import React from "react";
import { ReactDOM } from "react";

import App, { WeatherCard } from "./App";


function Home(){
    return(
    <div>
        <App />
        <WeatherCard />
    </div>
)
}

export default Home;
