import React, { Component, createRef } from 'react'
import store from '../store'
// importing the action type that will fire our reducer function and know which course to take
import { UPDATE_FAVORITE_NUMBER } from '../store'

class UpdateNumber extends Component {
	// here we are using a ref. A ref is how you can access DOM nodes rather than targeting it directly with javascript
	numberInput = createRef()

	// custom method that will dispatch our action
	// notice we pass in a favoriteNumber, that is what we called in in our store and a type which will allow our switch case statement to know what to do
	updateFavoriteNumber(number) {
		store.dispatch({ favoriteNumber: number, type: UPDATE_FAVORITE_NUMBER })
	}

	render() {
		return (
			<input
				placeholder='favorite number'
				ref={this.numberInput}
				// run this function anytime ther is a change in the input
				onChange={() => this.updateFavoriteNumber(this.numberInput.current.value)}
			/>
		)
	}
}

export default UpdateNumber
