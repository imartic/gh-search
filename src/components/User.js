import React from 'react';

export default function(props) {
  return (
    <div className="search">
      <div className="search-header">
        <a href={props.html_url} className="url-link">
          <img src={props.img_url} alt="GitHub profile pic"></img>
          <h2>{props.name}</h2>
          <p>{props.login}</p>
        </a>
      </div>
      <hr />
      <div className="search-result">
        <div className="repo-count">
          {props.login} has {props.repos.length} public repositories.
        </div>
        <ul className="repo-list">
          {props.repos.map((repo) => {
            return (
              <li key={repo.id}><a href={repo.html_url}>{repo.name}</a></li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}