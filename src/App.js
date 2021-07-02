import React, { useState } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PetitionPage from "./pages/PetitionPage";

import "./styles.css";


export default function App() {


  return (
    <Router>
      <Switch>
        <Route path="/">
          <PetitionPage />
        </Route>

      </Switch>
    </Router>
  );
}
