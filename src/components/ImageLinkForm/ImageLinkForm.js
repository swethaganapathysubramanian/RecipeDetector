import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className = 'f4 fw6'>
                {'This will detect Recipes based on the given image address. Give it a try'}
            </p>
            <div className = 'center'>
                <div className = ' center form  br3 shadow-5'>
                    <input className='f4 pa2 w-80 center' type='text' onChange={onInputChange} placeholder="https://www.simplyrecipes.com/wp-content/uploads/2019/09/easy-pepperoni-pizza-lead-4.jpg"/>
                    <button className= 'w-30 grow f4 link ph3 pv2 div black fw6'
                onClick = {onButtonSubmit} >
                Check Recipes</button>
                </div>
                </div>
            <p>
               
            </p>
        </div>
    );
}


export default ImageLinkForm;
