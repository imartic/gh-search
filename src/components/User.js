import React from 'react';

export default function(props) {
  return (
    <div className="search">
      <div className="search-header">
        <a href={props.html_url} className="url-link">
            <h2>{props.name}</h2>
            <p>{props.login}</p>
        </a>
      </div>
      <div className="search-result">
        <ul>
            {props.repos.map((repo) => {
                return (
                    <li key={repo.id}>{repo.name}</li>
                )
            })}
        </ul>
      </div>
    </div>
  );
}