import { createSlice } from '@reduxjs/toolkit'
import { resetReduxopedi } from '../action/actions'
const initialState = () => {
	return {
		destinations: [
			{ name: 'Hong Kong', days: 7, fact: 'Worlds longest covered escalator' },
			{ name: 'Japan', days: 0, fact: 'Japan has a lot of mountains' },
			{ name: 'New Zealand', days: 7, fact: 'Hobbits set to see' },
		],
		destinationSelected: null,
	}
}

export const destinationSlice = createSlice({
	name: 'destination',
	initialState: initialState,
	reducers: {
		destinationClicked: (state, action) => {
			state.destinationSelected = action.payload
		},
		resetDestination: (state, action) => {
			console.log(action)
			state.destinationSelected = null
		},
	},
	extraReducers: (builder) =>
		builder.addCase(resetReduxopedi, (state, action) => {
			console.log(action)
			state.destinationSelected = null
		}),
})

export const { destinationClicked, resetDestination } = destinationSlice.actions
export const destinationReducer = destinationSlice.reducer
