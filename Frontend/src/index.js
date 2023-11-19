import React from "react";
import  ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import { AppProvider } from "./Component/News/AppContext.js";


ReactDOM.render(
  <BrowserRouter>
  <AppProvider>
  <App/>
  </AppProvider>
</BrowserRouter>  
,document.getElementById("root"));