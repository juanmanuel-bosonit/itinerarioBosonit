let unidades = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
let neg = false;

const fromBytesToFormattedSizeUnits = (val, num? = 3) => {
	let i = 0;
  let decimal = parseInt(val) - val;
  let numDec = decimal.toString().length;
  
  if (val < 0 ) {
    neg = true;
    val = val * (-1);
  }
  
  if ( val < 1000 ) {
    return val + unidades[0];
  } else {
    if(val == 1000) {
      return val/1000 + unidades[1];
    } else {
      do {
        i++;
        val /= 1000;
      } while(val>1000);
      if ( val>99 || numDec > 3) {
        if(neg){
        	return (val.toPrecision(num) * (-1)) + unidades[i];
        } else {
          return val.toPrecision(num)  + unidades[i];
        }
      }
    }
  }
  
}

/*const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB*/
 
/*const result = fromBytesToFormattedSizeUnits(123456789);
console.log(result); // 123MB*/
 
const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result); // -12.145GB
