function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('notebook',7000))
console.log(criarProduto('celular',4050))
