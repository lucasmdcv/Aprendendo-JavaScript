const { set } = require("lodash")
const { ReadableStreamBYOBRequest } = require("stream/web")

//não aceita repetição/ não indexada
const times = new Set()
times.add('vasco')
times.add('sao paulo').add('fluminense').add('palmeiras')
times.add('corintians')
times.add('flamengo')
times.add('flamengo')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
times.delete('flamengo')
console.log(times.has('flamengo'))

const nomes = ['Raquel','Lucas','Julia', 'Lucas' ]
const nomesSet = new Set(nomes)
console.log(nomesSet)
