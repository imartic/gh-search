import React from 'react';
import logo from '../logo.svg';
import * as userApi from '../api/UserApi';
import * as repoApi from '../api/RepoApi';
import SearchLayout from './layouts/SearchLayout';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: '',
            name: '',
            html_url: '',
            repos: []
        }
    }

    search() {
        let query = this.refs.query.value;

        if (this.refs.searchType.value === 'users') {
            let profile = Object.assign({}, this.state);
            userApi.getUser(query).then(result => {
                profile = result.profile;
                console.log(profile);
                this.setState({login: profile.login});
                this.setState({name: profile.name});
                this.setState({html_url: profile.html_url});
                /*this.setState({repos: result.repos});
                console.log(this.state.repos);*/
            });
        } else if (this.refs.searchType.value === 'repos') {
            repoApi.getRepos(query);
        }
    }

    render() {
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

                <SearchLayout {...this.state} />
            </div>
        );
    }
    
};

export default Home;