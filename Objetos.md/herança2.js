const chevrolet = {
    modelo: 'Celta',
    velMax: 200
 }
 
 const volkswagen = {
    modelo: 'Fox 2007',
    velMax: 180
 }
 
 /* com __proto__ (underline, underline proto underline, underline) acessamos o 
 protótipo, super objeto ou o objeto pai do objeto volkswagen */
 console.log(volkswagen.__proto__)
//-------------------------------------------------------

const avo = { attr1: 'X' }
//const pai = { __proto__: avo, attr2: 'Y' } //cria outro atributo no protótipo 'avo' 
const filho = { __proto__: pai, attr3: 'Z' } //cria outro atributo no protótipo 'pai'
  
console.log(filho.attr1) //imprime 'X', pois o atributo foi encontrado no protótipo herdado 'avo'
//----------------------------------------------------------
Object.prototype.attr4 = 'H'
console.log(filho.attr4) //imprime 'H'
//----------------------------------------------
const carro = {
    velAtual: 0,
    velMax: 250,
    acelerar(delta) {
      if(this.velAtual + delta <= this.velMax) {
         this.velAtual += delta
      } else {
         this.velAtual = this.velMax
      }
    },
    status() {
      return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
  }
  
  const celta = {
     modelo: 2010,
     velMax: 200,
     status() {
       //super chama o método status() do protótipo (carro), não deste objeto this
        return `${this.modelo}: ${super.status()}` 
     }   
  } 
      
 /* foi estabelecida uma relação entre o objeto 'celta' e o protótipo 'carro',
  ou seja, 'celta' tem 'carro' como seu protótipo ('celta' herda de 'carro')*/
  Object.setPrototypeOf(celta, carro)
  
  console.log(celta) // imprime { modelo: 2010, velMax: 200 }
 
  celta.acelerar(110) //chama método 'acelerar' do protótipo 'carro' passando parâmetro
  console.log(celta.status()) //imprime 2010: 110Km/h de 200Km/h 
  //---------------------------------

  const pai = { nome: 'José', idade: 32 }
  const filha = Object.create(pai) //cria novo objeto tendo como protótipo o objeto 'pai'
  
  filha.nome = 'Ana' //altera-se o nome
  
  //cria objeto e o faz herdar de 'pai'
  const filha2 = Object.create(pai, {
     //atributo que não pode ser editado (writable: false) mas pode ser listado (enumerable: true)
     nome: { value: 'Marcelo', writable: false, enumerable: true } 
     })
     
  //imprime o conteúdo do objeto 'filha2' e do objeto herdado 'pai':
  for(let key in filha2) {
     console.log(key) 
  }
  
  //imprime o conteúdo do objeto 'filha2' e do objeto herdado 'pai', mas mostra se o atributo foi herdado ou não:
  for(let key in filha2) {
     filha2.hasOwnProperty(key) ? //verifica se o atributo é do objeto ou foi herdado do protótipo ou da cadeia de protótipos
        console.log(key) : console.log(`Por herança: ${key}`) 
  }
 
 /* Imprimirá: 
  nome
  Por herança: idade
 */ 
//-------------------------------------------

//reverter uma string
String.prototype.reverse = function () {
    //quebra a string, armazena os caracteres em um array revertendo a ordem e junta novamente 
    return this.split('').reverse().join('')
 }
 
 console.log('CriandoBits'.reverse())//imprime stiBodnairC
 
 //retorna a primeira posição de um array:
 Array.prototype.first = function() {
    return this[0]
 }
 
 console.log([3, 5, 5, 9].first()) //imprime 3 