import React, {Component} from 'react';



const MapFamilyPickups = ({families, getFamilyPickups}) => {
	// const {families, getFamilyPickups} = props;

	// const families = props.families;
	// const getFamilyPickups = props.getFamilyPickups// 

	console.log(getFamilyPickups, ' this MAP')

	const familyListMap = families.map((family, i) => {
		return (
			<li className="familyListMap" key={family.id} id={family.id} onClick={getFamilyPickups}>{family.name}<br/>{family.phone}<br/>{family.address}</li>




		)
	})

	return (


		<div>

			<ul>

				{familyListMap}
				
			</ul>

		</div>



	)
}
export default MapFamilyPickups;