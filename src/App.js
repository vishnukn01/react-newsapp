import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                pageSize={15}
                country="in"
                category="general"
                key="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                pageSize={15}
                country="in"
                category="business"
                key="business"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News pageSize={15} country="in" category="sports" key="sports" />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                pageSize={15}
                country="in"
                category="entertainment"
                key="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News pageSize={15} country="in" category="health" key="health" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                pageSize={15}
                country="in"
                category="science"
                key="science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                pageSize={15}
                country="in"
                category="technology"
                key="technology"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
