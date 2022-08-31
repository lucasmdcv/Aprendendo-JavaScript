/* const url = "https://files.cod3r.com.br/curso-js/funcionarios.json"
 const axios =  require('axios') //axios é um cliente que faz requisições do http

// const chineses = f => f.pais === 'China'
// const mulheres = f => f.genero ==='F'
 

 axios.get(url).then(response => {
     const funcionarios = response.data
     console.log(funcionarios)
 })

*/

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)

    // mulher chinesa com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})
