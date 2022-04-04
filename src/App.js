import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/SearchProfileGit/Profile";
import DetailsProfile from "./components/DetailsProfile/DetailsProfile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NotFound from "./components/NotFound";
import DetailsRepos from "./components/DetailsRepos/DetailsRepos";

function App() {
  const [data, setData] = useState({});
  const [repositories, setRepositories] = useState([]);
  const [respositoryDetails, setRespositoryDetails] = useState({});

  return (
    <div className=" App">
      <div>
        <Navbar />
      </div>
      <Router>
        <div className="container mt-2">
          <Switch>
            <Route path="/" exact>
              <Profile setRepositories={setRepositories} setData={setData} />
            </Route>
            <Route path="/repositories" exact>
              <DetailsProfile
                repositories={repositories}
                data={data}
                setRespositoryDetails={setRespositoryDetails}
              />
            </Route>
            <Route path="/repositories/:name" exact>
              <DetailsRepos
                respositoryDetails={respositoryDetails}
                data={data}
              />
            </Route>
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
