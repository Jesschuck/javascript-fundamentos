const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.charAt(5)) //não achou, ficou em branco
console.log(escola.charCodeAt(3)) //cod html unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3)) //foi do zero + 3 caracteres

console.log('Escola'.concat(escola).concat("!"))
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\w/g, 'e')) //substitui tudo por e

console.log('Ana,Maria,Pedro'.split(',')) //array