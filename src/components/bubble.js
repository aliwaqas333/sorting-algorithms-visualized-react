import React from "react";
import Columns from "./widgets/columns";

export default params => {
  return (
    <>
      <div className="bg-light p-1">
        <h1>Bubble Sort</h1>
        <p>
          Bubble Sort is the simplest sorting algorithm that works by repeatedly
          swapping the adjacent elements if they are in wrong order.
        </p>
      </div>
      <Columns />
    </>
  );
};
