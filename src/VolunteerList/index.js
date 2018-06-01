import React from 'react';
import './style.css'

const VolunteerList = ({volunteers}) => {
	console.log(volunteers, 'Mapping volunteers')

	const volunteerList = volunteers.map((volunteer, i)=> {
		return (

			<li className="volunteerList" key={volunteer.id}>{volunteer.name}<br/>{volunteer.phone}</li>


		)
	})



	return (

		<div>
			<ul>
				{volunteerList}
			</ul>
		</div>

	)

}




export default VolunteerList;