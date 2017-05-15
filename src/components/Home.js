import React from 'react';
import logo from '../logo.svg';
import * as userApi from '../api/UserApi';
import * as repoApi from '../api/RepoApi';
import User from './User';
import Repo from './Repo';

const initialState = {
    login: '',
    name: '',
    html_url: '',
    repos: []
}

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    resetStates () {
        return this.setState(initialState);
    }

    search() {
        let query = this.refs.query.value;

        if (this.refs.searchType.value === 'users') {
            let profile = Object.assign({}, this.state);
            userApi.getUser(query).then(result => {
                profile = result.profile;
                console.log(profile);
                this.setState({
                    login: profile.login,
                    name: profile.name,
                    html_url: profile.html_url
                    //repos: result.repos
                });
            }).catch(error => {
                this.resetStates();
                this.refs.query.value = '';
            });
        } else if (this.refs.searchType.value === 'repos') {
            repoApi.getRepos(query);
        }
    }

    render() {
        const isUser = (this.state.login.value !== '');

        let searchResult = null;
        if (isUser) {
            searchResult = <User {...this.state} />;
        } else {
            searchResult = <Repo {...this.state.repo} />;
        }

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>GitHub Search</h2>
                </div>
                <p className="App-intro">
                    Search for GitHub
                    <select ref="searchType">
                        <option value="users">Users</option>
                        <option value="repos">Repos</option>
                    </select>
                </p>

                <div>
                    <input ref="query" type="text" placeholder="Enter search terms..."></input>
                    <button onClick={this.search.bind(this)}>Search</button>
                </div>
                
                {/*for test - remove*/}
                <p>Login: {this.state.login}</p>

                {searchResult}
            </div>
        );
    }
    
};

export default Home;