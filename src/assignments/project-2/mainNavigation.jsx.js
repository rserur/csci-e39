import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const mainNavigation = () => (
  <Router>
    <nav>
      <ul>
      <li>
          <Link to="/memberlist">Member List</Link>
        </li>
        <li>
          <Link to="/channellist">Channel List</Link>
        </li>
      </ul>
      <Route path="/memberlist" component={memberList} />
      <Route path="/channellist" component={channelList} />
    </nav>
  </Router>
);

const memberList = () => (
  <div className = "member-list">
    <h2>View Member List</h2>
  </div>
);

const channelList = () => (
	<div className = "channel-list">
	    <ul>
	      <li>Pets</li>
		  <li>Movies</li>
		  <li>Food</li>
	      <li>Music</li>
	    </ul>
   </div>
);



export default mainNavigation

