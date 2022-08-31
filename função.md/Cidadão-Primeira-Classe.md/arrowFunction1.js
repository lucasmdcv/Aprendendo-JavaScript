let dobro = function(a){
    return 2 * a 
}

dobro = (a) => {
    return 2 * a 
}

dobro = a => 2 *  a// return implicito


console.log(dobro(Math.PI))

let ola = function (){
    return 'ola'
}

ola = () => "olá"
ola = _ => "olá" // possui um param
console.log(ola())