import { useState, useEffect, useCallback } from 'react';

export const useFetch = url => {
	const [loading, setLoading] = useState(true);
	const [products, setProducts] = useState([]);

	// Use callback make sure new function is created only when url changes
	const getProducts = useCallback(async () => {
		const response = await fetch(url);
		const products = await response.json();
		setProducts(products);
		setLoading(false);
	}, [url]);

	useEffect(() => {
		getProducts();
	}, [url, getProducts]);
	return { loading, products };
};
