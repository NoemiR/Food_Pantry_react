import React, {Component} from 'react';
import VolunteerList from '../VolunteerList'
import './style.css'
class VolunteerRegistration extends Component {
	constructor(){
		super();
		this.state = {
			name: '',
			address: '', 
			phone: '',
			email: '',
			start: '',
			route: '',
			birthdate: '',
			active: false
		}
	}



	handleSubmit = (e) => {
		e.preventDefault();
		this.props.registerVolunteer(this.state.name, this.state.address, this.state.phone, this.state.email, this.state.start, this.state.route, this.state.birthdate)
		this.setState({
			active: true
		})
	}




	handleInput = (e) => {
		const state = this.state;
		state[e.currentTarget.name] = e.currentTarget.value;
		this.setState(state)
	}



	render(){
		console.log(this.props.volunteers, 'this is volunteers in VolunteerRegistration ')
		return (

			<div>
				
				
					<div className="form">
						<h1> Volunteer Registration</h1>
						<form onSubmit={this.handleSubmit}>
							<input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleInput}/> <br/>
							<input type="text" name="address" placeholder="address" value={this.state.address} onChange={this.handleInput}/> <br/>
							<input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleInput}/> <br/>
							<input type="text" name="email" placeholder="email" value={this.state.email} onChange={this.handleInput} /> <br/>
							<input type="text" name="start" placeholder="start date" value={this.state.start} onChange={this.handleInput}/> <br/>
							<input type="text" name="route" placeholder="route number" value={this.state.route} onChange={this.handleInput}/> <br/>
							<input type="text" name="birthdate" placeholder="birthdate" value={this.state.birthdate} onChange={this.handleInput}/> <br/>
							<button type="Submit" value="register" onChange={this.handleInput}>Submit</button>
						</form>
					</div> 
				

			</div>


		)
	}
}





































export default VolunteerRegistration;