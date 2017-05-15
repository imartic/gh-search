import React from 'react';
import { NavLink } from 'react-router-dom'

export default function(props) {
  return (
    <div className="App">
        <ul className="navbar">
            <li><NavLink exact to="/" activeClassName="active">Search GitHub</NavLink></li>
            <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        </ul>
        <main>
            {props.children}
        </main>
    </div>
  );
}