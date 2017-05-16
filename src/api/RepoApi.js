import axios from 'axios';

/**
 * Get repos
 */

export function getRepos(query) {
  let repo = {};

  return axios.get('https://api.github.com/search/repositories?q=' + query + '&per_page=99')
  .catch(error => {
    console.log("repoApi: getRepo: Error - ", error)
    if (error.response && (error.response.status === 404)) {
      alert("No matching repos!");
    }
    else{
      alert("Error on fetching data from GitHub!");
    }
    return error;
  })
  .then(response => {
    repo = response.data.items;
    if(repo.length < 1){
      alert("No matching repos!");
    }
    return repo;
  });
}