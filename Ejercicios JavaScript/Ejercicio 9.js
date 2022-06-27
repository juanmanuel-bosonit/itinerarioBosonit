const toLowercaseKeys = (obj) => {
  let objLower = new Object();
  Object.entries(obj).forEach((par) => {
    objLower[par[0].toLowerCase()]= par[1];
  })
  return objLower;
}

const myObject = { NamE: 'Charles', ADDress: 'Home Street' };
const myObjLowercase = toLowercaseKeys(myObject);
console.log(myObjLowercase); // { name: 'Charles', address: 'Home Street' }