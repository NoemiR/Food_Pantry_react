import React, {Component} from 'react';



class FamilyPickups extends Component {
	constructor(){
		super();
		this.state = {
			date: '',
	        schedule_id: '', 
	        family_id: '',
	        checkIn: false

		}
	}





	handleSubmit = (e) => {
		console.log("This is in addFamilyPickups handle submit")
		e.preventDefault();
		this.props.getFamilyPickups(this.state.date, this.state.schedule_id, this.state.family_id)
		this.setState({
			checkIn: true
		})

	}



	handleInput = (e) => {
		console.log("this is handle Input in addFamilyPickups")
		const state = this.state;
		state[e.currentTarget.name] = e.currentTarget.value; this.setState(state)
	}

	render() {
		console.log(this.props.pickups, 'this is addFamilyPickups')

		return (

			<div>
				
			
				<div className="form">
					<h1>Create Schedule</h1>
					<form onSubmit={this.handleSubmit}>
						<input type="text" name="date" placeholder="date" value={this.state.date} onChange={this.handleInput}/> <br/>
						<input type="text" name="schedule_id" placeholder="schedule id" value={this.state.schedule_id} onChange={this.handleInput}/> <br/>
						<input type="text" name="family_id" placeholder="family id" value={this.state.family_id} onChange={this.handleInput}/> <br/>
						<input type="submit" value="Add Schedule">
					</form>
				</div>
			
			</div>
		)
	}
}



export default FamilyPickups;