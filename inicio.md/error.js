function imprimirNomeGrifado(obj){
    throw new Error('...')

{try
{console.log(obj.name.toUpperCase()+'!!!')
} catch(e){
    tratarErroELançar(e)
} finally{
    console.log('final')
}
}
const obj = {nome: "Roberto"}
imprimirNomeGrifado(obj)
}
