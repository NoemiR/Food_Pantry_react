import React from 'react';



const FamilyList = ({families}) => {
	console.log(families, ' this si families')

	const familyList = families.map((family, i) => {
		return (
			<li key={family.id}>{family.name}</li>



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