import React, {Component} from 'react';
import PickupList from '../PickupList'

class FamilyShowPage extends Component {
	constructor(){
		super()

	}

	getFamilyPickups = async (e) => {
	    e.preventDefault();
	    const id = e.currentTarget.id;


	    // fetch returns a promise. After we "await" it, it is resolved to a Response object
	    // which we are assigning to the variable response
	    // -- see https://developer.mozilla.org/en-US/docs/Web/API/Response
	    const response = await fetch('http://localhost:9292/pickups/families/' + id, {
	      credentials: 'include'
	    });

	    // runnning .json on response (Which is a response object) 
	    // gives us another promise
	    // once we "await" that promise (meaning -- once that promise is resolved -- meaning the async action is finished), 
	    // then we have the actual data in json
	    const data = await response.json();

	    console.log(data, 'this is "data" in getFamilyPickups in App.js')

	    this.setState({
	      pickups: data.family_pickups
	    })
	  }


	render(){
		console.log(this.props.family, 'show page')
		if(this.props.family && this.props.family.show_family) {
			return(
				<div>

				 	{this.props.family.show_family.name}
				 	
				 	<PickupList getPickups={this.props.getPickups} getFamilypickups={this.getFamilypickups} pickups={this.props.pickups}/>
				</div>

			)
		}
		else {
			return <div></div>
		}

	}
	
}




export default FamilyShowPage;