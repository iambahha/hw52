import React from 'react';
import nanoid from 'nanoid';
import './BurgerVisual.css';

const Burger = (props) => {
    let total = 20;
    const food = props.ingredients.map(item =>{
        let price = props.price.find(ing => ing.name === item.name);
        let mainPrice = price.price * item.count;
        total+= mainPrice;
        let addedfood = [];
        for (let i = 0; i < item.count; i++){
            addedfood.push(<div className={item.name} key={nanoid()}> </div>)
        }
       return addedfood;
    }).flat();
    return (
        <div className="Burger">
            <p className="price">Цена сея чуда: {total}</p>
            <div className="BreadTop">
                <div className="Seeds1"> </div>
                <div className="Seeds2"> </div>
            </div>
            {food}
            <div className="BreadBottom"> </div>
        </div>
    )
};
export default Burger;