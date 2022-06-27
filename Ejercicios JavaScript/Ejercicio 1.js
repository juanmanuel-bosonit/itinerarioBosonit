const arrNames =[
  {id: 1, nombre: 'Pepe'},
  {id: 2, nombre: 'Juan'},
  {id: 3, nombre: 'Alba'},
  {id: 4, nombre: 'Toby'},
  {id: 5, nombre: 'Lala'}
];

const objeto = (num) => {
  let obj = arrNames[num-1];
  return obj;
}

console.log(objeto(3));