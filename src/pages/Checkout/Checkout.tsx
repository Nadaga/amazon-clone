import React from "react";
import BasketItem from "../../components/BasketItem/BasketItem";
import Subtotal from "../../components/Subtotal/Subtotal";
import classes from "./Checkout.module.scss";

interface Props {
	imageLink: string;
}

function Checkout(props: Props) {
	const { imageLink } = props;
	return (
		<div className={classes.checkout}>
			<div className={classes.left}>
				<img className={classes.ad} src={imageLink} alt="" />
				<div className={classes.basket}>
					<h2 className={classes.title}>Your shopping basket</h2>
					<BasketItem></BasketItem>
					<BasketItem></BasketItem>
					<BasketItem></BasketItem>
				</div>
			</div>
			<div className={classes.right}>
				<Subtotal value={5}></Subtotal>
			</div>
		</div>
	);
}

export default Checkout;
