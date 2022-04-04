import React from "react";
import "./DetailsRepos.css";

const DetailsRepos = ({ respositoryDetails, data }) => {
  return (
    
    <div className="repo-details-contenair">
      <div className="details-row">
        <div className="userName">
          <p>
            <b>{data.login}</b>
          </p>
          <div className="avatar">
            {<h6>data.avatar_url</h6> && (
              <>
                <img
                  className="card-avatar img-carree img-clip-path"
                  src={data.avatar_url}
                  alt=""
                />
                <p className="span">{respositoryDetails.html_url}</p>
              </>
            )}
          </div>
          <p>
            {" "}
            <h4>
              <b>{respositoryDetails.name}</b>
            </h4>
            <p>
              {" "}
              <center>{respositoryDetails.language}</center>
            </p>
          </p>

          <p>{respositoryDetails.description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default DetailsRepos;
