const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

const arr = [];

let data = arr.concat(arrNumber1, arrNumber2, arrNumber3).sort();

const dataArr = new Set(data);

let result = [...dataArr];

console.log(result);



