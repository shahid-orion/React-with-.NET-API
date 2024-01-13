import React from 'react'
import { useDispatch } from 'react-redux'
// import { resetCounter } from '../../redux/slice/counterSlice'
import { resetDestination } from '../../redux/slice/destinationSlice'
import { resetReduxopedi } from '../../redux/action/actions'

const ResetApp = () => {
	const dispatch = useDispatch()

	const resetAll = () => {
		// dispatch(resetCounter())
		// dispatch(resetDestination())
		dispatch(resetReduxopedi())
	}
	return (
		<div className='text-center mt-2'>
			<button className='btn btn-warning' onClick={() => resetAll()}>
				Reset App
			</button>
		</div>
	)
}

export default ResetApp
