import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { App, Statusbar, View, Page, Navbar, Toolbar , NavRight} from 'framework7-react';

// login.jsx
export default () => (
  <Page name="login">
    <Navbar title="Login">
	    <NavRight>
		    <Link icon="icon-bars" to="/" className="button external">Home</Link>
		</NavRight>
    </Navbar>
    {/* Page content */}
 
  
  </Page>
)

