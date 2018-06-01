import React, {Component} from 'react';
import CreatePickups from '../CreatePickups'
import PickupList from '../PickupList';




class PickupDisplay extends Component {
	constructor(){
		super()
	}
	render(){
		return(
			<div>
				<h1>Pickup </h1>
				<PickupList getFamilyPickups={this.props.getFamilyPickups} getPickups={this.props.getPickups} pickups={this.props.pickups}/>
				<CreatePickups/>			 	
			</div>

		)	
	}
	
}


export default PickupDisplay;