//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'a4',
    valor: 89000,
    proprietário: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            longadouro: "rua ac",
            numero: 123
        }
    },
    condutores: [{
        nome: 'junior',
        idade: 19
    }, {
        nome: 'ana',
        idade: 42
    }]
    , caucularValorDoSeguro: function () {
        //...
    }
}


carro.proprietário.endereco.numero = 1000
carro['proprietário']['endereco']['longadouro']

delete carro.condutores
delete carro.proprietário.endereco
delete carro.caucularValorDoSeguro
console.log(carro)
console.log(carro.condutores)