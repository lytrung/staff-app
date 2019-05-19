import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// Import Framework7 Core
import Framework7 from 'framework7';
import Framework7React from 'framework7-react';
import { App, Statusbar, View, Page, Navbar, Toolbar, Link } from 'framework7-react';
import axios from 'axios';

import HomePage from './home.jsx';
import AddStaffPage from './add-staff.jsx';
import LoginPage from './login.jsx';

var staffData = [
                    {
                      id:1,
                      name:"Peter Smith",
                      role:"CEO",
                      photo:"img-01.jpg",
                      description: "This command will update all the packages listed to the latest version"
                    },
                    {
                      id:2,
                      name:"Mary Jones",
                      role:"Designer",
                      photo:"img-02.jpg",
                      description: "It will also install missing packages. As with all commands that install packages"
                    },
                    {
                      id:3,
                      name:"Paul Roberts",
                      photo:"img-03.jpg",
                      role:"Marketing Strategist",
                      description: "If the -g flag is specified, this command will update globally installed packages."
                    },
                    {
                      id:4,
                      name:"Kevin White",
                      photo:"img-04.jpg",
                      role:"Coder",
                      description: "The tool will show you a list of all the published and available versions of npm."
                    },
                     {
                      id:5,
                      name:"Kevin White",
                      photo:"img-05.jpg",
                      role:"Coder",
                      description: "The tool will show you a list of all the published and available versions of npm."
                    },
                     {
                      id:6,
                      name:"Kevin White",
                      photo:"img-06.jpg",
                      role:"Coder",
                      description: "The tool will show you a list of all the published and available versions of npm."
                    }
                  ];

var staffDataAdd = function(staff){
  staffData.push(staff);
};

var staffDataFetch = function(){
    axios.get("http://localhost:3001/api/staffs")
          // .then(res => console.log(res.data.staffs))
          .then((res)=>{
              console.log("hi");

              while(staffData.length > 0) {
                  staffData.pop();
              }

              for(var i=0;i<res.data.staffs.length;i++){
                staffData.push(res.data.staffs[i]);
              }
       
              console.log(staffData);
  
          });


}
// Init plugin
Framework7.use(Framework7React);

const f7params = {
  name: 'My App',
  id: 'com.myapp.test',
  // specify routes for app
  routes: [
    {
      path: '/',
      component: HomePage,
      options: {
        props: {
          staffData: staffData,

        },
      },
    },
    {
      path: '/add-staff/',
      component: AddStaffPage,
      options: {
        props: {
          staffDataAdd: staffDataAdd,
        },
      },
    },
    {
      path: '/login/',
      component: LoginPage,
    },
  ],
};

const DataContext = React.createContext({say:'hi'});

class MyApp extends Component {
  
  constructor(props){
    super(props);
    this.state = {name:'bla'};

    staffDataFetch();

  }
  render() {
    return (

      <App params={f7params}>
        {/* Current View/Router, initial page will be loaded from home.jsx component */}
        <View main url="/" />
      </App>
    );
  }
}




export default MyApp;
