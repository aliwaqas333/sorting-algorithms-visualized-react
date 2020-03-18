import React from "react";
import Bubble from "./components/bubble";
import Selection from "./components/selection";
import Layout from "./components/layout";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Layout />
      <div>
        <Switch>
          <Route path="/bubble">
            <Bubble sort='bubble'/>
          </Route>
          <Route path="/selection">
            <Bubble sort='selection' />
          </Route>
          <Route path="/">{/* <Home /> */}</Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
