import React, { useState, useEffect } from "react";
import Column from "./column";
import useFunctions from "../useFunctions/useFunctions";
let currentColumn = 0;
let swapped = [];
const { getRandomArray, calcWidth, calcHeight} = useFunctions();
let timer;
// for number of 20 items
let screenWidth = window.innerWidth
let screenHeight = window.innerHeight
let numberOfCols = 15
let width = calcWidth(screenWidth, numberOfCols)
let max = calcHeight(screenHeight)
export default props => {
  const [columnsArray, setcolumnsArray] = useState(getRandomArray(max, 1, numberOfCols));
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
          width={width}
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
