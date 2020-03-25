import React, { useEffect, useState } from "react";
import Column from "./widgets/column";
import columns from "./widgets/columns";
let timer;
let currentColumn = 0,
  currentMin = 0;
export default params => {

  const {
    display,
    setcolumnsArray,
    columnsArray,
    start,
    setstart,
    speed,
    width
  } = columns();
  const renderCols = (x, y) => {
    return columnsArray.map((c, index) => {
      let current = index === x || index === y ? true : false;
      return (
        <Column
          key={index}
          id={index}
          height={c}
          width={width}
          current={current}
        />
      );
    });
  };
  const swap = (current, min) => {
    let x = columnsArray[current];
    columnsArray[current] = columnsArray[min];
    columnsArray[min] = x;
  };

  function startSort() {
    if (start) {
      timer = setTimeout(selectionSort, speed);
    } else {
      stop();
    }
  }
  function stop() {
    clearTimeout(timer);
    start && setstart(false)
  }

  const selectionSort = () => {
    if (columnsArray[currentMin] > columnsArray[currentColumn]) {
      swap(currentMin, currentColumn);
    }
    currentColumn++;
    if (currentColumn === columnsArray.length) {
      currentColumn = currentMin + 1;
      currentMin++;
    }

    setcolumnsArray([...columnsArray]);
    if (currentMin === columnsArray.length) {
        stop();
        return true;
      }

  };
  startSort();
  return (
    <div>
      <div className="bg-light p-1">
        <h1>Selection Sort</h1>
      </div>
      {display(renderCols(currentMin, currentColumn))}
    </div>
  );
};
