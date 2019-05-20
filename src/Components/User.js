import React, { Component } from 'react'
import store from '../store'

class User extends Component {
	// here we are getting the intial state
	constructor() {
		super()
		this.state = {
			store: store.getState()
		}
	}

	// what we are doing here is subscribing this component to any sort of change that happens in the store. That means that it can see when things update and use those new values
	componentDidMount() {
		store.subscribe(() => {
			this.setState({
				store: store.getState()
			})
		})
	}

	render() {
		// displaying the value of username from our redux store
		return <h1>Username: {this.state.store.username}</h1>
	}
}

export default User
