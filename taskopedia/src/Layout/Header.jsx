import reactLogo from '../images/react192.png'

const MainHeader = () => {
	return (
		<div
			className='pt-2 py-1 pl-1'
			style={{
				color: '#fff',
				backgroundColor: '#000',
				textAlign: 'center',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<img src={reactLogo} alt='React' width={40} height={40} />
			<span className='h2 pt-1 mx-2 text-white-50'>
				React course - Taskopedia
			</span>
		</div>
	)
}

//styling with constant
const subHeaderStyle = {
	color: 'gray',
	backgroundColor: 'skyblue',
	textAlign: 'center',
}
const SubHeader = () => {
	return (
		<h4 style={subHeaderStyle} className='text-center'>
			It will be an exciting course!
		</h4>
	)
}
const Header = () => {
	return (
		<div>
			<MainHeader />
			<SubHeader />
		</div>
	)
}

export default Header
