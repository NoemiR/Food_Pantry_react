import React, {Component} from 'react';





const ScheduleList = ({schedules}) => {
	console.log(schedules, ' this si families')

	const scheduleList = schedules.map((schedule, i) => {
		return (
			<li key={schedule.id}>{schedule.title}<br/>{schedule.date}<br/>{schedule.type}</li>



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