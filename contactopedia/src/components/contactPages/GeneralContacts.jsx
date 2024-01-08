import React from 'react'
import Contact from './Contact'

const GeneralContacts = (props) => {
	return (
		<div className='col-12 py-2 rounded bg-secondary'>
			<div className='text-center text-white-50 h3 bg-warning bg-opacity-25'>
				General
			</div>
			<div className='px-4'>
				{props.contacts.map((contact, i) => (
					<Contact
						contact={contact}
						key={i}
						favoriteClick={props.favoriteClick}
						handleDeleteContact={props.handleDeleteContact}
						handleUpdateClick={props.handleUpdateClick}
					/>
				))}
			</div>
		</div>
	)
}

export default GeneralContacts
