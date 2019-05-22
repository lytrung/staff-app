import Framework7 from 'framework7';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { App, Statusbar, View, Page, Navbar, Toolbar, Button, NavRight } from 'framework7-react';


class AddStaffForm extends Component{
	constructor(props){
    	super(props);
    	this.state = props.data;

	}
	addStaff = (e) => {
	
		e.preventDefault();
		var formData = new FormData(this.form);

		var staff = {
                      id:Date.now(),
                      name:formData.get('name'),
                      role:formData.get('role'),
                      photo:"img-01.jpg",
                      description: formData.get('description'),
                    };
		this.props.staffDataAdd(staff);
		this.props.history.push('/');
	}
	render(){
		return (
			<form className="list" id="my-form" onSubmit={this.addStaff} ref={e => this.form = e}>
				<div className="item-content item-input">
			        <div className="item-inner">
			          	<div className="item-title item-label">Name</div>
			          	<div className="item-input-wrap">
			            	<input type="text" name="name" placeholder="Your name"/>
			          	</div>
			        </div>
			    </div>
			   	<div className="item-content item-input">
			       	<div className="item-inner">
			          	<div className="item-title item-label">Role</div>
			          	<div className="item-input-wrap">
			            	<input type="text" name="role" placeholder="Your role"/>
			          	</div>
			        </div>
			    </div>
			   	<div className="item-content item-input">
			        <div className="item-inner">
			          	<div className="item-title item-label">Description</div>
			          	<div className="item-input-wrap">
			            	<input type="text" name="description" placeholder="Your description"/>
			          	</div>
			        </div>
			    </div>
			   	<div className="item-content item-input">
			        <div className="item-inner">
			          	<Button fill type="submit">Add</Button>
			        </div>
			    </div>
			    
			</form>

		);
	}
}
// about.jsx
export default (props) =>{
	console.log(props);
	return (
	  <Page name="about">
	        <Navbar title="Add Staff">
		    <NavRight>
			    <Link icon="icon-bars" to="/" className="button external">Home</Link>
			</NavRight>
	    </Navbar>
	    <AddStaffForm staffDataAdd={props.staffDataAdd} history={props.history}/>
	  </Page>
	)
}