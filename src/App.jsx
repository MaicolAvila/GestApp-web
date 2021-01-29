import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Panel from "./components/Panel";


import Home from "./screens/Home";


function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <Panel className="Menu" />
        <div className="Main">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
