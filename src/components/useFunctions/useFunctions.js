export default function useFunctions() {
  return {
    getRandomInt: (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    },
    getRandomArray: (max, min, n) => {
      let arr = Array(n).fill(0);
      arr.forEach((item, index) => {
        arr[index] = Math.floor(Math.random() * (max - min)) + min;
      });
      return arr;
    },
    calcWidth: (screenWidth, numberOfCols) => {
      let x = screenWidth / numberOfCols;
      if (x > 30) {
        return 25;
      } else {
        return x - 10;
      }
    },
    calcHeight: (screenHeight)=>{
      let x = screenHeight * 0.50

      if(x > 400){
        return 400
      }
      else{
        return x
      }
    }
  };
}
