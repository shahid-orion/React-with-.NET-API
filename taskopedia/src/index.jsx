import './CSS/style.css'
import ReactDOM from 'react-dom/client'
import Header from './Layout/Header'
import Student from './Components/Student/Student'
import Footer from './Layout/Footer'
import MainBody from './MainBody'

const studentCollection = [
	{ experience: 2, studentName: 'Musa Aman' },
	{ experience: 5, studentName: 'Kishor Pasha' },
	{ experience: 3, studentName: 'Robin Milford' },
	{ experience: 0, studentName: 'Terry Doil' },
]

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<div className='' style={{ backgroundColor: 'black', color: 'gray' }}>
		<Header />
		<div className=''>
			<MainBody />
		</div>
		<div className='container row'>Student Enrolled</div>
		<Footer />
	</div>
)
