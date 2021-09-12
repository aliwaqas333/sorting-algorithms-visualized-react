import React from "react";
import Bubble from "./components/bubble";
import Selection from "./components/selection";
import Insertion from "./components/insertion";
import Radix from "./components/radix"
import Columns from './components/widgets/columns'
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
            <Selection sort='selection' />
          </Route>
          <Route path="/insertion">
            <Insertion sort='insertion' />
          </Route>
          <Route path="/radix">
            <Radix sort='radix' />
          </Route>
          <Route path="/">
            <Bubble sort='bubble'/>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
