import React from 'react';
import logo from '../logo.svg';

const About = () => (
    <div className="content">
        <p className="App-intro">
            GitHub Search is a small web app for searching GitHub users and repos.
        </p>
        <br/><br/>
        <img src={logo} className="App-logo" alt="logo" />
        <h5>Built with React</h5>
    </div>
)

export default About