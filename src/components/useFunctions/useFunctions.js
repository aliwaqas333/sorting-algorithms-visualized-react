export default function useFunctions(){
  return {
    getRandomInt: (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }, 
    getRandomArray:(n)=>{
      let arr = Array(n).fill(0);
      arr.forEach((item, index)=>{
        arr[index] = Math.floor(Math.random() * (500 - 1)) + 1;
      })
      return arr
      
    }
  };
};
