import React, {Component} from 'react';
import './style.css'




const PickupList = ({pickups}) => {
	console.log(pickups, ' this si pickups MAP')

	const pickupList = pickups.map((pickup, i) => {
		return (
			<li className="pickupList" key={pickup.id}>Date {pickup.date}<br/>Family Id {pickup.family_id}<br/>Schedule {pickup.schedule_id}<br/>
				
				<button>Check In Family</button>
			</li>



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