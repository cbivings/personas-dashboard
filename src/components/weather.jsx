import React from "react";
import '../assets/css/weather.css'

const Sunny = () => {
    return (
        <div class="icon sunny">
            <div class="sun">
                <div class="rays"></div>
            </div>
        </div>
    )
}
const Rainy = () => {
    return (
        <div class="icon rainy">
            <div class="cloud"></div>
            <div class="rain"></div>
        </div>
    )
}
const Snowy = () => {
    return (
        <div class="icon flurries">
            <div class="cloud"></div>
            <div class="snow">
                <div class="flake"></div>
                <div class="flake"></div>
            </div>
        </div>
    )
}
const Cloudy = () => {
    return (
        <div class="icon cloudy">
            <div class="cloud"></div>
            <div class="cloud"></div>
        </div>
    )
}  
const Thunder = () => {
    return (
        <div class="icon thunder-storm">
            <div class="cloud"></div>
            <div class="lightning">
                <div class="bolt"></div>
                <div class="bolt"></div>
            </div>
        </div>
    )
}

export const Weather = (props) => {
    console.log(props)
    const weather = props.weather;
    if (weather === 'sunny') {
        return <Sunny />
    } else if (weather === 'rainy') {
        return <Rainy />
    } else if (weather === 'snowy') {
        return <Snowy />
    } else if (weather === 'cloudy') {
        return <Cloudy />
    } else if (weather === 'thunder') {
        return <Thunder />
    } else {
        return <div>Unknown weather condition</div>
    }
}