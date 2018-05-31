import React from 'react';
import './style.css'



const FamilyList = ({families, getFamily}) => {
	// const {families, getFamilyPickups} = props;

	// const families = props.families;
	// const getFamilyPickups = props.getFamilyPickups// 

	console.log(families, ' this si families')

	const familyList = families.map((family, i) => {
		return (
			<li className="familyList" key={family.id} id={family.id} onClick={getFamily}>{family.name}<br/>{family.phone}<br/>{family.address}</li>




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