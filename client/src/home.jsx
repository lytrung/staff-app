import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { App, Statusbar, View, Page, Navbar, Toolbar, NavRight } from 'framework7-react';


class Staff extends Component{
  constructor(props){
    super(props);

    // console.log('Home contructor');

  }

  // componentDidMount() {
  //   console.log('Home mounted');

  // }

  // componentWillUnmount() {
  //   console.log('Home umounted');

  // }



  deleteStaff = () => this.props.staffDataDelete(this.props.data.id);

  // editStaff = () => this.props.staffDataEdit(this.props.data.id);


  render(){
    return (
      <div className="col-md-4">
        <div className="card-2">
          <div className="image">
            <img src="img/card/img-01.jpg"/>
          </div>
          <div className="card-block">
            <h3 className="card-title">{this.props.data.name}</h3>
            <div className="meta">
              <a>{this.props.data.role}</a>
            </div>
            <div className="description">
              {this.props.data.description}
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


            { this.props.login ? (
              <span className="" onClick={this.deleteStaff}>
              Delete
              </span>
            ) : null }

            { this.props.login ? (
              <span className="">
                <Link to={'/edit-staff/'+this.props.data.id+'/edit'} className="external">Edit</Link>
              </span>
            ) : null }

          </div>
        </div>
      </div>

    );
  }
}


export default class HomePage extends Component{
  constructor(props){
    console.log('Home Page contructor');

    super(props);
    this.state = {greeting : props.greeting,count : props.count};
  }

  logout = (e) => this.props.loginHandle(false);

  render(){

   return (
     <Page name="home">
        
       <Navbar title="Home Page">
         <NavRight>
           <Link to="/add-staff" className="button external">Add staff</Link>
           
           { (this.props.login == false) ? <Link to="/login" className="button external">Login</Link> : <Link onClick={this.logout} to="/" className="button">Logout</Link> }
       </NavRight>
       </Navbar>
     <div className="wrapper">
         <div id="content">
           <div className="container">
             <div className="sub-title">
               <span onClick={this.updateGreeting1}>Our Staff</span>
             </div>

             <div className="row">
                 {this.props.staffData.map(data =>
                   <Staff login={this.props.login} key={data.id} data={data} greeting={this.state.greeting} staffDataDelete={this.props.staffDataDelete} staffDataEdit={this.props.staffDataEdit}/>
                 )}
             </div>

           </div>
         </div>
     </div>
     </Page>
   );
  }
}

