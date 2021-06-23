
import React from "react"

import NavigationTab from "./pages/NavigationTab"
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PetitionPage from "./pages/PetitionPage";
import DirectMessagePage from "./pages/DirectMessagePage";
import { render } from "@testing-library/react";

class App extends React.Component{
  componentDidMount(){
    render();
  }
  render(){
            return (   
              
              <Router>
                <NavigationTab/>
                  <Switch>
                  <Route path='/home'>
                      <HomePage/>
                  </Route> 
                  <Route path='/petition'>
                      <PetitionPage/>
                  </Route>
                  <Route path='/dm'>
                      <DirectMessagePage/>
                  </Route> 
                </Switch>
              </Router>  
            ); 
    }
  }


export default App;
