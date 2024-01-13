import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './slice/counterSlice'
import { destinationReducer } from './slice/destinationSlice'

//recommended: one store per application
export const store = configureStore({
	reducer: {
		counterStore: counterReducer,
		destinationStore: destinationReducer,
	},
})

// console.log(store.getState())
