import React, {Component} from 'react';

import './style.css'



const ScheduleList = ({schedules}) => {
	console.log(schedules, ' this si families')

	const scheduleList = schedules.map((schedule, i) => {
		return (
			<li className="scheduleList" key={schedule.id}>{schedule.title}<br/> {schedule.date}</li>

		)
	})

	return (
		<div>
			<ul>
				{scheduleList}
			</ul>
		</div>
	)
}




export default ScheduleList;