//Função sem retorno
function imprimirSoma(a,b) {
    console.log(a+b)

}
imprimirSoma(2, 3 )
//imprimirSoma(2)// NaN (Not a Number )
imprimirSoma(2, 10, 4 , 5 ,3 , 8 )
imprimirSoma()

//Função com retorno
function soma (a=1,b=1)
{return a + b }
console.log(soma(2,3))
console.log(soma(2))
console.log(soma(1))