import React, {Component} from 'react';
import FamilyList from '../FamilyList';



class FamilyRegistration extends Component {
	constructor(){
		super();
		this.state = {
			name: '',
			phone: '',
			address: '',
			income: '',
			household: '',
			employment: '',
			birthdate: '',
			intake: '',
			active: false
			
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.registerFamily(this.state.name, this.state.phone, this.state.address, this.state.income, this.state.household, this.state.employment, this.state.birthdate, this.state.intake)
		this.setState({
			active: true
		})

	}


	handleInput = (e) => {
		const state = this.state;
		state[e.currentTarget.name] = e.currentTarget.value; this.setState(state)
	}

	render() {

		console.log(this.props.families, ' this is families in family registration')

		return (
			<div> 
				
				
				<div className="form">
					<h1>Family Registration</h1>
					<form onSubmit={this.handleSubmit}>
						<input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleInput}/> <br/>
						<input type="text" name="phone" placeholder="phone" value={this.state.phone} onChange={this.handleInput}/> <br/>
						<input type="text" name="address" placeholder="address" value={this.state.address} onChange={this.handleInput}/> <br/>
						<input type="text" name="income" placeholder="income" value={this.state.income} onChange={this.handleInput} /> <br/>
						<input type="text" name="household" placeholder="household size" value={this.state.household} onChange={this.handleInput}/> <br/>
						<input type="text" name="employment" placeholder="employment" value={this.state.employment} onChange={this.handleInput}/> <br/>
						<input type="text" name="birthdate" placeholder="birthdate" value={this.state.birthdate} onChange={this.handleInput}/> <br/>
						<input type="text" name="intake" placeholder="intake" value={this.state.intake} onChange={this.handleInput}/> <br/>
						<button type="Submit" value="register" onChange={this.handleInput}>Submit</button>
					</form>
				</div> 
			
			</div>
		)
	}
}


export default FamilyRegistration;