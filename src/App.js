// nothing out of the ordinary here. just importing components

import React from 'react'
import './App.css'
import User from './Components/User'
import Number from './Components/Number'
import UpdateUser from './Components/UpdateUser'
import UpdateNumber from './Components/UpdateNumber'

function App() {
	return (
		<div className='App'>
			<User />
      <UpdateUser />
      <Number />
      <UpdateNumber />
		</div>
	)
}

export default App
