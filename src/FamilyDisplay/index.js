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
			 <FamilyList getFamilies={this.props.getFamilies} families={this.props.families}/>
			 <FamilyRegistration registerFamily={this.props.registerFamily} families={this.props.families}/>
			</div>

		)	
	}
	
}


export default FamilyDisplay;