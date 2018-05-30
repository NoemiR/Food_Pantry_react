import React, {Component} from 'react';





const PickupList = ({pickups}) => {
	console.log(pickups, ' this si pickups MAP')

	const pickupList = pickups.map((pickup, i) => {
		return (
			<li key={pickup.id}>{pickup.date}<br/>{pickup.family_id}<br/>{pickup.schedule_id}</li>



		)
	})

	return (
		<div>
			<ul>
				{pickupList}
			</ul>
		</div>
	)
}




export default PickupList;