import React from 'react'
import ReactDOM from 'react-dom/client'
import CyclOPediaClassPage from './CyclOPediaClassPage'
import CyclOPediaFuncPage from './CyclOPediaFuncPage'
import Header from './Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<div className='bg-black vh-100'>
		<Header />
		<div className='row text-white p-5'>
			<div className='col-6'>
				<span className='h1 text-warning text-center'>Class Component</span>
				<CyclOPediaClassPage />
			</div>
			<div className='col-6'>
				<span className='h1 text-warning text-center'>Func Component</span>
				<CyclOPediaFuncPage />
			</div>
		</div>
	</div>
)
