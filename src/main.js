const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

const numberJoinToString = number.join('').toString()

const clave = numberJoinToString.slice(0,3)
const clave2 = numberJoinToString.slice(3,6)
const clave3 = numberJoinToString.slice(6,10)

console.log(clave)
console.log(clave2)
console.log(clave3)

console.log(`(${clave}) ${clave2}-${clave3}`) 