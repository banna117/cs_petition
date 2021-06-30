import React from "react";
import NavigationTab from "./pages/NavigationTab";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PetitionPage from "./pages/PetitionPage";

import "./styles.css";


export default function App() {


  return (
    <Router>
      <NavigationTab />
      <Switch>
        <Route path="/">
          <PetitionPage />
        </Route>

      </Switch>
    </Router>
  );
}
