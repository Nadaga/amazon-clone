import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import React from "react";
import classes from "./Nav.module.scss";
import { Link } from "react-router-dom";

const navInfo = [
	{ first: "Hello Guest", second: "Sign In" },
	{ first: "Returns", second: "Orders" },
	{ first: "Your", second: "Prime" },
];

function Nav() {
	return (
		<div className={classes.nav}>
			{navInfo.map((e, i) => (
				<div key={i} className={classes.option}>
					<span className={classes.optionLineOne}>{e.first}</span>
					<span className={classes.optionLineTwo}>{e.second}</span>
				</div>
			))}
			<Link to="/checkout">
				<div className={classes.optionBasket}>
					<ShoppingBasketIcon></ShoppingBasketIcon>
					<span
						className={`${classes.optionLineTwo} ${classes.basketCount}`}
					></span>
				</div>
			</Link>
		</div>
	);
}

export default Nav;
