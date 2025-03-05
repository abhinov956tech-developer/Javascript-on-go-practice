const lodash = require('lodash')

const names = ['mon','john','barry','firoj']

const capital= lodash.map(names, lodash.capitalize) //first way
console.log(capital);

const cap =names.map(lodash.capitalize) // second way
console.log(cap);
