const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) // 7
imprimirResultado(3, 4, soma) // 7
imprimirResultado(3, 4, function (x, y) {
    return x - y // -1
})