import React from "react";
import Product from "../Product/Product";
import classes from "./Home.module.scss";

const productInfo = {
	// id:
	title: "Placeholder",
	price: 267.14,
	rating: Math.random() * 5,
	image: `https://picsum.photos/900/900?random=${Math.floor(
		Math.random() * 10 + 1
	)})`,
};

function Home() {
	return (
		<div className={classes.home}>
			<div className={classes.container}>
				<img
					className={classes.image}
					src="https://images.unsplash.com/photo-1496170804262-975019a5cd34?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
					alt=""
				></img>
				<div className={classes.row}>
					<Product {...productInfo}></Product>
					<Product {...productInfo}></Product>
					<Product {...productInfo}></Product>
				</div>
				<div className={classes.row}>
					<Product {...productInfo}></Product>
					<Product {...productInfo}></Product>
					<Product {...productInfo}></Product>
				</div>
			</div>
		</div>
	);
}

export default Home;
