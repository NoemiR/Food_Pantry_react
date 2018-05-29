import React, { Component } from 'react';
import Logo from './Logo.png';
import './App.css';

import FamilyRegistration from './FamilyRegistration'
import VolunteerRegistration from './VolunteerRegistration'

class App extends Component {
  constructor(){
    super()
    this.state = {
      families: [],
      pickups: [],
      shifts: [],
      volunteers: [],
      admins: [],
      loggedIn: false
    }
  }


  componentDidMount(){
    this.getFamilies()
    .then((families) => {
      console.log(families, ' this is the response')
      this.setState({families: families })
    })
    .catch((err) => {
      console.log
    })

    this.getVolunteers()
    .then((volunteers) => {
      console.log(volunteers, ' this is the volunteers response')
      this.setState({volunteers: volunteers})
    })
    .catch((err) => {
      console.log
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

  registerVolunteer= async (name, address, phone, email, start, route, birthdate) => {
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
      }else {
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

  // getAdmins = async () => {
  //   const adminsJson = await fetch('http://localhost:9292/admins', {
  //     credentials: 'include'
  //   });
  //   const admins = await adminsJson.json();
  //   return admins;
  // }

  // getShifts = async () => {
  //   const shiftsJson = await fetch('http://localhost:9292/shifts', {
  //     credentials: 'include'
  //   });
  //   const shifts = await shiftsJson.json();
  //   return shifts;
  // }


  // getPickups = async () => {
  //   const pickupsJson = await fetch('http://localhost:9292/pickups', {
  //     credentials: 'include'
  //   });
  //   const pickups = await pickupsJson.json();
  //   return pickups;
  // }



























  render() {
    console.log(this.state, ' this.state')
    return (
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <h1 className="App-title">One helping hand in time is better than one hundred that are too late</h1>
        </header>
        <p className="App-intro">
            To get started
        </p>
        <VolunteerRegistration registerVolunteer={this.registerVolunteer} volunteers={this.state.volunteers}/>
        <FamilyRegistration registerFamily={this.registerFamily} families={this.state.families}  />
      </div>
    );
  }
}

export default App;