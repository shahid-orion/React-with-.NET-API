import React, { useState } from 'react'

import Header from '../Layout/Header'
import AddRandomContact from './AddRandomContact'
import RemoveAllContact from './RemoveAllContact'
import AddContact from './AddContact'
import FavoriteContacts from './FavoriteContacts'
import GeneralContacts from './GeneralContacts'
import Footer from '../Layout/Footer'

const initialData = [
	{
		id: 1,
		name: 'Ben Baker',
		phone: '555-555-5555',
		email: 'ben@baker.com',
		isFavorite: true,
	},
	{
		id: 2,
		name: 'Mat Toyton',
		phone: '666-666-6666',
		email: 'mat@toyton.com',
		isFavorite: false,
	},
	{
		id: 3,
		name: 'Pat Osborne',
		phone: '777-777-7777',
		email: 'pat@osborne.com',
		isFavorite: true,
	},
]

const ContactIndex = () => {
	//useState to store initial contacts
	const [contacts, setContacts] = useState(initialData)
	const [updateContactInfo, setUpdateContactInfo] = useState({
		contact: null,
		isUpdating: false,
	})

	const handleAddContact = (newContact) => {
		//validation
		if (newContact.name.length < 1) {
			return { status: 'failure', msg: 'Please enter a valid name' }
		} else if (newContact.phone.length < 1) {
			return { status: 'failure', msg: 'Please enter a valid phone number' }
		}
		//duplicate check
		const isDuplicateRecord = contacts.some(
			(contact) =>
				contact.name === newContact.name || contact.phone === newContact.phone
		)
		if (isDuplicateRecord === true) {
			return { status: 'failure', msg: 'Duplicate contact' }
		} else {
			//updating properties
			newContact.id = contacts.length + 1
			newContact.isFavorite = false

			setContacts([...contacts, newContact])
			return { status: 'success', msg: 'New contact created successfully' }
		}
	}
	const handleUpdateContact = (updatedContact) => {
		// console.log(updatedContact)
		//validation
		if (updatedContact.name.length < 1) {
			return { status: 'failure', msg: 'Please enter a valid name' }
		} else if (updatedContact.phone.length < 1) {
			return { status: 'failure', msg: 'Please enter a valid phone number' }
		}

		const mutatedContact = contacts.map((obj) => {
			if (obj.id === updatedContact.id) {
				return {
					...obj,
					name: updatedContact.name,
					email: updatedContact.email,
					phone: updatedContact.phone,
				}
			}
			return obj
		})
		//setContacts will update the list of contacts and display
		setContacts(mutatedContact)

		return { status: 'success', msg: 'New contact updated successfully' }
		// }
	}
	const handleToggleFavorites = (contact) => {
		//create a new array with the updated contact
		const updatedContacts = contacts.map((c) => {
			if (c.id === contact.id) {
				//toggle the isFavorite property of the matched contact
				return { ...c, isFavorite: !c.isFavorite }
			}
			return c
		})

		//update the contacts state with the new array
		setContacts(updatedContacts)
	}
	const handleDeleteContact = (contactId) => {
		//create a new array without the contact to delete
		const updatedContacts = contacts.filter((c) => c.id !== contactId)

		//update the contacts state with the new array
		setContacts(updatedContacts)
	}

	const handleAddRandomContact = (newContact) => {
		//create a new contact from API
		const newFinalContact = {
			...newContact,
			id: contacts.length + 1,
			isFavorite: false,
		}

		setContacts([...contacts, newFinalContact])
	}

	const handleRemoveAllContact = () => {
		setContacts([])
	}

	const handleUpdateClick = (contact) => {
		const updatedContacts = contacts.filter((c) => c.id === contact.id)
		setUpdateContactInfo({
			selectedContact: updatedContacts,
			isUpdating: true,
		})
	}
	const handleCancelUpdateContact = (contact) => {
		//const updatedContacts = contacts.filter((c) => c.id === contact.id)
		setUpdateContactInfo({
			selectedContact: undefined,
			isUpdating: false,
		})
	}

	return (
		<div className='d-flex flex-column vh-100 overflow-auto'>
			<Header />
			<div className='container flex-grow-1'>
				<div className='row py-3'>
					<div className='col-5 offset-1'>
						<AddRandomContact handleAddRandomContact={handleAddRandomContact} />
					</div>
					<div className='col-5'>
						<RemoveAllContact handleRemoveAllContact={handleRemoveAllContact} />
					</div>
					<div className='col-12 my-2'>
						<AddContact
							handleAddContact={handleAddContact}
							isUpdating={updateContactInfo.isUpdating}
							selectedContact={updateContactInfo.selectedContact}
							handleCancelUpdateContact={handleCancelUpdateContact}
							handleUpdateContact={handleUpdateContact}
						/>
					</div>
					<div className='col-12 my-2'>
						<FavoriteContacts
							contacts={contacts.filter((u) => u.isFavorite === true)}
							favoriteClick={handleToggleFavorites}
							handleDeleteContact={handleDeleteContact}
							handleUpdateClick={handleUpdateClick}
						/>
					</div>
					<div className='col-12 my-2'>
						<GeneralContacts
							contacts={contacts.filter((u) => u.isFavorite === false)}
							favoriteClick={handleToggleFavorites}
							handleDeleteContact={handleDeleteContact}
							handleUpdateClick={handleUpdateClick}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default ContactIndex
