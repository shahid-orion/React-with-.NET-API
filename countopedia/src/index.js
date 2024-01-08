import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Counter from './components/Counter'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<div className='bg-black vh-100'>
		<Header />
		<Counter />
	</div>
)
