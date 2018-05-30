import React from 'react';
import './style.css'



const FamilyList = ({families}) => {
	console.log(families, ' this si families')

	const familyList = families.map((family, i) => {
		return (
			<li className="familyList" key={family.id}>{family.name}<br/>{family.phone}<br/>{family.address}</li>



		)
	})

	return (


		<div>
			
			<ul>

				{familyList}
			</ul>

		</div>



	)
}




export default FamilyList;