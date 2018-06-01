import React, {Component} from 'react';
import PickupList from '../PickupList';
import MapFamilyPickups from '../MapFamilyPickups'

class FamilyShowPage extends Component {
	constructor(){
		super()
		this.state = {
			pickups: [],
			checkin: true,
			
		}
		//add state where you can save the pickups
	}



	
		


	render(){
		console.log(this.props.family, 'show page')
		if(this.props.family && this.props.family.show_family) {
			return(
				<div>
					<h1>FamilyShowPage</h1>
				 	{this.props.family.show_family.name}<br/>
				 	{this.props.family.show_family.phone}<br/>
				 	{this.props.family.show_family.address}<br/>
				
				 	<button id={this.props.family.show_family.id} onClick={this.props.getFamilyPickups}>Family Pickups</button>
				 	<PickupList getFamilyPickups={this.props.getFamilyPickups} getPickups={this.props.getPickups} pickups={this.props.pickups}/>
			 			
				</div>

			)
		}
		else {
			return <div></div>
		}

	}
	
}




export default FamilyShowPage;