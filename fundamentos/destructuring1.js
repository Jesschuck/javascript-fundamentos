// novo recurso do ES2015
// em objeto

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }

}

const { nome, idade } = pessoa
console.log(nome, idade)