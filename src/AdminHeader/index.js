import React, {Componet} from 'react';
import FamilyRegistration from '../FamilyRegistration'
import VolunteerRegistration from '../VolunteerRegistration'
import {Route, Link, Switch} from 'react-router-dom'
import ScheduleDisplay from '../ScheduleDisplay'

const Header = () => {
	return(
		<header>
			<ul>
				<li><Link to='/family'>Family</Link></li>
				<li><Link to='/volunteer'>Volunteer</Link></li>
				<li><Link to='/schedules'>Schedule</Link></li>
			</ul>
		</header>
	)
}
const My404 = () => {
  return (
    <div>
    Not found
    </div>
    )
}

const App = () => {
  
    return (
      <main>
        <Header/>
        <Switch>
           <Route exact path="/family" component={FamilyRegistration}/>
           <Route exact path="/volunteer" component={VolunteerRegistration}/>
           <Route exact path="/schedules" component={ScheduleDisplay}/>
           <Route component={My404}/>
        </Switch>
      </main>
    )
  }
export default Header;