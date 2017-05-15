import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  return (
    <div className="App">
        <ul className="navbar">
            <li><Link to="/" activeClassName="active">Search GitHub</Link></li>
            <li><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
        <main className="content">
            {props.children}
        </main>
    </div>
  );
}