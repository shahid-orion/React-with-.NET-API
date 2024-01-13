import React from 'react'
import reactLogo from '../../images/reactLogo.png'

const Header = () => {
	return (
		<div className='pt-1 pl-2 border-bottom text-center bg-primary bg-opacity-25'>
			<img
				src={reactLogo}
				alt='logo'
				className='mx-3 mb-2'
				width={30}
				height={30}
			/>
			<span className='h2 pt-4 text-white-50'>React Course - ReduxOPedia</span>
		</div>
	)
}

export default Header
