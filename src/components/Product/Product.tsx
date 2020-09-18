import { Button } from "@material-ui/core";
import React, { useContext } from "react";
import { ADD_TO_BASKET } from "../../store/actionTypes";
import { AppContext } from "../../store/AppContext";
import {
	useDispatchStore,
	useStateValue,
	useStore,
} from "../../store/customHooks/customHooks";
import StarRating from "../StarRating/StarRating";
import classes from "./Product.module.scss";

interface productProps {
	title: string;
	price: number;
	rating: number;
	image: string;
	id?: string;
}

//? Desctructure with types
function Product({ id, title, price, rating, image }: productProps) {
	const [state2, dispatch2] = useContext(AppContext);
	// console.log("useStateValue", useStateValue());
	// console.log("state2", state2);
	// console.log("dispatch2", dispatch2);
	const dispatch = useDispatchStore();

	function addToBasket() {
		return dispatch({
			type: ADD_TO_BASKET,
			item: { id, title, image, price, rating },
		});
	}
	return (
		<div className={classes.product}>
			<div className={classes.info}>
				<p className={classes.price}>{title}</p>
				<small>$</small>
				<strong>{price}</strong>
			</div>
			<div className={classes.rating}>
				<StarRating rating={rating} />
			</div>
			<img className={classes.productImage} src={image} alt=""></img>
			<Button onClick={() => addToBasket()} variant="outlined" color="default">
				Add To Basket
			</Button>
		</div>
	);
}

export default Product;
