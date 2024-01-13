import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	decrement,
	increment,
	decrementMultiplier,
	incrementMultiplier,
} from '../../redux/slice/counterSlice'

const Counter = () => {
	const [inputValue, setInputValue] = useState(0)
	const [isValidNumber, setIsValidNumber] = useState()

	const count = useSelector((state) => state.counterStore.count)
	const dispatch = useDispatch()

	const handleIncrementMultiplier = () => {
		const val = parseInt(inputValue)
		if (!isNaN(val)) {
			dispatch(incrementMultiplier(val))
			setIsValidNumber(null)
		} else {
			setIsValidNumber('Please enter a valid number!')
		}
		setInputValue('')
	}
	const handleDecrementMultiplier = () => {
		const val = parseInt(inputValue)
		if (!isNaN(val)) {
			dispatch(decrementMultiplier(val))
			setIsValidNumber(null)
		} else {
			setIsValidNumber('Please enter a valid number!')
		}
		setInputValue('')
	}

	return (
		<div className='mt-2 pt-3 pl-2 text-center border-top'>
			<div className='pb-2 h1 text-primary'>{count}</div>
			{isValidNumber && <div className='h2 text-danger'>{isValidNumber}</div>}
			<div className='row'>
				<div className='col-12 col-md-6 p-4'>
					<div className='p-4 border'>
						<h4 className='text-success pb-2'>Basic Counter</h4>
						<button
							className='btn btn-primary px-4 mx-2'
							onClick={() => dispatch(increment())}
						>
							Add
						</button>
						<button
							className='btn btn-danger mx-2'
							onClick={() => dispatch(decrement())}
						>
							Remove
						</button>
					</div>
				</div>

				<div className='col-12 col-md-6 p-4'>
					<div className='p-4 border'>
						<h4 className='text-success pb-2'>Multiplier Counter</h4>
						<div className='row'>
							<div className='col-4 p-1'>
								<input
									type='text'
									placeholder='multiplier...'
									className='form-control'
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
								/>
							</div>
							<div className='col-4 p-1'>
								<button
									className='btn btn-primary form-control'
									onClick={handleIncrementMultiplier}
									// onClick={() => dispatch(incrementMultiplier())}
								>
									Add
								</button>
							</div>
							<div className='col-4 p-1'>
								<button
									className='btn btn-danger form-control'
									onClick={handleDecrementMultiplier}
									// onClick={() => dispatch(decrementMultiplier(10))}
								>
									Remove
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Counter
