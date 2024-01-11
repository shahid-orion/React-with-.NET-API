import React from 'react'
import { useParams } from 'react-router-dom'

const CryptoDetail = () => {
	//const { cryptoSymbol } = useParams()
	let { cryptoSymbol, id } = useParams()
	return (
		<div>
			<h4>Crypto Details :</h4>
			<p className='h2 text-success'>Crypto Symbol: {cryptoSymbol}</p>
			<p className='h2 text-success'>ID: {id}</p>
		</div>
	)
}

export default CryptoDetail
