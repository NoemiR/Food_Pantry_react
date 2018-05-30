import React, {Component} from 'react';
import AdminHeader from '../AdminHeader'


class AdminLoginRegister extends Component {
	constructor(){
		super()
		this.state = {
			username: "",
			password: "",
			register: false,
			loggedIn: false

		}
	}

	handleSubmit = (e) => {
		console.log("This is in Admin handle submit")
		e.preventDefault();
		this.props.loginAdmin(this.state.username, this.state.password)
		this.setState({
			loggedIn: true
		})
	}


	handleInput = (e) => {
		console.log("this is handle Input in admin ")
		const state = this.state;
			state[e.currentTarget.name] = e.currentTarget.value; this.setState(state)

	}

	// doRegister = () => {
	// 	this.setState({
	// 		register: true,
	// 	})
	// }

	// doLogin = () => {
	// 	this.setState({
	// 		register: false,
	// 	})
	// }


	render(){
		return(
			<div>
				{
					this.state.loggedIn ? <AdminHeader/> : 
				
					<div className="form">
						<h1>ADMIN</h1>
						<form onSubmit={this.handleSubmit}>
							<input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.handleInput}/>
							<input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.handleInpu}/>
							<button type="Submit" value="login">Login</button>
						</form>
					</div>		
				}
			</div>
		)
	}
}













export default AdminLoginRegister;







