const imprimirResultado = function(nota){
    switch (Math.floor(nota)){     //switch é uma seleção multipla
        case 10:
        case 9:
            console.log('quadro de honra')
            break                 // tenho que colocar break em cada
        case 8: case 7:           //case
            console.log('aprovado')
            break 
        case 6: case 5: case 4:
            console.log('recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('reprovado')
            break 
            default:
                console.log('nota invalida')  
    }
    console.log('fim')
}

imprimirResultado(6)
imprimirResultado(3)
imprimirResultado(-1)
imprimirResultado(11)
