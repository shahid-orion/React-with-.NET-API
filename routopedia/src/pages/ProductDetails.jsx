import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
	const { productId } = useParams()
	return (
		<div>
			<h4>Product Details</h4>
			<p className='h2 text-primary'>ID : {productId}</p>
		</div>
	)
}

export default ProductDetails
