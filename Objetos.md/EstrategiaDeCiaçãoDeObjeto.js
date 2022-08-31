//usando notação literal
const obj1 = {} 
console.log(obj1)

//object em JS
console.log(typeof Object, typeof new Object)
const obj2 =  new Object
console.log(obj2)

//Funções costrutoras
function Produto(nome, preco , desc){
    this.nome = nome 
    this.getPrecoComDesconto = () =>{
        return(preco - 1 * desc)
    }
}

const p1 = new Produto('caneta', 7.99 , 0.15)
const p2 = new Produto('Notebk', 700.00, 10.0)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

//Função factory
function criarFuncionario(nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30)* (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Lucas', 7980, 4 )
const f2 = criarFuncionario('Felipe', 1200, 15)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//Um função famosa que retorna Objeto
const fromJSON = JSON.parse(`{"info":"Sou um JSON"}`)
console.log(fromJSON.info)