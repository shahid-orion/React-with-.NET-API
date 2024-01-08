import React from 'react'
import Students from './Components/Student/Student'
const studentCollection = [
	{ experience: 2, studentName: 'Musa Aman' },
	{ experience: 5, studentName: 'Kishor Pasha' },
	{ experience: 3, studentName: 'Robin Milford' },
	{ experience: 0, studentName: 'Terry Doil' },
]

const MainBody = () => {
	const whatWeWillLearn = 'REACT JS'
	const lectureCount = 5
	return (
		<div className='px-4 m-4' style={{ minHeight: '70VH' }}>
			<p className='text-primary text-center'>
				In this course, we're building Taskopedia using {whatWeWillLearn}!
				<br />
				Total lecture = {lectureCount}
			</p>

			<ul>
				<li>Call Ben</li>
				<li>Go to Coles</li>
			</ul>
			<Students props={studentCollection}></Students>
		</div>
	)
}

export default MainBody
