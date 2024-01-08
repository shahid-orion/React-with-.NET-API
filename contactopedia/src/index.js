import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Layout/Header'
import ContactIndex from './components/contactPages/ContactIndex'
// import Counter from './components/Counter'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<div className='bg-black vh-100'>
		<ContactIndex />
	</div>
)
