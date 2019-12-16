import React, {Component} from 'react';
import nanoid from 'nanoid';
import Burger from "../../components/BurgerVisual/BurgerVisual";
import Ingredients from "../../components/BurgerFilling/BurgerFilling";
import './MainBurger.css'

const INGREDIENTS = [
    {name: 'Meat', price: 50, image: "https://cdn3.iconfinder.com/data/icons/food-1-11/128/food-33-512.png"},
    {name: 'Bacon', price: 30, image: "https://cdn0.iconfinder.com/data/icons/food-filled-outline-2/64/bacon-food-fastfood-512.png"},
    {name: 'Salad', price: 5, image: "https://image.flaticon.com/icons/svg/184/184559.svg"},
    {name: 'Cheese', price: 20, image: "https://freeiconshop.com/wp-content/uploads/edd/cheese-outline-filled.png"},
];

export default class MainBurger extends Component{
    state = {
        ingredients : [
            {name : 'Meat', count : 0,},
            {name : 'Cheese', count: 0},
            {name : 'Bacon', count: 0},
            {name : 'Salad', count: 0},
        ]
    };
    addIngredient = name =>{
        let index = this.state.ingredients.findIndex(item => item.name === name);
        let copyIng = [...this.state.ingredients];
        let copyOb = {...copyIng[index]};
        copyOb.count++;
        copyIng[index] = copyOb;
        this.setState({ingredients : copyIng})
    };
    removeIngredient = name =>{
        let index = this.state.ingredients.findIndex(item => item.name === name);
        let copyIng = [...this.state.ingredients];
        let copyOb = {...copyIng[index]};
        copyOb.count--;
        if (copyOb.count <= 0){
            copyOb.count = 0;
        }
        copyIng[index] = copyOb;
        this.setState({ingredients : copyIng})
    };
    render(){
        let ingredients = INGREDIENTS.map((ing, index) => {
            let count = this.state.ingredients.find(value => value.name === ing.name);
           return <Ingredients less={() => this.removeIngredient(ing.name)} more={() => this.addIngredient(ing.name)} key={nanoid()} src={ing.image} nameOfIngredient={ing.name} amountOfIngredient={'x ' + count.count}/>
        });
        return(
            <div className="BurgerContainer">
                <div className="ingContainer">
                    {ingredients}
                </div>
                <Burger ingredients={this.state.ingredients} price={INGREDIENTS}/>
            </div>
        )
    }
}