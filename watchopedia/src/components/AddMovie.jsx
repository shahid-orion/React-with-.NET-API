import React, { useState } from 'react'

const AddMovie = ({ handleAddMovie, statusMessage }) => {
	const [movieName, setMovieName] = useState('')

	const addMovieSubmit = (e) => {
		e.preventDefault()
		handleAddMovie(movieName)
	}

	return (
		<form>
			<div className='row text-white'>
				<div className='col-12 text-center py-1 h4 text-success'>Add Movie</div>
				{statusMessage && (
					<div className='col-12 h5 text-center text-danger'>
						{statusMessage}
					</div>
				)}
				<div className='col-8'>
					<input
						type='text'
						className='form-control'
						placeholder='Movie Name...'
						value={movieName}
						onChange={(e) => setMovieName(e.target.value)}
					/>
				</div>
				<div className='col-4'>
					<button
						className='btn btn-success form-control'
						onClick={addMovieSubmit}
					>
						Add
					</button>
					{/* {statusMessage && <div className='h2 text-red'>{statusMessage}</div>} */}
				</div>
				<hr className='mt-3' />
			</div>
		</form>
	)
}

export default AddMovie
