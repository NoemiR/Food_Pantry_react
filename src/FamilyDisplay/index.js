import React, {Component} from 'react';
import FamilyRegistration from '../FamilyRegistration';
import FamilyList from '../FamilyList';





class FamilyDisplay extends Component {
	constructor(){
		super()
	}

	render(){
		return(
			<div>
			 	<h1> Family Display</h1>
			 	
			 	<FamilyRegistration registerFamily={this.props.registerFamily} families={this.props.families}/>
			 	<FamilyList getFamilies={this.props.getFamilies} families={this.props.families} getFamily={this.props.getFamily}/>

			</div>

		)	
	}
	
}


export default FamilyDisplay;