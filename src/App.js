import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  
  state = {
    progress: 0,
  };

  setProgress = (p) =>{
    this.setState({ progress: p });
  }

  render() {
    return (
      <Router>
        <LoadingBar height={3} color="#f11946" progress={this.state.progress} />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News apiKey={this.apiKey} 
                setProgress={this.setProgress}
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
              <News apiKey={this.apiKey} 
                setProgress={this.setProgress}
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
              <News apiKey={this.apiKey} 
                setProgress={this.setProgress}
                pageSize={15}
                country="in"
                category="sports"
                key="sports"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News apiKey={this.apiKey} 
                setProgress={this.setProgress}
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
              <News apiKey={this.apiKey} 
                setProgress={this.setProgress}
                pageSize={15}
                country="in"
                category="health"
                key="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News apiKey={this.apiKey} 
                setProgress={this.setProgress}
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
              <News apiKey={this.apiKey} 
                setProgress={this.setProgress}
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
