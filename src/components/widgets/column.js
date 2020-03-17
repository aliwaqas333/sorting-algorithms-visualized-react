import React from "react";
import { colorArray } from "./_variables";
// import useFunctions from "../useFunctions/useFunctions";
const width = 20;

const getColor = height => {
  let color;
  // const answer = x > 10 ? "greater than 10" : "less than 10";

  if(height <= 500) color = colorArray[4]
  if(height <= 450) color = colorArray[10]
  if(height <= 350) color = colorArray[8]
  if(height <= 250) color = colorArray[7]
  if(height <= 150) color = colorArray[12]
  if(height <= 80) color = colorArray[5]

  return color;
};

export default ({ height, id, current }) => {
  return (
    <div
      style={{
        height: height,
        backgroundColor: getColor(height),
        width: width
      }}
      className = {current === true ? 'column current-column' : 'column shadow-sm'}
      id={`column-${id}`}
    ></div>
  );
};
