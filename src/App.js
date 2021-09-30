import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PetitionPage from "./pages/PetitionPage";

import "./styles.css";


export default function App({store}) {


  return (
    <Router>
      <Switch>
        <Route path="/">
          <PetitionPage store={store}/>
        </Route>

      </Switch>
    </Router>
  );
}
