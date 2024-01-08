import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Counter from './Counter'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<div className='bg-black vh-100'>
		<Header />
		<Counter />
	</div>
)
