import React, { Component } from 'react';
import Logo from './Logo.png';
import './App.css';
import FamilyShowPage from './FamilyShowPage'
import FamilyDisplay from './FamilyDisplay'
import ScheduleDisplay from './ScheduleDisplay'
import PickupDisplay from './PickupDisplay'
import VolunteerDisplay from './VolunteerDisplay'







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
      buttons: true,
      family: {},

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

    this.getFamilyPickups()
    .then((familyPickups) => {
      
      this.setState({familyPickups: familyPickups})
    })
    .catch((err) => {
      console.log(err)
    })

  }


  



  getFamilyPickups = async (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;


    // fetch returns a promise. After we "await" it, it is resolved to a Response object
    // which we are assigning to the variable response
    // -- see https://developer.mozilla.org/en-US/docs/Web/API/Response
    const response = await fetch('https://lit-mountain-72961.herokuapp.com/pickups/families/' + id, {
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




// getting all families

  getFamilies = async () => {
    const familiesJson = await fetch('https://lit-mountain-72961.herokuapp.com/families', {
      credentials: 'include'
    });
    const families = await familiesJson.json();
      return families;
  }




//Register family 
  registerFamily = async (name, address, phone, income, household, employment, birthdate, intake) => {
    const responsePromise = await fetch('https://lit-mountain-72961.herokuapp.com/families/register', {
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
      }else{ 
        this.setState({
          loginErr: parsedRegisterResponse.message
        })
    }
  }














//Register volunteers and getting all the volunteers



  registerVolunteer = async (name, address, phone, email, start, route, birthdate) => {
    const promiseResponse = await fetch('https://lit-mountain-72961.herokuapp.com/volunteers/register', {
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
    const volunteersJson = await fetch('https://lit-mountain-72961.herokuapp.com/volunteers', {
      credentials: 'include'
    });
    const volunteers = await volunteersJson.json();
    return volunteers;
  }








//Getting schedules and adding schedules

  getSchedules = async () => {
    const schedulesJson = await fetch('https://lit-mountain-72961.herokuapp.com/schedules', {
      credentials: 'include'
    });
    const schedules = await schedulesJson.json();
    return schedules;
  }

  addSchedule = async (date, title, note, type, volunteer_id, family_id) => {
    const schedule = await fetch('https://lit-mountain-72961.herokuapp.com/schedules', {
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




  getFamily = async (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;

    const familyResponse= await fetch('https://lit-mountain-72961.herokuapp.com/families/' + id, {
      credentials: 'include'
    });
    const familyData = await familyResponse.json();
    console.log(id, familyData, 'this is "familyData" in getFamily in App.js')
    this.setState({
      family: familyData
    })
  }

  getPickups = async () => {
    const pickupsJson = await fetch('https://lit-mountain-72961.herokuapp.com/pickups', {
      credentials: 'include'
    });
    const pickups = await pickupsJson.json();
    return pickups;
  }


  getFamilyPickups = async (e) => {
    e.preventDefault();
    const id = e.currentTarget.id;

    // fetch returns a promise. After we "await" it, it is resolved to a Response object
    // which we are assigning to the variable response
    // -- see https://developer.mozilla.org/en-US/docs/Web/API/Response
    const response = await fetch('https://lit-mountain-72961.herokuapp.com/pickups/families/' + id, {
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



  checkInFamilyPickups = async (e) => {
    const id = e.currentTarget.id;
    const familyPickups = await fetch('https://lit-mountain-72961.herokuapp.com/pickups/families/' + id, {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify({
        checkin: true

      })
    });
    const pickupParsedAddResponse = await familyPickups.json()
    this.setState({pickups: [...this.state.pickups, pickupParsedAddResponse]})
    return pickupParsedAddResponse;
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
        page = <FamilyDisplay getFamilies={this.getfamilies} registerFamily={this.registerFamily} getFamilyPickups={this.getFamilyPickups} families={this.state.families} getFamily={this.getFamily}/>
      }else if(this.state.whichPage == "volunteer"){
        page=  <VolunteerDisplay getVolunteers={this.getVolunteers} registerVolunteer={this.registerVolunteer} volunteers={this.state.volunteers}/>
      }else {
        page = <ScheduleDisplay getSchedules={this.getSchedules} addSchedule={this.addSchedule} schedules={this.state.schedules} />
      }

    return (
     
      <div className="App">
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
          <h1 className="App-title">One helping hand in time is better than one hundred that are too late</h1>
        </header>
        <div className="first" >
          <button className="button" id="family" onClick={this.handleClick}>Family</button>
          <button className="button" id="volunteer" onClick={this.handleClick}>Volunteer</button>
          <button className="button" id="schedule" onClick={this.handleClick}>Schedule</button>
        </div>

        <div>
          {page}
        </div>

        <FamilyShowPage family={this.state.family} families={this.state.families} pickups={this.state.pickups}  getFamilyPickups={this.getFamilyPickups}/>
        
      </div>
    );
  }
}

export default App;
