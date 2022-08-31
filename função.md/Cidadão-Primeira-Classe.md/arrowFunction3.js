let comparaComThis = function(param){
    console.log(this === param);
}

comparaComThis(global)//escopo global

const obj = {}//objeto
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)//aponta para objeto dentro bind

let comparaComThisArrow = param => console.log( this === param);
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThis(obj)