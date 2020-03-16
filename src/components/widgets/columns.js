import React, { useState } from "react";
import Column from "./column";
import useFunctions from "../useFunctions/useFunctions";

const { getRandomArray } = useFunctions();

export default props => {
  const [columnsArray, setcolumnsArray] = useState(getRandomArray(60));
  console.log('columnsArray', columnsArray)

  const renderCols = () => {
    return columnsArray.map((c,index) => {
      return <Column key={index} id={index} height={c} width={10} />;
    });
  };

  const renderSorted = () => {
    setcolumnsArray([...columnsArray].sort())
    renderCols()
  };
  const bubbleSort = () =>{

  }
  return (
    <div className="container-fluid">
      <div className="row shadow bg-dark columns-container">{renderCols()}</div>
      <a onClick={renderSorted} className="btn btn-primary" role="button">
        Sort
      </a>
    </div>
  );
};
