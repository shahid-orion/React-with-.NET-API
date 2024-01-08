import React from 'react'
import { gerRandomUser } from '../../utility/api'

const GetRandomContacts = async (props) => {
	const responseFromAPI = await gerRandomUser()

	return props.handleAddRandomContact({
		name:
			responseFromAPI.data.first_name + ' ' + responseFromAPI.data.last_name,
		email: responseFromAPI.data.email,
		phone: responseFromAPI.data.phone_number,
	})
}

const AddRandomContact = (props) => {
	return (
		<div>
			<button
				className='btn btn-success form-control'
				// onClick={() => handleAddRandomContact()}
				onClick={() => GetRandomContacts(props)}
			>
				Add Random Contact
			</button>
		</div>
	)
}

export default AddRandomContact
