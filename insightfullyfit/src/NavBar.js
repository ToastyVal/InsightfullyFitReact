import React from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

  function NavBar(){
      return(
          <Route exact path="/">Home</Route>,
          <Route path="./components/About"></Route>
      );
  }