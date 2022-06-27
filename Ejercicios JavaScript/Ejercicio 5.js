const arrCities2 = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Bordeaux', country: 'France', capital: false},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Florence', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]

const arrResult = [];

arrCities2.filter(arrCities2 => arrCities2.capital !== true).forEach(function(x){
  if(x.country == 'Spain'){
    arrResult.push({city: x.city, 'isSpain': true});
  } else {
    arrResult.push({city: x.city, 'isSpain': false});
  }
})

console.log(arrResult);