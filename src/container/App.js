import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ContactsPage, ContactDetailsPage } from "../pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ContactsPage} />
        <Route exact path="/details/:handle" component={ContactDetailsPage} />
      </Switch>
    </Router>
  );
}

export default App;
