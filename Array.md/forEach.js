const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
//O forEach()método chama uma função para cada elemento em uma matriz.
//O forEach()método não é executado para elementos vazios.


//Calcule a soma:
let sum = 0;
const numeros = [65, 44, 12, 4];
numeros.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

//multiplique cada elemento:
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction)

function myFunction(item, index, arr) {
  arr[index] = item * 10;
}
