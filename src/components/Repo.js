import React from 'react';

export default function(props) {
  return (
    <div className="search">
      <div className="repo-count">
        {props.repos.length > 98 ? (
          <p>Found {props.repos.length} or more matching repos.<br/>Only top 99 will be listed.</p>
        ) : (
          <p>Found {props.repos.length} matching repos</p>
        )}
      </div>
      <hr/>
      <div className="search-content">
        <ul className="repo-list">
          {props.repos.map((repo) => {
            return (
              <li key={repo.id}>
                <a href={repo.html_url}>{repo.full_name}</a>
                <small>&nbsp;(&#9733;{repo.stargazers_count})</small>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}