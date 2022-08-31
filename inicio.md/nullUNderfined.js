let valor // não inicializado
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString())//vai dar erro se eu tentar resolver e rodar

const produto = {}
//console.log(produto.preco)//deu undefined> o produto nao esta ddefinido
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)