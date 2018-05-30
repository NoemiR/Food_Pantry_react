import React, { Component } from 'react';
import Logo from './Logo.png';
import './App.css';
import AdminLoginRegister from './AdminLoginRegister'
import FamilyRegistration from './FamilyRegistration'
import VolunteerRegistration from './VolunteerRegistration'
import ScheduleList from './ScheduleList'
import PickupList from './PickupList'
import CreateSchedule from './CreateSchedule'






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


    this.getAdmins()
    .then((admins) => {
      console.log(admins, "this is the componentDidMount of getAdmins")
      this.setState({admins: admins})
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







  getAdmins = async () => {
    const adminsJson = await fetch('http://localhost:9292/admin', {
      credentials: 'include'
    });
    const admins = await adminsJson.json();
    return admins;
  }

  registerAdmin = async (username, password) => {
    const adminRegisterPromise = await fetch('http://localhost:9292/admin/register', {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify({
        username: username,
        password: password
      })
    })

    const parsedAdminRegisterResponse = await adminRegisterPromise.json()
    
    if(parsedAdminRegisterResponse.success) {
      this.setState({
        loggedIn: true
      })
      this.getAdmins()
      .then((admins) => {
        this.setState({admins: admins})
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }

  loginAdmin = async (username, password) => {
    const adminLoginPromise = await fetch('http://localhost:9292/admin/login', {
      method: 'POST',
      credentials:'include',
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const parsedLoginResponse = await adminLoginPromise.json()
      if(parsedLoginResponse.success) {
        this.setState({loggedIn: true})
        this.getAdmins()
        .then((admins) => {
          this.setState({admins: admins})
        })
        .catch((err) => {
          console.log(err)
        })
      } else {
        this.setState({loginErr: parsedLoginResponse.message
        })
      }
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
      this.setState({schedule: [...this.state.schedules, scheduleParsedAddResponse]})
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
        <AdminLoginRegister registerAdmin={this.registerAdmin} loginAdmin={this.loginAdmin}/>

        <ScheduleList getSchedules={this.getSchedules} schedules={this.state.schedules}/>
        <PickupList getPickups={this.getPickups} pickups={this.state.pickups}/>
        <CreateSchedule addSchedule={this.addSchedule} schedules={this.state.schedules}/>
      </div>
    );
  }
}

export default App;
