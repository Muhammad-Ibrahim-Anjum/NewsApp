import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News  from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  //Link
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <Switch>
            <Route exact path="/">
              <News key="general" pageSize = {21} country = 'in' category = 'general'/>
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize = {21} country = 'in' category = 'business'/>
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize = {21} country = 'in' category = 'entertainment'/>
            </Route>
            <Route exact path="/general">
              <News key="general" pageSize = {21} country = 'in' category = 'general'/>
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize = {21} country = 'in' category = 'health'/>
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize = {21} country = 'in' category = 'science'/>
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize = {21} country = 'in' category = 'sports'/>
            </Route>
            <Route exact path="/techonology">
              <News key="techonology" pageSize = {21} country = 'in' category = 'techonology'/>
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}