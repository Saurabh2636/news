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
            <Route exact path="/news/signup" component={Signup} />
            <Route exact path="/news/login" component={Login} />
            <PrivateRoute exact path="/news/" component={National} />
            <PrivateRoute exact path="/news/Int" component={International} />
            <PrivateRoute exact path="/news/Contact" component={Contact} />
            <PrivateRoute exact path="/news/Sport" component={Sport} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
