import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// Import Framework7 Core
import Framework7 from 'framework7';
import Framework7React from 'framework7-react';
import { App, Statusbar, View, Page, Navbar, Toolbar, Link } from 'framework7-react';

import HomePage from './home.jsx';
import AddStaffPage from './add-staff.jsx';
import LoginPage from './login.jsx';

const staffData = [
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



// const staffData = [
//                     {
//                       id:1,
//                       name:"Peter Smith",
//                       role:"CEO",
//                       photo:"img-01.jpg",
//                       description: "This command will update all the packages listed to the latest version"
//                     },
//                     {
//                       id:2,
//                       name:"Mary Jones",
//                       role:"Designer",
//                       photo:"img-02.jpg",
//                       description: "It will also install missing packages. As with all commands that install packages"
//                     },
//                     {
//                       id:3,
//                       name:"Paul Roberts",
//                       photo:"img-03.jpg",
//                       role:"Marketing Strategist",
//                       description: "If the -g flag is specified, this command will update globally installed packages."
//                     },
//                     {
//                       id:4,
//                       name:"Kevin White",
//                       photo:"img-04.jpg",
//                       role:"Coder",
//                       description: "The tool will show you a list of all the published and available versions of npm."
//                     },
//                      {
//                       id:5,
//                       name:"Kevin White",
//                       photo:"img-05.jpg",
//                       role:"Coder",
//                       description: "The tool will show you a list of all the published and available versions of npm."
//                     },
//                      {
//                       id:6,
//                       name:"Kevin White",
//                       photo:"img-06.jpg",
//                       role:"Coder",
//                       description: "The tool will show you a list of all the published and available versions of npm."
//                     }
//                   ];

// class Staff extends Component{
//   constructor(props){
//     super(props);
//     this.state = props.data;
//   }
//   render(){
//     return (
//       <div className="col-md-4">
//         <div className="card-2">
//           <div className="image">
//             <img src={'img/card/'+this.state.photo}/>
//           </div>
//           <div className="card-block">
//             <h3 className="card-title">{this.state.name}</h3>
//             <div className="meta">
//               <a>{this.state.role}</a>
//             </div>
//             <div className="description">
//               {this.state.description}
//             </div>
//           </div>
//           <div className="extra">
//             <span className="right">
//               Joined in 2017
//             </span>
//             <span>
//               <i className="fa fa-user"></i>
//               75 Friends
//             </span>
//           </div>
//         </div>
//       </div>

//     );
//   }
// }

// class App extends Component {

//   render() {

//     var staffList = staffData.map(data =>
//       <Staff key={data.id} data={data}/>
//     );


//     return (
//       <div className="wrapper">

//         <div id="content">
//           <div className="container">
//             <div className="sub-title">
//               <span>Our Staff</span>
//             </div>

//             <div className="row">
//               {staffList}
//             </div>

//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default MyApp;
