import React, { Component, createRef } from 'react'
import store from '../store'
// importing the action type that will fire our reducer function and know which course to take

import { UPDATE_USERNAME } from '../store'

class UpdateUser extends Component {
	// here we are using a ref. A ref is how you can access DOM nodes rather than targeting it directly with javascript

	usernameInput = createRef()

	// custom method that will dispatch our action
	// notice we pass in a favoriteNumber, that is what we called in in our store and a type which will allow our switch case statement to know what to do
	updateUsername(username) {
		store.dispatch({ username, type: UPDATE_USERNAME })
	}

	render() {
		return (
			<input
				placeholder='username'
				// run this function anytime ther is a change in the input
				onChange={() => this.updateUsername(this.usernameInput.current.value)}
				ref={this.usernameInput}
			/>
		)
	}
}

export default UpdateUser
