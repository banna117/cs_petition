import React, { useEffect } from "react";
import NavigationTab from "./pages/NavigationTab";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PetitionPage from "./pages/PetitionPage";
import DirectMessagePage from "./pages/DirectMessagePage";
import "./styles.css";
import axios from "axios";

export default function App() {


  return (
    <Router>
      <NavigationTab />
      <Switch>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/petition">
          <PetitionPage />
        </Route>
        <Route path="/dm">
          <DirectMessagePage />
        </Route>
      </Switch>
    </Router>
  );
}
