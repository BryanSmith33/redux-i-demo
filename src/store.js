// here is where the magic happens
// we only need to import createStore from redux, nothing more
import { createStore } from 'redux'

// setting up our inital state for our app. This is where you would put the state you normally had inside of your components
const initialState = {
	username: '',
	favoriteNumber: null
}

// action tuypes
export const UPDATE_USERNAME = 'UPDATE_USERNAME'
export const UPDATE_FAVORITE_NUMBER = 'UPDATE_FAVORITE_NUMBER'

// reducer function. this takes in two params: state and action.
// It will switch off the action type that gets dispatched
function reducer(state = initialState, action) {
	switch (action.type) {
		case UPDATE_USERNAME:
			return {
				...state,
				username: action.username
			}
		case UPDATE_FAVORITE_NUMBER:
			return {
				...state,
				favoriteNumber: action.favoriteNumber
			}
		default:
			return state
	}
}

// exporting createStore to use in the components we decide need to know about this
export default createStore(reducer)
