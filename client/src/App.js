import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
// Import Framework7 Core
import Framework7 from 'framework7';
import Framework7React from 'framework7-react';
import { App, Statusbar, View, Page, Navbar, Toolbar } from 'framework7-react';
import axios from 'axios';


import HomePage from './home.jsx';
import AddStaffPage from './add-staff.jsx';
import EditStaffPage from './edit-staff.jsx';
import LoginPage from './login.jsx';


// Init plugin
Framework7.use(Framework7React);

const DataContext = React.createContext({say:'hi'});

class MyApp extends Component {
  
  constructor(props){
    super(props);

    console.log(localStorage);
    var isLogin = localStorage.getItem('login');
    isLogin = (isLogin=='true') ? true : false;

    this.state = {staffData:[], login:isLogin};
    this.staffDataAdd = this.staffDataAdd.bind(this);
  }

  componentDidMount() {
    console.log('app mount')
    this.staffDataFetch();
  }

  login = (isLogin) =>{
    this.setState({login:isLogin});

    localStorage.setItem('login', isLogin);

  }




  staffDataAdd(staff){
    axios.post("http://localhost:3001/api/staffs", staff)
        .then(()=>this.staffDataFetch());

    this.setState({greeting:'Hello When staff added'},()=>{
      console.log(this.state.greeting);
 
    });

  }

  staffDataUpdate = (staff) =>{

    axios.put("http://localhost:3001/api/staffs/"+staff.id, staff)
        .then(()=>this.staffDataFetch());


  }


  staffDataDelete = (id) =>{

    axios.delete("http://localhost:3001/api/staffs/"+id)
        .then(()=>this.staffDataFetch());

  }


  staffDataFetch(){
    console.log('fetch data');
    axios.get("http://localhost:3001/api/staffs")
          .then(res => {

            console.log(res.data.staffs);
            this.setState({staffData:res.data.staffs});
            this.setState({greeting:"bla bla"})
          })
  }


  render() {
    
    return (

      <App>
        <View id="tab-1" main tab tabActive>
          <Router>
              <Route exact path="/"
                render={props => <HomePage loginHandle={this.login} login={this.state.login} {...props} staffDataDelete={this.staffDataDelete} staffDataEdit={this.staffDataEdit} staffData={this.state.staffData} greeting={this.state.greeting} count={this.state.count} />}
              />
              <Route path="/add-staff" 
                render={props => <AddStaffPage {...props} staffDataAdd={this.staffDataAdd} />}
              />

              <Route path="/edit-staff/:id/edit" 
                render={props => <EditStaffPage {...props} staffDataUpdate={this.staffDataUpdate}/>}
              />
              <Route path="/login"  render={props => <LoginPage {...props} login={this.login}/>} />
          </Router>
        </View>
      </App>
    );
  }
}


export default MyApp;
