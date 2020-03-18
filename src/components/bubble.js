import React, { useState } from "react";
import Column from "./widgets/column";
import useFunctions from "./useFunctions/useFunctions";
import LinearProgress from "@material-ui/core/LinearProgress";
import ViewWeekIcon from "@material-ui/icons/ViewWeek";
import FastForwardIcon from "@material-ui/icons/FastForward";
import FastRewindIcon from "@material-ui/icons/FastRewind";
let currentColumn = 0;
let swapped = [];
const { getRandomArray, calcWidth, calcHeight } = useFunctions();
let timer;
// for number of 20 items
let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let numberOfCols = 20;

window.addEventListener("resize", function() {
  window.location.reload();
});
export default props => {
  const [sort, setsort] = useState(props.sort);
  const [speed, setspeed] = useState(50);
  const [numberOfColumns, setnumberOfColumns] = useState(numberOfCols);
  let width = calcWidth(screenWidth, numberOfColumns);
  let max = calcHeight(screenHeight);
  const [columnsArray, setcolumnsArray] = useState(
    getRandomArray(max, 1, numberOfColumns)
  );
  const [start, setstart] = useState(false);

  const getNewArray = () => {
    setcolumnsArray(getRandomArray(max, 1, numberOfColumns));
    swapped = [];
  };
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
  const actionCenter = () => {
    return (
      <div className="d-flex justify-content-center bg-warning align-items-baseline">
        <button
          onClick={() => {
            handleColumnsChange(10);
          }}
          className="btn btn-sm btn-success m-2"
          type="button"
          disabled={start}
        >
          +
          <ViewWeekIcon />
        </button>
        {numberOfColumns}
        <button
          onClick={() => {
            handleColumnsChange(-10);
          }}
          className="btn btn-sm btn-danger m-2"
          type="button"
          disabled={start}
        >
          -
          <ViewWeekIcon />
        </button>
        <button
          onClick={() => {
            handleSpeedChange("+");
          }}
          className="btn btn-sm btn-success m-2"
          type="button"
          disabled={start}
        >
          <FastForwardIcon />
          Speed Up
        </button>
        {speed}
        <button
          onClick={() => {
            handleSpeedChange("-");
          }}
          className="btn btn-sm btn-danger m-2"
          type="button"
          disabled={start}
        >
          <FastRewindIcon />
          Slow Down
        </button>
        <span>Current delay: {speed}</span>
      </div>
    );
  };
  const handleSpeedChange = s => {
    if (s === "+") {
      if (speed > 10) {
        setspeed(speed - 10);
      }
    }
    if (s === "-") {
      if (speed > -1) {
        setspeed(speed + 50);
      }
    }
  };
  const handleColumnsChange = n => {
    if (start) return false;
    if (numberOfColumns + n > 10 && numberOfColumns + n < 200) {
      setnumberOfColumns(numberOfColumns + n);
      getNewArray();
    }
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
    swap(currentColumn, currentColumn + 1);
  };
  const selectionSort = () => {};

  function startSort() {
    if (start) {
      if (sort === "bubble") {
        timer = setTimeout(bubbleSort, speed);
      }
      if (sort === "selection") {
        timer = setTimeout(selectionSort, speed);
      }
    }
  }

  function stop() {
    setstart(false);
    clearTimeout(timer);
  }
  startSort();
  return (
    <div className="container-fluid">
      <div className="bg-light p-1">
        <h1>Bubble Sort</h1>
      </div>
      {/* Action center */}
      <div className="d-flex justify-content-between mt-2">
        <button onClick={getNewArray} className="btn btn-warning">
          Create New
        </button>
        <button
          onClick={() => {
            setstart(!start);
          }}
          className="btn btn-success"
        >
          {start ? <span>Pause Sort</span> : <span>Start Sort</span>}
        </button>
      </div>
      <div>{start && <LinearProgress />}</div>
      <div className="row shadow columns-container">
        <div>{renderCols()}</div>
      </div>
      {actionCenter()}
      {/* Information box */}
      <div className="mt-3">
        <div className="row">
          <div className="col-6">
            <div className="alert alert-primary" role="alert">
              It will take {(numberOfColumns * (numberOfColumns - 1)) / 2} moves
              to sort this array
            </div>
          </div>
          <div className="col-6">
            <div className="alert alert-success" role="alert">
              Number of Columns : {numberOfColumns}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
