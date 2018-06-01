import React, {Component} from 'react';
import ScheduleList from '../ScheduleList'



class CreateSchedule extends Component {
	constructor(){
		super();
		this.state = {
		date: '',
        title: '',
        note: '',
        volunteer_id: '', 
        family_id: '',
        active: false
		}
	}



	handleSubmit = (e) => {
		console.log("This is in create schedule handle submit")
		e.preventDefault();
		this.props.addSchedule(this.state.date, this.state.title, this.state.note, this.state.volunteer_id, this.state.family_id)
		this.setState({
			active: true
		})

	}



	handleInput = (e) => {
		console.log("this is handle Input in create schedule ")
		const state = this.state;
		state[e.currentTarget.name] = e.currentTarget.value; this.setState(state)
	}





	render() {
		console.log(this.props.schedules, 'this is create schedule')

		return (

			<div>
				
			
				<div className="form">
					<h1>Create Schedule</h1>
					<form onSubmit={this.handleSubmit}>
						<input type="text" name="date" placeholder="date" value={this.state.date} onChange={this.handleInput}/> <br/>
						<input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.handleInput}/> <br/>
						<input type="text" name="note" placeholder="note" value={this.state.note} onChange={this.handleInput}/> <br/>
						<input type="text" name="volunteer_id" placeholder="volunteer id" value={this.state.volunteer_id} onChange={this.handleInput}/> <br/>
						<input type="text" name="family_id" placeholder="family id" value={this.state.family_id} onChange={this.handleInput}/> <br/>
						<button type="Submit" onChange={this.handleInput}>Submit</button>
					</form>
				</div>
			
			</div>
		)
	}
}



export default CreateSchedule;