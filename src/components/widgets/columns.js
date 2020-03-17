import React, { useState, useEffect } from "react";
import Column from "./column";
import useFunctions from "../useFunctions/useFunctions";
let currentColumn = 0;
let swapped = [];
const { getRandomArray } = useFunctions();
let finished = false;
let timer;
export default props => {
  const [columnsArray, setcolumnsArray] = useState(getRandomArray(25));
  const [start, setstart] = useState(false);
  const renderCols = () => {
    return columnsArray.map((c, index) => {
      let current =
        index === currentColumn || index === currentColumn + 1 ? true : false;
      return (
        <Column
          key={index}
          id={index}
          height={c}
          width={10}
          current={current}
        />
      );
    });
  };

  const swap = (left, right) => {
    let newArray = [...columnsArray];
    if (columnsArray[left] > columnsArray[left + 1]) {
      let leftItem = columnsArray[left];
      let rightItem = columnsArray[left + 1];
      columnsArray[left] = rightItem;
      columnsArray[right] = leftItem;
      newArray = [...columnsArray];
    }
    if (currentColumn >= columnsArray.length - swapped.length) {
      currentColumn = 0;
      swapped.push(right);
      console.log("added to swapped", right);
    } else {
      currentColumn++;
    }
    setcolumnsArray(newArray);
    if (swapped.length === columnsArray.length - 1) {
      currentColumn = -2;
      stop();
    }
  };
  const bubbleSort = () => {
    // console.log("bubbleSort");
    swap(currentColumn, currentColumn + 1);
  };

  function startSort() {
    // use a one-off timer
    if (start) {
      timer = setTimeout(bubbleSort, 300);
    }
  }

  function stop() {
    clearTimeout(timer);
  }
  startSort();
  return (
    <div className="container-fluid">
      <div className="row shadow columns-container">
        <div>{renderCols()}</div>
      </div>
      <div className='d-flex justify-content-center mt-2'>
        <button
          onClick={() => {
            setstart(!start);
          }}
          className="btn btn-success p-3"
        >
          Start Sort
        </button>
      </div>
    </div>
  );
};
