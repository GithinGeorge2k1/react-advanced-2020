import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from '../../../assets/default-image.jpeg';
// In the api all items have price prop except for last one So value is missing
// So what to do if value is not there, especially with nested objects we may get error not jst undefined behaviour

const Product = ({ image, name, price }) => {
	const url = image && image.url;
	return (
		<article className='product'>
			<img src={url || defaultImage} alt={name || 'default'} />
			<h4>{name}</h4>
			<p>${price || 99.9}</p>
		</article>
	);
};

Product.propTypes = {
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
// 	name: 'default name',
// 	price: 99.9,
// 	image: defaultImage,
// };
export default Product;
