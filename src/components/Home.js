import React from 'react';
import logo from '../logo.svg';
import * as userApi from '../api/UserApi';
import * as repoApi from '../api/RepoApi';
import User from './User';
import Repo from './Repo';

class Home extends React.Component {
    initialState = {
        login: '',
        name: '',
        img_url: '',
        html_url: '',
        repos: [],
        repoList: []
    }

    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    // set states to initial state
    resetStates () {
        return this.setState(this.initialState);
    }

    // start search on enter key pressed
    handleKeyPress(target) {
        if(target.charCode === 13){
            this.search();    
        }
    }

    // calling userApi to search for a user
    searchUser(query) {
        let profile = {};  

        userApi.getUser(query).then(result => {
            this.resetStates();
            profile = result.profile;          
            this.setState({
                login: profile.login,
                name: profile.name,
                img_url: profile.avatar_url /*+ '&s=100'*/,
                html_url: profile.html_url,
                repos: result.repos
            });
        }).catch(error => {
            this.refs.query.value = '';
        });
    }

    // calling repoApi to search for a repo
    searchRepo(query) {
        repoApi.getRepos(query).then(result => {
            this.resetStates();
            this.setState({
                repoList: result
            });
        }).catch(error => {
            this.refs.query.value = '';
        });       
    }

    // check if searching for user or repo
    search() {
        let query = this.refs.query.value;

        if (this.refs.searchType.value === 'users') {
            this.searchUser(query);
        } else if (this.refs.searchType.value === 'repos') {
            this.searchRepo(query);
        }
    }

    render() {
        // if searchtype is users then show user comp, else show repo comp
        let searchResult = null;
        if (this.state.login !== '') 
            searchResult = <User {...this.state} />;
        else if(this.state.repoList.length > 0) 
            searchResult = <Repo repos={this.state.repoList} />;
        //----------------------------------------------------------------

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
                    <input autoFocus ref="query" type="text" 
                        placeholder="Enter search term..."
                        onKeyPress={this.handleKeyPress.bind(this)}>
                    </input>
                    <button onClick={this.search.bind(this)}>Search</button>
                </div>
                
                {/*for test - remove later*/}
                {/*<p>Login: {this.state.login}</p>*/}
                
                {searchResult}
            </div>
        );
    }
    
};

export default Home;