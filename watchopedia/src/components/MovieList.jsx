import React from 'react'

const MovieList = (props) => {
	return (
		<div className='row text-white'>
			<div className='col-12 text-center py-1 h4 text-primary'>
				{props.movies.map((movie, i) => (
					<p key={i}>{movie}</p>
				))}
			</div>
		</div>
	)
}

export default MovieList
