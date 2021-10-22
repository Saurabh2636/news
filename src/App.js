import React, { createContext, useState } from "react";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Contact from "./component/Contact/Contact";
import National from "./component/National/National";
import International from "./component/International/International";
import { AuthProvider } from "./component/context/AuthContaxt";
import Sport from "./component/Sports/Sports";
import "./App.css";
import PrivateRoute from "./component/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export const Context = createContext();
const App = () => {
  return (
      <Router>
        <AuthProvider>
          <Switch>
         
              <Route exact path="/news/signup">
                <Signup  />
              </Route>
              <Route exact path="/news/login">
                <Login  />
              </Route>
              <PrivateRoute exact path="/news/">
                <National />
              </PrivateRoute>
              <PrivateRoute exact path="/news/Int">
                <International/>
              </PrivateRoute>
              <PrivateRoute exact path="/news/Contact">
                <Contact />
              </PrivateRoute>
              <PrivateRoute exact path="/news/Sport">
                <Sport />
              </PrivateRoute>
         
          </Switch>
        </AuthProvider>
      </Router>
    
  );
};

export default App;
