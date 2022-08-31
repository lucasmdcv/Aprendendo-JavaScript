console.log('1)','1' == 1 )  // dois iguais comparam igualdade em binario 
console.log('2)', '2' == 2)   // testes de verdadeiro ou falso no relacional
console.log('3)', '2' == 3) 
console.log('4)', '2' !== 5) 
console.log('5)', '2' == 6) 
console.log ( '6)', "8" ==8)

console.log ( '7)', 3< 2)
console.log ( '8)', 3> 2)
console.log ( '9)', 3<= 2)
console.log ( '10)', 3>= 2)

const d1 = new Date(0)
const d2 = new Date(0)
console.log('11)', d1 ==d2)
console.log('12)', d1.getTime() === d2.getTime())

console.log('13)', undefined == null )  // == igualmente igual 
console.log('14)', undefined === null ) //*=== estreitamente igual 
        //na melhor das hipoteses é melhor usar estreitamente igual 
        //para identificar argumentos com mesmo valor