let valor //não inicializada
console.log(valor) //undefined

valor = null //ausência de valor, variável vazia
console.log(valor) //null, quando quer zerar a variável
// console.log(valor.toString()) ERRO

const produto = {}
console.log(produto.preco) //undefined preco
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco) //false
// delete produto.preco
console.log(produto) //preco undefined

produto.preco = null //sem preço
console.log(!!produto.preco) //false
console.log(produto) //null

//Quer zerar uma referência use o null.