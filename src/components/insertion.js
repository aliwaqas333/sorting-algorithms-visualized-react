import React, { useEffect, useState } from "react";
import Column from "./widgets/column";
import columns from "./widgets/columns";
let timer;
let currentColumn = 1;
let currentCompare = 0;
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

  function startSort() {
    if (start) {
      timer = setTimeout(insertionSort, speed);
    } else {
      stop();
    }
  }
  function stop() {
    clearTimeout(timer);
    start && setstart(false)
  }

  const insertionSort = () => {
    const currentColumnValue = columnsArray[currentColumn];
    for (currentCompare = currentColumn - 1; currentCompare >= 0 && columnsArray[currentCompare] > currentColumnValue; currentCompare--) {
      columnsArray[currentCompare + 1] = columnsArray[currentCompare];
    }
    columnsArray[currentCompare + 1] = currentColumnValue; //columnsArray[currentColumn];
    setcolumnsArray([...columnsArray]);
    currentColumn += 1;
    if ( currentColumn === columnsArray.length ) {
      stop();
      return true;
    }
  }

  startSort();
  return (
    <div>
      <div className="bg-light p-1">
        <h1>Insertion Sort</h1>
      </div>
      {display(renderCols(currentCompare + 1, currentColumn))}
    </div>
  );
};
