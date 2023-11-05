import React from "react";
import Bubble from "./components/bubble";
import Selection from "./components/selection";
import Insertion from "./components/insertion";
import Radix from "./components/radix";
import Columns from "./components/widgets/columns";
import Layout from "./components/layout";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <>
      <Layout />
      <div>
        <Routes>
          <Route path="/bubble" element={<Bubble sort="bubble" />} />
          <Route path="/selection" element={<Selection sort="selection" />} />
          <Route path="/insertion" element={<Insertion sort="insertion" />} />
          <Route path="/radix" element={<Radix sort="radix" />} />
          <Route path="/" element={<Bubble sort="bubble" />} />
          {/* No match found, this will act as the default */}
          <Route path="*" element={<Bubble sort="bubble" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
