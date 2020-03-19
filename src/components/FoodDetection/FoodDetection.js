import React from 'react';
import './FoodDetection.css';

const FoodDetection = ({ imageUrl , box }) => {
    return (
        <div className="left ma center">
        <div className='mt2'>
            <img id ="inputimage" src={imageUrl} alt=""  width='500px' height='auto'/>
                <div className='bounding-box' style={{ top: box.toprow , right: box.rightcol, bottom: box.bottomrow, left: box.leftcol }}></div>
        </div>
        </div>
    );
}


export default FoodDetection;
