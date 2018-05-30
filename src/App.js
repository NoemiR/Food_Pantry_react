import React, { Component } from 'react';
import Logo from './Logo.png';
import './App.css';

import FamilyDisplay from './FamilyDisplay'
import ScheduleDisplay from './ScheduleDisplay'
import PickupDisplay from './PickupDisplay'
import VolunteerDisplay from './VolunteerDisplay'
//import AdminHeader from './AdminHeader'






class App extends Component {
  constructor(){
    super()
    this.state = {
      families: [],
      pickups: [],
      shifts: [],
      schedules: [],
      volunteers: [],
      admins: [],
      loggedIn: false,
      whichPage: '',
      buttons: true
    }
  }




  componentDidMount(){
    this.getFamilies()
    .then((families) => {
      console.log(families, ' this is the response')
      this.setState({families: families })
    })
    .catch((err) => {
      console.log(err)
    })


    this.getVolunteers()
    .then((volunteers) => {
      console.log(volunteers, ' this is the volunteers response')
      this.setState({volunteers: volunteers})
    })
    .catch((err) => {
      console.log(err)
    })



    this.getSchedules()
    .then((schedules) => {
      console.log(schedules, 'this is the schedules')
      this.setState({schedules: schedules})
    })
    .catch((err) => {
      console.log(err)
    })


    this.getPickups()
    .then((pickups) => {
      console.log(pickups, 'this is the schedules')
      this.setState({pickups: pickups})
    })
    .catch((err) => {
      console.log(err)
    })
  }


  









  getFamilies = async () => {
    const familiesJson = await fetch('http://localhost:9292/families', {
      credentials: 'include'
    });
    const families = await familiesJson.json();
      return families;
  }


  registerFamily = async (name, address, phone, income, household, employment, birthdate, intake) => {
    const responsePromise = await fetch('http://localhost:9292/families/register', {
      method: 'POST',
      credentials: 'include', 
      body: JSON.stringify({
        name: name,
        address: address,
        phone: phone,
        income: income,
        household: household,
        employment: employment,
        birthdate: birthdate, 
        intake: intake
      })
    })

    const parsedRegisterResponse = await responsePromise.json();
    if(parsedRegisterResponse.success){
      this.setState({
        loggedIn: true
      })

      this.getFamilies()
      .then((families) => {
        console.log(families, ' inside of parsedRegisterResponse')
        this.setState({families: families})
      })
      .catch((err) => {
        console.log(err)
      })
    } else{ 
      this.setState({
        loginErr: parsedRegisterResponse.message
      })
    }
  }


















  registerVolunteer = async (name, address, phone, email, start, route, birthdate) => {
    const promiseResponse = await fetch('http://localhost:9292/volunteers/register', {
      method: 'POST', 
      credentials: 'include',
      body: JSON.stringify({
        name: name,
        address: address,
        phone: phone,
        email: email,
        start: start,
        route: route,
        birthdate: birthdate

      })
    })

    const parsedVolounteerRegisterResponse = await promiseResponse.json();
    if(parsedVolounteerRegisterResponse.success){
      this.setState({
        loggedIn: true
      })
      this.getVolunteers()
        .then((volunteers) => {
          console.log(volunteers, 'this is the parsedVolounteerRegisterResponse')
          this.setState({volunteers: volunteers})
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      this.setState({
        loginErr: parsedVolounteerRegisterResponse.message
      })

    }
  }
  getVolunteers = async () => {
    const volunteersJson = await fetch('http://localhost:9292/volunteers', {
      credentials: 'include'
    });
    const volunteers = await volunteersJson.json();
    return volunteers;
  }















  getSchedules = async () => {
    const schedulesJson = await fetch('http://localhost:9292/schedules', {
      credentials: 'include'
    });
    const schedules = await schedulesJson.json();
    return schedules;
  }

  addSchedule = async (date, title, note, type, volunteer_id, family_id) => {
    const schedule = await fetch('http://localhost:9292/schedules', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        date: date,
        title: title,
        note: note,
        type: type,
        volunteer_id: volunteer_id, 
        family_id: family_id

      })
    });
    const scheduleParsedAddResponse = await schedule.json()
    console.log(scheduleParsedAddResponse)
    this.setState({schedules: [...this.state.schedules, scheduleParsedAddResponse]})
    return scheduleParsedAddResponse;
  
  }
















  // getShifts = async () => {
  //   const shiftsJson = await fetch('http://localhost:9292/shifts', {
  //     credentials: 'include'
  //   });
  //   const shifts = await shiftsJson.json();
  //   return shifts;
  // }















  getPickups = async () => {
    const pickupsJson = await fetch('http://localhost:9292/pickups', {
      credentials: 'include'
    });
    const pickups = await pickupsJson.json();
    return pickups;
  }

  addPickup = async (date, title, note, volunteer_id, family_id) => {
    const schedule = await fetch('http://localhost:9292/schedules', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        date: date,
        title: title,
        note: note,
        volunteer_id: volunteer_id, 
        family_id: family_id

      })
    });
      const scheduleParsedAddResponse = await schedule.json()
      this.setState({schedule: [...this.state.schedules, scheduleParsedAddResponse]})
      return scheduleParsedAddResponse;
  
  }  


  handleClick = (e) => {
    console.log(e.currentTarget.id)
    this.setState({
      buttons: false,
      whichPage: e.currentTarget.id
    })
  }










  render() {
    console.log(this.state, ' this.state')

    let page;
      if(this.state.whichPage == "family"){
          page = <FamilyDisplay getFamilies={this.getfamilies} registerFamily={this.registerFamily} families={this.state.families}/>
      } else if(this.state.whichPage == "volunteer"){
        page=  <VolunteerDisplay getVolunteers={this.getVolunteers} registerVolunteer={this.registerVolunteer} volunteers={this.state.volunteers}/>
      }else {
         page = <ScheduleDisplay getSchedules={this.getSchedules} addSchedule={this.addSchedule} schedules={this.state.schedules}/>
      }

    return (
     
      <div className="App">

        <button className="button" id="family" onClick={this.handleClick}>Family</button>
        <button className="button" id="volunteer" onClick={this.handleClick}>Volunteer</button>
        <button className="button" id="schedule" onClick={this.handleClick}>Schedule</button>

        <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <h1 className="App-title">One helping hand in time is better than one hundred that are too late</h1>
        </header>
     
        <div>
          {page}
        </div>
       
        <PickupDisplay getPickups={this.getPickups} pickups={this.state.pickups}/>
      </div>
    );
  }
}

export default App;
