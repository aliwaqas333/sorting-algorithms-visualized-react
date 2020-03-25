import React, { useEffect, useState } from "react";
import Column from "./widgets/column";
import columns from "./widgets/columns";
let timer;
let digit = 0;
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

  function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  function digitCount(num) {
    if ( num === 0 ) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  function startSort() {
    if (start) {
      timer = setTimeout(radixSort, speed);
    } else {
      stop();
    }
  }
  function stop() {
    clearTimeout(timer);
    start && setstart(false)
  }

  const maxDigit = digitCount(Math.max(...columnsArray));
  const radixSort = () => {
      let digitBins = Array.from({length: 10}, () => [])
      for (let i = 0; i < columnsArray.length; i++) {
        digitBins[getDigit(columnsArray[i], digit)].push(columnsArray[i]);
      }
      let index = 0;

      for (let i = 0; i < digitBins.length; i++) {
        for (let j = 0; j < digitBins[i].length; j++) {
          columnsArray[index] = digitBins[i][j];
          index++;
        }
      }

      console.log(digit);
      console.log(columnsArray);
      setcolumnsArray([...columnsArray]);
      digit++
      if ( digit === maxDigit ) {
        stop();
        return true;
      }
  };


  startSort();
  return (
    <div>
      <div className="bg-light p-1">
        <h1>Radix Sort</h1>
      </div>
      {display(renderCols())}
    </div>
  );
};
