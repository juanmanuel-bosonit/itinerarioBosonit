const arrCities = [
  {city: 'Logroño', country: 'Spain', capital: false},
  {city: 'Paris', country: 'France', capital: true},
  {city: 'Madrid', country: 'Spain', capital: true},
  {city: 'Rome', country: 'Italy', capital: true},
  {city: 'Oslo', country: 'Norway', capital: true},
  {city: 'Jaén', country: 'Spain', capital: false}
]

const spainCitiesNoCapital = arrCities.filter(function(x) {
  															if (x.country == 'Spain' && !x.capital){
                                  return x;
                                }
														}).map(arr => arr.city)

console.log(spainCitiesNoCapital)