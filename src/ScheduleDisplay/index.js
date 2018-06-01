import React, {Component} from 'react';
import CreateSchedule from '../CreateSchedule';
import ScheduleList from '../ScheduleList';

import './style.css'


class ScheduleDisplay extends Component {
	constructor(){
		super()
	}
	render(){
		return(
			<div>
				<h1>Schedule</h1>
				<ScheduleList getSchedules={this.props.getSchedules} schedules={this.props.schedules}/>
				<CreateSchedule addSchedule={this.props.addSchedule} schedules={this.props.schedules}/>
			</div>

		)	
	}
	
}


export default ScheduleDisplay;