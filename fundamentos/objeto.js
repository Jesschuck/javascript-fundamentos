// é uma coleção de pares chaves valores
const prod1 = {} //chaves representa um objeto
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
    }
}

console.log(prod2)