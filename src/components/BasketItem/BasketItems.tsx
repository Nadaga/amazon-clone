import React from 'react';
import { useStateValue } from '../../store/customHooks/customHooks';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import classes from './BasketItems.module.scss';
import { ItemProps } from '../../types/types';
import dev from '../../customHooks/dev';

interface BasketProps {}

function BasketItems(props: BasketProps) {
	const [state, dispatch] = useStateValue();
	// console.log('BasketItems - basket', state, __filename, BasketItems.name);
	dev() && console.log('state', state);

	return (
		<div className={classes.basketItems}>
			{state?.basket.map((item: ItemProps, i: any) => (
				<CheckoutProduct
					key={i}
					{...item}
					// id={item.id}
					// image={item.image}
					// title={item.title}
					// price={item.price}
					// rating={item.rating}
				></CheckoutProduct>
			))}
		</div>
	);
}

export default BasketItems;
