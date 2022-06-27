const arrDirty = [NaN, 0, 5, false, -1, '', undefined, null, 'test'];

const arrTruthy = arrDirty.filter(Boolean).filter(function (x) {
  																									return typeof x !== 'number'
																									});

console.log(arrTruthy);