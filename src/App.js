import React from "react";
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
const App = () => {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/" component={National} />
            <PrivateRoute exact path="/Int" component={International} />
            <PrivateRoute exact path="/Contact" component={Contact} />
            <PrivateRoute exact path="/Sport" component={Sport} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
