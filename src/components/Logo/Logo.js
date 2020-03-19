import React from 'react';
import Tilt from 'react-tilt';
import food from './food.png';
import './Logo.css';


const Logo = () => {
    return (
       <div className="ma4 mt0">
        <Tilt className="Tilt br2 shadow-2 img" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner"> 
        <img src = {food} 
        style={{ paddingTop : '5px' }} 
        alt="Logo"/> </div>
        </Tilt>
       </div>
    );
}


export default Logo;
