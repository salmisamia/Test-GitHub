import React from "react";
import { useHistory } from "react-router-dom";
import "./DetailsProfile.css";

// Reanme Component RepositoryList
// Rename data props ==> userInformations

const DetailsProfile = ({
  data = {},
  repositories = [],
  setRespositoryDetails
}) => {
  let history = useHistory();

  const handleClick = (repo) => {
    setRespositoryDetails(repo);
    history.push(`/repositories/${repo.name}`);
  };
  return (
    <div className="respository-list">
      <div className="avatar-list">
        {data.avatar_url && (
          <img
            className="img-carree img-clip-path"
            src={data.avatar_url}
            alt={data.login}
          />
        )}
        <span className="title-avatar ">{data.login}</span>
      </div>
      {repositories.map((repo) => (
        <div
          className="ui relaxed divided list"
          key={repo.id}
          onClick={() => handleClick(repo)}
        >
          <div className="item">
            <div className="content">{repo.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailsProfile;
