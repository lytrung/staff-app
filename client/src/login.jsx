import Framework7 from 'framework7';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { App, Statusbar, View, Page, Navbar, Toolbar, Button, NavRight } from 'framework7-react';

class LoginForm extends Component{
	constructor(props){
		console.log('Login contructor');
    	super(props);
    	this.state = {message:''};

	}
	authenticate = (e) => {
	
		e.preventDefault();
		var formData = new FormData(this.form);

		if(formData.get('username')!= 'admin' || formData.get('password')!='password'){
			this.setState({message:'Wrong details. Please try again'});
		}else{
			this.setState({message:''});
			this.props.login(true);
			this.props.history.push('/');

		}

		// var staff = {
  //                     id:Date.now(),
  //                     name:formData.get('name'),
  //                     role:formData.get('role'),
  //                     photo:"img-01.jpg",
  //                     description: formData.get('description'),
  //                   };
		// this.props.staffDataAdd(staff);
		
	}
	render(){
		return (
			<form className="list" id="my-form" onSubmit={this.authenticate} ref={e => this.form = e}>
				<div className="item-content item-input">
			        <div className="item-inner">
			          	<div className="item-title item-label">Username</div>
			          	<div className="item-input-wrap">
			            	<input type="text" name="username" placeholder="Your username"/>
			          	</div>
			        </div>
			    </div>
			   	<div className="item-content item-input">
			       	<div className="item-inner">
			          	<div className="item-title item-label">Password</div>
			          	<div className="item-input-wrap">
			            	<input type="password" name="password" placeholder="Your password"/>
			          	</div>
			        </div>
			    </div>
			   
			   	<div className="item-content item-input">
			        <div className="item-inner">
			          	<Button fill type="submit">Login</Button>
			        </div>
			    </div>
			    <p className="message">{this.state.message}</p>
			</form>

		);
	}
}
// about.jsx
export default (props) =>{
	console.log(props);
	return (
	  <Page name="login">
	        <Navbar title="Login">
		    <NavRight>
			    <Link icon="icon-bars" to="/" className="button external">Home</Link>
			</NavRight>
	    </Navbar>
	    <LoginForm login={props.login} history={props.history}/>
	  </Page>
	)
}