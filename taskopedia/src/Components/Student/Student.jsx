import { faker } from '@faker-js/faker'
import StudentReview from './StudentReview'

const Students = ({ props }) => {
	return (
		<div className=''>
			{props.map((student, i) => (
				<div className='col-4 p-1 w-100' key={i}>
					<div className='row border'>
						<div className='col-3'>
							<img
								src={faker.image.urlLoremFlickr({ category: 'people' })}
								alt=''
								className='py-2 rounded'
								width={80}
								height={80}
							/>
						</div>
						<div className='col-7'>
							{student.studentName} <br />
							Programming Experience: {student.experience} years
						</div>
						<div className='col-2'>
							{student.experience >= 2 ? <StudentReview /> : ''}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default Students
