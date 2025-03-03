import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';

// every time props or state changes, component re-renders
// This prop changes may include functions created for prop - drilling as well ->

const calculateMostExpensive = data => {
	return (
		data.reduce((total, item) => {
			const price = item.fields.price;
			if (price >= total) {
				total = price;
			}
			return total;
		}, 0) / 100
	);
};
const Index = () => {
	const { products } = useFetch(url);
	const [count, setCount] = useState(0);
	const [cart, setCart] = useState(0);

	// Use callback is used to create the function only when cart changes
	const addToCart = useCallback(() => {
		setCart(cart + 1);
	}, [cart]);
	// if i set dependancy list as [] then cart value won't update

	// Use Memo executes function only when products change
	const mostExpensive = useMemo(
		() => calculateMostExpensive(products),
		[products]
	);
	return (
		<>
			<h1>Count : {count}</h1>
			<button className='btn' onClick={() => setCount(count + 1)}>
				click me
			</button>
			<h1>Cart: {cart}</h1>
			<h1>Most Expensive : ${mostExpensive}</h1>
			<BigList products={products} addToCart={addToCart} />
		</>
	);
};
// Memo Stands for memoizing
// memo function takes care of props memoization
// but addToCart is a function which is kind of reset in every render
const BigList = React.memo(({ products, addToCart }) => {
	useEffect(() => {
		console.log('big list called');
	});
	return (
		<section className='products'>
			{products.map(product => {
				return (
					<SingleProduct
						key={product.id}
						{...product}
						addToCart={addToCart}
					></SingleProduct>
				);
			})}
		</section>
	);
});

const SingleProduct = ({ fields, addToCart }) => {
	useEffect(() => {
		console.count('single item called');
	});
	let { name, price } = fields;
	price = price / 100;
	const image = fields.image[0].url;

	return (
		<article className='product'>
			<img src={image} alt={name} />
			<h4>{name}</h4>
			<p>${price}</p>
			<button onClick={addToCart}>Add to Cart</button>
		</article>
	);
};
export default Index;
