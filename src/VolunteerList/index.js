import React from 'react';



const VolunteerList = ({volunteers}) => {
	console.log(volunteers, 'Mapping volunteers')

	const volunteerList = volunteers.map((volunteer, i)=> {
		return (

			<li key={volunteer.id}>{volunteer.name}</li>


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