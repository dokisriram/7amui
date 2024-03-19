"use client"

import Home from "@/components/Home";
import Login from "@/components/Login";
import React from "react";
import { connect } from "react-redux";

let App = ({isLoggedIn}) => {
  return <div>
    {isLoggedIn ? <Home /> : <Login />}
  </div>
}

App = connect(
  (state) => {
    return {
      isLoggedIn: state.appReducer.isLoggedIn
    }
  }
)(App)


export default App