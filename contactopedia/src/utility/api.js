import axios from 'axios'

const gerRandomUser = async () => {
	const response = await axios.get(
		'https://random-data-api.com/api/v2/users?size=2&is_xml=true',
		{
			headers: {},
			params: { size: 1 },
		}
	)
	return response
}

export { gerRandomUser }
