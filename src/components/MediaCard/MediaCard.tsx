import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { productInfo } from '../../constants/productInfo';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		// color: "white",
		// display: "flex",
		// margin: "0 5px",
		// backgroundColor: "red",
		// justifyContent: "spaceBetween",
	},
	media: {
		height: 140,
	},
	// card: {
	//   color: 'white',
	// }
});

export default function MediaCard() {
	const saveProductInfo = useMemo(() => productInfo(), []);
	const { id, title, price, rating, image } = saveProductInfo;
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<CardActionArea>
				<CardMedia className={classes.media} image={image} title={title} />
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{/* {title} */}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p">
						{title}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Typography variant="body2" color="textSecondary" component="p">
					{`$${price}`}
				</Typography>
				<Button size="small" color="primary">
					Buy now
				</Button>
				{/* <Button size="small" color="primary">
					Learn More
				</Button> */}
			</CardActions>
		</Card>
	);
}
