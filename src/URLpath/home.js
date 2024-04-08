import React from "react";
import { NavLink } from "react-router-dom";

const number = [1,2,3,4,5,6]
const wavesTitles = number.map((value,index) => {
    let path = '/waves-'+ value.toString()
    return(
        <ul key={index}><NavLink to={path}> Waves {value}</NavLink> </ul>
    )
})

const MPtitles = number.map((value,index) => {
    let path = '/modern-physics-'+ value.toString()
    return(
        <ul key={index}><NavLink to={path}> Modern Physics {value}</NavLink> </ul>
    )
})

function Home(){
    return(
    <div className="main">
        <div className="header">
            <h1>FISLAB II</h1>
            <p>Waves and Modern Physics</p>
        </div>
        <div className="content">
        <h3>Content</h3>
        {wavesTitles}
        {MPtitles}
        </div>
    </div>
    )
}

export default Home