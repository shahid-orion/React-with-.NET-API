import React from 'react'
import logo from './images/reactLogo.png'

const Header = () => {
	return (
		<div className='column text-center'>
			<div className='border-bottom pt-3'>
				<img
					src={logo}
					alt='logo'
					width={35}
					height={35}
					className='mx-4 mb-3'
				/>
				<span className='h1 text-secondary py-2'>CyclOPedia</span>
			</div>
		</div>
	)
}

export default Header
