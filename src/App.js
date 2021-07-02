import React, { useState } from "react";
import NavigationTab from "./pages/NavigationTab";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PetitionPage from "./pages/PetitionPage";

import "./styles.css";


export default function App() {
  const [filterCategoryState, setFilterCategoryState] = useState(-1);


  return (
    <Router>
      <NavigationTab setFilterCategoryState={setFilterCategoryState} filterCategoryState={filterCategoryState}/>
      <Switch>
        <Route path="/">
          <PetitionPage filterCategoryState={filterCategoryState}/>
        </Route>

      </Switch>
    </Router>
  );
}
