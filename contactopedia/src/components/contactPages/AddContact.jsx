import React, { useEffect, useState } from 'react'

const AddContact = (props) => {
	const {
		handleAddContact,
		handleUpdateContact,
		handleCancelUpdateContact,
		isUpdating,
		selectedContact,
	} = props
	// const handleAddContact = props.handleAddContact
	// const handleUpdateContact = props.handleUpdateContact

	const [contactName, setContactName] = useState('')
	const [contactEmail, setContactEmail] = useState('')
	const [contactPhone, setContactPhone] = useState('')
	const [message, setMessage] = useState('')
	const [status, setStatus] = useState('')

	// Set initial values when updating
	useEffect(() => {
		if (isUpdating && selectedContact && selectedContact.length > 0) {
			setContactName(selectedContact[0].name)
			setContactEmail(selectedContact[0].email)
			setContactPhone(selectedContact[0].phone)
		}
	}, [isUpdating, selectedContact])

	const addContactFormSubmit = (e) => {
		e.preventDefault()

		//update call if it is true
		let result
		if (isUpdating) {
			//display error message if no changes were made
			const hasChanges =
				contactName !== selectedContact[0].name ||
				contactEmail !== selectedContact[0].email ||
				contactPhone !== selectedContact[0].phone

			if (!hasChanges) {
				// No changes made, set a message
				setMessage('No changes were made.')
				setStatus('info')
				return
			}

			result = handleUpdateContact({
				id: selectedContact[0].id, // Add this line
				name: contactName,
				email: contactEmail,
				phone: contactPhone,
			})
		} else {
			result = handleAddContact({
				name: contactName,
				email: contactEmail,
				phone: contactPhone,
			})
		}

		setMessage(result.msg)
		setStatus(result.status)

		// Clear the fields here if successful
		if (result.status === 'success') {
			setContactName('')
			setContactEmail('')
			setContactPhone('')
		}
	}
	const handleCancel = (e) => {
		e.preventDefault()
		props.handleCancelUpdateContact()

		setMessage('')
		setStatus('')
	}

	return (
		<div className='border rounded row text-white p-2 mx-1'>
			{message && (
				<div
					className={`text-center h2 ${
						status === 'success' ? 'text-success' : 'text-danger'
					}`}
				>
					{message}
				</div>
			)}
			{/* Display the message */}
			<form>
				<div className='col-12 text-white-50 text-center fs-4'>
					{props.isUpdating ? 'Update Contact' : 'Add a new Contact'}
				</div>
				<div className='col-12 col-md-5 offset-md-3 p-1'>
					<input
						type='text'
						className='form-control form-control-sm'
						placeholder='Name...'
						name='contactName'
						// value={
						// 	props.isUpdating ? props.selectedContact[0].name : contactName
						// } // Access the name property
						value={contactName} // Bind value to state
						onChange={(e) => setContactName(e.target.value)}
					/>
				</div>
				<div className='col-12 col-md-5 offset-md-3 p-1'>
					<input
						type='text'
						className='form-control form-control-sm'
						placeholder='Email...'
						name='contactEmail'
						// value={
						// 	props.isUpdating ? props.selectedContact[0].email : contactEmail
						// }
						value={contactEmail} // Bind value to state
						onChange={(e) => setContactEmail(e.target.value)}
					/>
				</div>
				<div className='col-12 col-md-5 offset-md-3 p-1'>
					<input
						type='text'
						className='form-control form-control-sm'
						placeholder='Phone...'
						name='contactPhone'
						// value={
						// 	props.isUpdating ? props.selectedContact[0].phone : contactPhone
						// }
						value={contactPhone} // Bind value to state
						onChange={(e) => setContactPhone(e.target.value)}
					/>
				</div>
				<div className={`col-12 p-1 col-md-5 offset-md-3`}>
					<button
						className='btn btn-primary btn-sm form-control'
						onClick={addContactFormSubmit}
					>
						{props.isUpdating ? 'Update' : 'Create'}
					</button>
					{props.isUpdating && (
						<button
							className='btn btn-secondary form-control btn-sm mt-2'
							onClick={handleCancel}
						>
							Cancel
						</button>
					)}
				</div>
			</form>
		</div>
	)
}

export default AddContact
