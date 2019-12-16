import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Meniu } from "./components/Meniu/Meniu";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/meniu">
            <Meniu />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
