import React from "react";
import Bubble from "./components/bubble";
import Selection from "./components/selection"
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <div>
          <Switch>
            <Route path="/bubble">
              <Bubble />
            </Route>
            <Route path="/selection"><Selection /></Route>
            <Route path="/">{/* <Home /> */}</Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
