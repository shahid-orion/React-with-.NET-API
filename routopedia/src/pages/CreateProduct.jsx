import React from 'react'
import { useNavigate } from 'react-router-dom'

const CreateProduct = () => {
	const navigate = useNavigate()
	return (
		<div>
			Create Product
			<button onClick={() => navigate(-1)}>Go Back</button>
		</div>
	)
}

export default CreateProduct
