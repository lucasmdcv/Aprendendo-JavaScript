//acessar membros de uma função
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = "bola"
//obj1("nome") = "bola2"
console.log(obj1.nome)

function obj(nome){
    this.nome = nome
    this.exec = function() {
        console.log("exec...")
    }
}

const obj2 = new obj ('cadeira')
const obj3 = new obj ('mesa')
console.log(obj2.nome) ////acessar membros de uma função atravez da notação ponto
console.log(obj3.nome)
obj3.exec()
