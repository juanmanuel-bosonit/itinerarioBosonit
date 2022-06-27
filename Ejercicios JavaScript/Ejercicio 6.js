const roundTo = (n1,n2) => {
  return Math.round(n1 * (Math.pow(10, n2)))/Math.pow(10, n2)
}

console.log(roundTo(2.123, 2)) // 2.12
console.log(roundTo(1.123456789, 6))