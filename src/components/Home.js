import React from 'react';
import logo from '../logo.svg';

const Home = () => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>GitHub Search</h2>
        </div>
        <p className="App-intro">
          Search for GitHub
          <select>
            <option value="users">Users</option>
            <option value="repos">Repos</option>
          </select>
        </p>

        <div>
            <input type="text" placeholder="Enter search terms..."></input>
            <button id="btnSearch">Search</button>
        </div>
      </div>
    );
}

export default Home;