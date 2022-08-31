function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    // o "ou" em java é " || "
    const comprarTv50 = trabalho1 && trabalho2 
    // o "&&" em java é operador de curto circuito
    // apos a analise do primeiro nao olha o segundo resultado 
    //const comprarTv32 = !!(trabalho1 ^ trabalho)// bitwis xor 
   const comprarTv32 = trabalho1 != trabalho2
   const manterSaudavel= comprarSorvete //operador unário
   
   return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))