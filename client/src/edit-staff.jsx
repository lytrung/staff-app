import Framework7 from 'framework7';
import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { App, Statusbar, View, Page, Navbar, Toolbar, Button, NavRight } from 'framework7-react';
import axios from 'axios';

class EditStaffForm extends Component{
	constructor(props){
    	super(props);
    	// this.state = {staffData:{}};

	}

	// staffDataFetch(id){
	//     axios.get("http://localhost:3001/api/staffs/"+id)
	//           .then(res => {
	//             this.setState({staffData:res.data.staff});
	 
	//           })
 //  	}

	// componentDidMount() {
	//   const { match: { params } } = this.props;
	//   this.staffDataFetch(params.userId);

	// }


	updateStaff = (e) => {
	
		e.preventDefault();
		var formData = new FormData(this.form);

		var staff = {
                      id:this.props.staffData.id,
                      name:formData.get('name'),
                      role:formData.get('role'),
                      photo:"img-01.jpg",
                      description: formData.get('description'),
                    };
		this.props.staffDataUpdate(staff);
		this.props.history.push('/');
	}
	render(){
		return (
			<form className="list" id="my-form" onSubmit={this.updateStaff} ref={e => this.form = e}>
				<div className="item-content item-input">
			        <div className="item-inner">
			          	<div className="item-title item-label">Name</div>
			          	<div className="item-input-wrap">
			            	<input type="text" name="name" placeholder="Your name" defaultValue={this.props.staffData.name}/>
			          	</div>
			        </div>
			    </div>
			   	<div className="item-content item-input">
			       	<div className="item-inner">
			          	<div className="item-title item-label">Role</div>
			          	<div className="item-input-wrap">
			            	<input type="text" name="role" placeholder="Your role" defaultValue={this.props.staffData.role}/>
			          	</div>
			        </div>
			    </div>
			   	<div className="item-content item-input">
			        <div className="item-inner">
			          	<div className="item-title item-label">Description</div>
			          	<div className="item-input-wrap">
			            	<input type="text" name="description" placeholder="Your description" defaultValue={this.props.staffData.description}/>
			          	</div>
			        </div>
			    </div>
			   	<div className="item-content item-input">
			        <div className="item-inner">
			          	<Button fill type="submit">Update</Button>
			        </div>
			    </div>
			    
			</form>

		);
	}
}
// about.jsx
export default class EditStaffPage extends Component{

	constructor(props){
    	super(props);
    	this.state = {staffData:{}};

	}

	staffDataFetch(id){
	    axios.get("http://localhost:3001/api/staffs/"+id)
	          .then(res => {
	            this.setState({staffData:res.data.staff});
	 
	          })
  	}

	componentDidMount() {
	  const { match: { params } } = this.props;
	  this.staffDataFetch(params.id);

	}

	render(){
		return (
		  <Page name="about">
		        <Navbar title="Edit Staff">
			    <NavRight>
				    <Link icon="icon-bars" to="/" className="button external">Home</Link>
				</NavRight>
		    </Navbar>
		    <EditStaffForm staffDataUpdate={this.props.staffDataUpdate} staffData={this.state.staffData} history={this.props.history}/>
		  </Page>
		)
	}
}