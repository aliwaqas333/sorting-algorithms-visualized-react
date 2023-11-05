// utilities.js

// Function to generate a random array for sorting visualization
export const getRandomArray = (maxHeight, min, size) => {
  return Array.from(
    { length: size },
    () => Math.floor(Math.random() * (maxHeight - min + 1)) + min
  );
};

// Function to calculate the width of each column based on the screen width and number of columns
export const calcWidth = (screenWidth, numberOfColumns) => {
  return Math.floor(screenWidth / (numberOfColumns + 2)); // +2 for margin
};

// Function to calculate the max height for the columns based on screen height
export const calcHeight = (screenHeight) => {
  return Math.floor(screenHeight * 0.6); // 60% of the screen height
};

// Function to handle speed change
export const handleSpeedChange = (currentSpeed, change) => {
  const increment = change === "+" ? -10 : 50;
  const newSpeed = Math.max(10, currentSpeed + increment);
  return newSpeed;
};

// Function to handle columns change
export const handleColumnsChange = (currentNumberOfColumns, change) => {
  const newNumberOfColumns = currentNumberOfColumns + change;
  if (newNumberOfColumns < 10 || newNumberOfColumns > 100) {
    return currentNumberOfColumns;
  }
  return newNumberOfColumns;
};
