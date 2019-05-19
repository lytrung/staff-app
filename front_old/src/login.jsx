import React, { Component }  from 'react';

import { App, Statusbar, View, Page, Navbar, Toolbar, Link , NavRight} from 'framework7-react';

// login.jsx
export default () => (
  <Page name="login">
    <Navbar title="Login">
	    <NavRight>
		    <Link icon="icon-bars" panelOpen="right" href="/" className="button">Home</Link>
		</NavRight>
    </Navbar>
    {/* Page content */}
 
  
  </Page>
)

