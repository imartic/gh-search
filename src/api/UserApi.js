import axios from 'axios';

/********
Get users
********/
export function getUser(user) {
  let profile = {};

  return Promise.all([
    axios.get('https://api.github.com/users/' + user),
    axios.get('https://api.github.com/users/' + user + '/repos')
    ])
    .catch(error => {
      console.log("userApi: getUser: Error - ", error)
      if (error.response && (error.response.status === 404)) {
        alert("No matching user!");
      }
      else{
        alert("Error on fetching data from GitHub!");
      }
      return error;
    })
    .then(response => {
      profile.profile = response[0].data;
      profile.repos = response[1].data;
      return profile;
    }
  );
}