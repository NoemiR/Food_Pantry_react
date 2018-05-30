import React, {Component} from 'react';

import PickupList from '../PickupList';




class PickupDisplay extends Component {
	constructor(){
		super()
	}
	render(){
		return(
			<div>
			<h1>Pickup </h1>
			 <PickupList getPickups={this.props.getPickups} pickups={this.props.pickups}/>
			 
			</div>

		)	
	}
	
}


export default PickupDisplay;