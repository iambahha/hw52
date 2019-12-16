import React from 'react';
import './BurgerFilling.css';

function Ingredients(props) {
    return (
            <div className="ingredient">
                <img src={props.src} alt="ingredient"/>
                <span className="ingName">{props.nameOfIngredient}</span>
                <span className="amount">{props.amountOfIngredient}</span>
                <button className="lessBtn" onClick={props.less}> </button>
                <button className="moreBtn" onClick={props.more}> </button>
            </div>
    )
}

export default Ingredients;