import React, { Component } from 'react';
import {NavLink } from 'react-router-dom';

class Welcome extends Component {
render() {
    return (
        <div>
          <h1>Georgia State University - Paws</h1>
          <b>
            <NavLink to="/login" className="btn btn-primary">Sign In</NavLink>
            <span> to PAWS application</span> 
        </b>
        <br />
        <b>
        <span>Director: </span> 
            <NavLink to="/applications" >Fetch Applicants</NavLink>
            <br />
            <NavLink to="/statistics" >University Stats</NavLink>
        </b>
        </div>
    );
}
}
export default Welcome;