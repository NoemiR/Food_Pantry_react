import React, {Component} from 'react';
import VolunteerRegistration from '../VolunteerRegistration';
import VolunteerList from '../VolunteerList';




class VolunteerDisplay extends Component {
	constructor(){
		super()
	}
	render(){
		return(
			<div>
			<h1> Volunteers</h1>
			 <VolunteerList getVolunteers={this.props.getVolunteers} volunteers={this.props.volunteers}/>
			 <VolunteerRegistration registerVolunteer={this.props.registerVolunteer} volunteers={this.props.volunteers}/>
			</div>

		)	
	}
	
}


export default VolunteerDisplay;