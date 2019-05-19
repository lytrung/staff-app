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


// Init plugin
Framework7.use(Framework7React);

const DataContext = React.createContext({say:'hi'});

class MyApp extends Component {
  
  constructor(props){
    super(props);
    this.state = {staffData:[],greeting:'hi From outside'};
    this.staffDataAdd = this.staffDataAdd.bind(this);
  }

  componentDidMount() {
    console.log('app mount')
    this.staffDataFetch();
  }

  staffDataAdd(staff){
    // staffData.push(staff);

    axios.post("http://localhost:3001/api/staffs", staff)
        .then(()=>this.staffDataFetch());

    this.setState({greeting:'Hello When staff added'},()=>{
      console.log(this.state.greeting);
 
    });

  }


  staffDataFetch(){
    axios.get("http://localhost:3001/api/staffs")
          .then(res => {

            // var staffData = this.state.staffData;

           // while(staffData.length > 0) {
           //      staffData.pop();
           //  }

           //  for(var i=0;i<res.data.staffs.length;i++){
           //    staffData.push(res.data.staffs[i]);
           //  }

            this.setState({staffData:res.data.staffs})
            console.log(this);
            this.forceUpdate();
          })
          // .then(()=>console.log(this.state.staffData));
  }


  render() {
    console.log('App render');
    var f7params = {
      name: 'My App',
      id: 'com.myapp.test',

      // specify routes for app
      // routes: [
      //   {
      //     path: '/',
      //     component: HomePage,
      //     options: {
      //       props: {
      //         staffData: this.state.staffData,
      //         greeting:this.state.greeting

      //       },
      //     },
      //   },
      //   {
      //     path: '/add-staff/',
      //     component: AddStaffPage,
      //     options: {
      //       props: {
      //         staffDataAdd: this.staffDataAdd,
      //       },
      //     },
      //   },
      //   {
      //     path: '/login/',
      //     component: LoginPage,
      //   },
      // ],
    };

    var routes = [
        {
          path: '/',
          component: HomePage,
          options: {
            props: {
              staffData: this.state.staffData,
              greeting:this.state.greeting

            },
          },
        },
        {
          path: '/add-staff/',
          component: AddStaffPage,
          options: {
            props: {
              staffDataAdd: this.staffDataAdd,
            },
          },
        },
        {
          path: '/login/',
          component: LoginPage,
        },
      ];
    console.log(f7params);
    return (

      <App params={f7params} timestamp={Date.now()} routes={routes}>
        {/* Current View/Router, initial page will be loaded from home.jsx component */}
        <View main url="/" />
      </App>
    );
  }
}


export default MyApp;
