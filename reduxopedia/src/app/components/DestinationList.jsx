import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { destinationClicked } from '../../redux/slice/destinationSlice'

const DestinationList = () => {
	const dispatch = useDispatch()
	const destinationList = useSelector(
		(state) => state.destinationStore.destinations
	)

	return destinationList.map((destination, i) => (
		<div key={i} className='text-center text-white row border-bottom'>
			<div className='col-8 col-md-3 offset-md-3 pt-2'>{destination.name}</div>
			<div className='col-3 col-md-2'>
				<button
					className='btn btn-success form-control m-1'
					onClick={() => dispatch(destinationClicked(destination))}
				>
					Details
				</button>
			</div>
		</div>
	))
}

export default DestinationList
