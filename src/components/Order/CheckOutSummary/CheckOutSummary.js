import React from 'react';
import './CheckOutSummary.css'
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";


const CheckOutSummary = props => {
	return (
		<div className="CheckoutSummary">
			<h1>We hope it tastes well!</h1>
			<div style={{width: '100%', margin: 'auto'}}>
				<Burger ingredients={props.ingredients}/>
			</div>
			<Button
				type="Danger"
				onClick={props.checkoutCancel}
			>CANCEL</Button>
			<Button
				type="Success"
				onClick={props.checkoutContinue}
			>CONTINUE</Button>
		</div>
	)
};

export default CheckOutSummary;