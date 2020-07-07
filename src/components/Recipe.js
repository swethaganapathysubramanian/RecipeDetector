import React from 'react';
import style from './recipe.module.css';

const Recipe = ({title,calories,image,ingredients,url}) =>{
    return(
       <div className={style.box}>
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <p>Calories: {parseInt(calories)} Kcal</p>
            <img src={image} alt = "" className={style.image}></img>
            <ul>
                {ingredients.map ( ingredient=>
                    <li>{ingredient.text}</li>
                )}
            </ul>
            <a href={url}> Go to Recipe!</a>
        </div>
       </div>
    )
}

export default Recipe;
