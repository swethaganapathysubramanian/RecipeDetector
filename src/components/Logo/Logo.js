import React from 'react';
import Tilt from 'react-tilt';
import food from './food.png';
import './Logo.css';


const Logo = () => {
    return (
       <div className="ma4 mt4">
        <Tilt className="Tilt br2 shadow-2 img" options={{ max : 55 }} style={{ height: 80, width: 80 }} >
        <div className="Tilt-inner"> 
        <img src = {food} 
        style={{ paddingTop : '1px' }} 
        alt="Logo"/> </div>
        </Tilt>
       </div>
    );
}


export default Logo;
