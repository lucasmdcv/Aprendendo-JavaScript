// novo recurso es 2015
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

const{nome: n, idade: i }= pessoa
console.log(nome , idade )

const {sobrenome , bemHumorada = true } = pessoa 
console.log( sobrenome, bemHumorada)

const{ endereco:{longradouro, numero, cep}} = pessoa
console.log(longradouro,numero,cep)

const{ conta: { ag, num}} = pessoa
console.log(ag,num)
