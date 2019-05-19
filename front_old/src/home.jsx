import React, { Component }  from 'react';

import { App, Statusbar, View, Page, Navbar, Toolbar, Link, NavRight } from 'framework7-react';


class Staff extends Component{
  constructor(props){
    super(props);
    this.state = props.data;
    this.state.greeting = props.greeting;
  }

  // static getDerivedStateFromProps(nextProps, prevState){

  //   console.log(nextProps);
  //   //  if(nextProps.someValue!==prevState.someValue){
  //   //    return { someState: nextProps.someValue};
  //   // }
  //   // else return null;
  //   return null;
  // }

  componentWillReceiveProps(props) {
    // const { refresh, id } = this.props;
    // if (props.refresh !== refresh) {
    //   this.fetchShoes(id)
    //     .then(this.refreshShoeList)
    // }
    // console.log(props);
    this.setState({greeting:props.greeting});
  }
  updateGreeting = () => this.setState({greeting:'hello'});
  render(){
    return (
      <div className="col-md-4">
        <div className="card-2">
          <div className="image">
            <img src="img/card/img-01.jpg"/>
          </div>
          <div className="card-block">
            <h3 className="card-title">{this.state.greeting} - {this.state.name}</h3>
            <div className="meta">
              <a>{this.state.role}</a>
            </div>
            <div className="description">
              {this.state.description}
            </div>
          </div>
          <div className="extra">
            <span className="right">
              Joined in 2017
            </span>
            <span>
              <i className="fa fa-user" onClick={this.updateGreeting}></i>
              75 Friends
            </span>
          </div>
        </div>
      </div>

    );
  }
}

// var greeting = 'Hii'
// var updateGreeting1 = function(e){ greeting = 'Bla bla'; console.log(e)};


export default class HomePage extends Component{
  constructor(props){
    super(props);
    this.state = {staffData:props.staffData,greeting:props.greeting};
  }
  updateGreeting1 = (e) => { this.setState({greeting : 'Bla bla'}); this.forceUpdate();console.log(e)};
  
  componentWillReceiveProps(props) {
    // const { refresh, id } = this.props;
    // if (props.refresh !== refresh) {
    //   this.fetchShoes(id)
    //     .then(this.refreshShoeList)
    // }
    console.log("Home page props change");
    console.log(props);
    this.setState({greeting:props.greeting});
  }
  render(){
    console.log("Home page render");
    console.log(this.props);
   // var staffList = this.props.staffData.map(data =>
   //   <Staff key={data.id} data={data} greeting={this.state.greeting}/>
   // );
  

   return (
     <Page name="home">
        
       <Navbar title="Home Page">
         <NavRight>
           <Link panelOpen="right" href="/add-staff/" className="button">Add staff</Link>
           <Link panelOpen="right" href="/login/" className="button">Login</Link>
       </NavRight>
       </Navbar>
     <div className="wrapper">
         <div id="content">
           <div className="container">
             <div className="sub-title">
               <span onClick={this.updateGreeting1}> Our Staff - {this.state.greeting}</span>
             </div>

             <div className="row">
                 {this.state.staffData.map(data =>
                   <Staff key={data.id} data={data} greeting={this.state.greeting}/>
                 )}
             </div>

           </div>
         </div>
     </div>
     </Page>
   );
  }
}

// home.jsx
// export default (props) => {
//   console.log(props);
//   console.log(this);

// 	var staffList = props.staffData.map(data =>
// 	  <Staff key={data.id} data={data} greeting={greeting}/>
// 	);

// 	return (
// 	  <Page name="home">
	  	
// 	    <Navbar title="Home Page">
// 		    <NavRight>
// 			    <Link panelOpen="right" href="/add-staff/" className="button">Add staff</Link>
// 			    <Link panelOpen="right" href="/login/" className="button">Login</Link>
// 			</NavRight>
// 	    </Navbar>
// 		<div className="wrapper">
// 		    <div id="content">
// 		      <div className="container">
// 		        <div className="sub-title">
// 		          <span onClick={updateGreeting1.bind(this)}> Our Staff - {props.greeting}</span>
// 		        </div>

// 		        <div className="row">
// 		          	{staffList}
// 		        </div>

// 		      </div>
// 		    </div>
// 		</div>
// 	  </Page>
// 	);
// }