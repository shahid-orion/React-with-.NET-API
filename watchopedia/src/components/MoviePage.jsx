import React, { useState } from 'react'
import AddMovie from '../components/AddMovie'
import MovieList from './MovieList'

const moviesArray = ['Die Hard', 'Harry Potter']

const MoviePage = () => {
	const [movieList, setMovieList] = useState(moviesArray)
	const [statusMessage, setStatusMessage] = useState('')

	const handleAddMovie = (movie) => {
		const isDuplicate = movieList.includes(movie)
		if (isDuplicate) {
			setStatusMessage(`${movie} already exists!`)
			return
		}
		setStatusMessage(`${movie} added successfully`)
		setMovieList([...movieList, movie])
	}

	return (
		<div className='container col-12 col-md-6 my-3 border'>
			<AddMovie handleAddMovie={handleAddMovie} statusMessage={statusMessage} />
			<MovieList movies={movieList} />
		</div>
	)
}

export default MoviePage
