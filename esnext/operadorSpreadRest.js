//operador .. rest(juntar)/spread(espalhar)
//usar rest com parametros de função

//usar spread com objeto
const funcionario = {nome: 'maria', salario: 12348.99}
const clone  = { ativo: true,... funcionario} 
console.log(clone)

//usar spread com array
const grupoA = ['Joao','Pedro', 'Gloria']
const newLocal = ['Maria', ...grupo, 'Rafaela']
const grupoFinal = newLocal
console.log(grupoFinal)
