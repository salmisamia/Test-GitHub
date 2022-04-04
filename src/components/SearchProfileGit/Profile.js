import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";

import "./Profile.css";

// rename the component Search

const Profile = ({ setRepositories, setData }) => {
  let history = useHistory();
  const params = queryString.parse(history.search);
  const [username, setUsername] = useState(params?.search ?? "");
  //onchange
  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };
  //onsubmit
  const submitHandler = async (e, _username) => {
    e.preventDefault();

    // créer un ficher de constants  githubUrl= https://api.github.com/users/
    //
    const profile = await fetch(`https://api.github.com/users/${_username}`);
    const profileJson = await profile.json();
    // check le status de la reponse  if 200 continue or display error
    const repositories = await fetch(profileJson.repos_url);
    const repoJson = await repositories.json();
    // check le status de la reponse if 200 continue ==> redirect or display error
    if (profileJson) {
      setData(profileJson);
      setRepositories(repoJson);
      history.push(`/repositories?search=${_username}`);
    }
  };
  return (
    <>
      <form>
        <div class="form-group col-md-3 mx-auto">
          <div class="input-group">
            <input
              name="mySearchForm"
              className="form-control"
              placeholder="Username "
              type="search"
              aria-describedby="basic-addon2"
              value={username}
              onChange={onChangeHandler}
            />
            <span class="input-group-btn">
              <button
                className="btn btn-default"
                type="submit"
                onClick={(e) => submitHandler(e, username)}
              >
                SEARCH
              </button>
            </span>
          </div>
        </div>
      </form>
    </>
  );
};

export default Profile;
