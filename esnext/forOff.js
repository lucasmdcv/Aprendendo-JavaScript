for (let letra of "Cod3r") {
    console.log(letra)
}

const assuntosEcma  = ['Map','Set', 'Promise']

for(let i in assuntosEcma ){
    console.log(i)
}

for (let assunto of assuntosEcma){
    console.log(assuntosEcma)
}

const assuntosMap = new Map([
    ['Map',{abordado: true }],
    ['Set',{abordado: false}],
    ['Promis',{aboradado: true}],
])


for (let assunto of assuntosMap){
    console.log(assunto)
}

for (let chaves of assuntosMap.keys()){
    console.log(chaves)
}   

for (let valor of assuntosMap.values()){
    console.log(valor)
}

for (let[ch,  vl] of assuntosMap.entries()){
    console.log(ch,vl)
}

const s = new Set(['a','b' , 'c'])
for (let letra of s) {
    console.log(letra)
}
