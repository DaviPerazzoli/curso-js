const s1=Symbol('oi')
const s2=Symbol()
const s3=Symbol.for('bruno')
const s4=Symbol.for('canal')

console.log(s1)
console.log(s2)

if(s1 === s2){
    document.write('pica')
}else{
    document.write('bolas')
}

console.log(Symbol.keyFor(s3))
console.log(Symbol.keyFor(s4))
console.log(s1.description)