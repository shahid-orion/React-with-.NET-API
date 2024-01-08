import { useEffect, useState } from 'react'
import attack from '../images/attack.png'
import defend from '../images/defend.png'

const Counter = () => {
	const [counter, setCounter] = useState(0)
	const [status, setStatus] = useState('')
	const handleAttack = () => {
		setCounter(() => counter + Math.round(Math.random() * 10))
	}

	const handleDefence = () => {
		setCounter(() => counter - Math.round(Math.random() * 10))
	}

	const handleRandomPlayer = () => {
		let playMode = Math.round(Math.random())
		playMode === 0 ? handleAttack() : handleDefence()
	}

	const handleReset = () => {
		setCounter(0)
		setStatus('')
	}

	useEffect(() => {
		handleStatus()
	}, [counter])

	const handleStatus = () => {
		if (counter > 9) {
			setStatus('You Win!!!')
		} else if (counter < -9) {
			setStatus('You Lose!')
		} else {
			setStatus('')
		}
	}

	return (
		<div className='row text-center m-2'>
			<div className='h2 text-white'>
				Game Score: <span className='text-primary'>{counter}</span>
				<p>You win at +10 points and loose at -10 points</p>
				<p>Last Play: </p>
				<p>
					Game Status :{' '}
					<span className={`${counter > 9 ? 'text-success' : 'text-danger'}`}>
						{status}
					</span>
				</p>
			</div>
			{/* <div className='text-center mt-4'> */}
			<div
				className='col-6 col-md-4 col-sm-3 rounded border border-success mx-auto p-4'
				onClick={handleAttack}
				role='button'
			>
				<img src={attack} className='w-75 pt-3' alt='attack' />
			</div>
			<div
				className='col-6 col-md-4 col-sm-3 rounded border border-danger mx-auto p-4'
				onClick={handleDefence}
				role='button'
			>
				<img src={defend} className='w-75 pt-3' alt='defend' />
			</div>
			{/* </div> */}
			<div className='col-12 col-md-4 offset-md-4 mt-4'>
				<button
					className='btn btn-secondary w-100 mt-2'
					onClick={handleRandomPlayer}
				>
					Random Play
				</button>
				<button className='btn btn-warning w-100 mt-2' onClick={handleReset}>
					Reset
				</button>
			</div>
		</div>
	)
}

export default Counter
