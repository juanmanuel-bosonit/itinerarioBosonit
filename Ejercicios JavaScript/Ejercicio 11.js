const splitArrayIntoChunks = (arr, num) => {
  let arrSplit = [];
  for (let i=0; i<arr.length; i++){
    if(num<arr.length){
      arrSplit.push(arr.slice(i, i+num))
      i+=(num-1);
    }
  }
  return arrSplit;
}


const result = splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7 ] ]