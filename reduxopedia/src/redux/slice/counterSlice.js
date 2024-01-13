import { createSlice } from '@reduxjs/toolkit'
import { resetDestination } from './destinationSlice'
import { resetReduxopedi } from '../action/actions'

const initialState = { count: 0 }

export const counterSlice = createSlice({
	name: 'counter',
	initialState: initialState,
	reducers: {
		//define all actions
		increment: (state) => {
			state.count += 1
		},
		incrementMultiplier: (state, action) => {
			state.count += action.payload
		},
		decrement: (state) => {
			state.count -= 1
		},
		decrementMultiplier: (state, action) => {
			state.count -= action.payload
		},
		// resetCounter: (state) => {
		// 	state.count = 0
		// },
	},
	extraReducers: (builder) =>
		builder.addCase(resetReduxopedi, (state, action) => {
			state.count = 0
		}),
	// builder.addCase(resetDestination.toString(), (state, action) => {
	// 	state.count = 0
	// }),
})

export const {
	increment,
	decrement,
	decrementMultiplier,
	incrementMultiplier,
	// resetCounter,
} = counterSlice.actions
export const counterReducer = counterSlice.reducer
