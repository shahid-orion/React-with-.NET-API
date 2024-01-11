import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProductList = () => {
	const navigate = useNavigate()
	return (
		<div>
			ProductList
			<button onClick={() => navigate('/product/create')}>Add Product</button>
		</div>
	)
}

export default ProductList
