import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import React from "react";
import classes from "./StarRating.module.scss";

interface StarRatingProps {
	rating: number;
}

function StarRating(props: StarRatingProps) {
	const { rating } = props;

	const CalculateRating = () => {
		const stars = [];
		for (let index = 0; index < Math.floor(rating); index++) {
			stars.push(
				<StarIcon key={index} className={classes.starIcon}></StarIcon>
			);
		}
		if (rating % 1 >= 0.5 || !stars.length) {
			stars.push(
				<StarHalfIcon
					key={Math.floor(rating) + 1}
					className={classes.starIcon}
				></StarHalfIcon>
			);
		}
		return stars;
	};

	return <div className={classes.starRating}>{CalculateRating()}</div>;
}

export default StarRating;
