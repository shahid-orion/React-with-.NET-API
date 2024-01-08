import React from 'react'

const Contact = (props) => {
	return (
		<div className={`row p-md-2 mb-2 rounded border`}>
			<div className='col-2 col-md-2 pt-2 pt-md-1'>
				<img
					src={`https://ui-avatars.com/api/?name=${props.contact.name}`}
					alt={`${props.contact.name}`}
				/>
			</div>
			<div className='col-5 col-md-6 pt-2 pt-0 text-warning'>
				<span className='h4'>{props.contact.name}</span>
				<br />
				<div className='text-white-50'>
					{props.contact.email} <br />
					{props.contact.phone}
				</div>
			</div>
			<div className='col-2 col-md-2 pt-3  pt-md-3 text-warning'>
				<button
					className={`btn btn-sm m-1 fs-3 ${
						props.contact.isFavorite ? 'btn-warning' : 'btn-outline-warning'
					}`}
					onClick={() => props.favoriteClick(props.contact)}
				>
					<i className='bi bi-star-fill'></i>
				</button>
			</div>
			<div className='col-3 col-md-2 pt-3 pt-md-3 text-end px-0'>
				<button
					className='btn btn-primary btn-sm m-1 fs-2'
					onClick={() => props.handleUpdateClick(props.contact)}
				>
					<i className='bi bi-pencil-square'></i>
				</button>
				<button
					className='btn btn-danger btn-sm m-1 fs-2'
					onClick={() => props.handleDeleteContact(props.contact.id)}
				>
					<i className='bi bi-trash-fill'></i>
				</button>
			</div>
		</div>
	)
}

export default Contact
