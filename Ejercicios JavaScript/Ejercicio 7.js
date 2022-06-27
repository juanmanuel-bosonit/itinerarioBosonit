const returnFalsyValues = (obj, x) => {
  for(let values in obj){
    if(x(obj[values])){
      delete obj[values];
    }
  }
  return obj
}

const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string')
 
console.log(result); // {a: 1, c: 3}