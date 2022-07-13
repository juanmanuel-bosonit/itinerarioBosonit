const fromBytesToFormattedSizeUnits = ( valor ) => {
  let medidas = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let i = 0;
  
  while(valor >= 1000 || valor <= -1000){
      valor /= 1000
      i ++
  }
  
  if(valor>=0){
      return Math.round(valor) + medidas[i]
  } else {
      return valor.toFixed(3) + medidas[i]
  }
}

console.log(fromBytesToFormattedSizeUnits(1000))
console.log(fromBytesToFormattedSizeUnits(123456789))
console.log(fromBytesToFormattedSizeUnits(-12145489451.5932, 5))