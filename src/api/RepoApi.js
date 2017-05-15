import axios from 'axios';

/**
 * Get repos
 */

export function getRepos() {
  return axios.get('')
    .then(response => response.data);
}