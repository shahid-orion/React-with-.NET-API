import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Product = () => {
	const [goToProduct, setGotoProduct] = useState(false)
	const navigate = useNavigate()
	return (
		<div className='text-primary h4'>
			Product
			<button onClick={() => navigate('/product/create')}>Add Product</button>
			<Link to='/product/details/5'>
				<button>Navigate to Product Details 5</button>
			</Link>
			{goToProduct && <Navigate to='/product/details/3' />}
			<button onClick={() => setGotoProduct(true)}>
				Navigate to Product Details 3 (use state)
			</button>
		</div>
	)
}

export default Product
