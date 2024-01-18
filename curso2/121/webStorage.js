const f_texto = document.getElementById('f_texto');
const p_texto = document.getElementById('p_texto');
const btn_texto = document.getElementById('btn_texto');

btn_texto.addEventListener('click', (evt)=>[

]);

let num
const curso = 'JavaScript'
window.localStorage.setItem('numero', 10)
localStorage.setItem('numero', 33)
localStorage.setItem('nome', 'Davi')
localStorage.setItem('canal', 'TUFI')
localStorage.setItem('curso', curso)

num=localStorage.getItem('numero')

console.log(localStorage.getItem('nome'))
console.log(localStorage.getItem('canal'))
console.log(localStorage.getItem('curso'))
alert(localStorage.key(1))
localStorage.clear()
localStorage.removeItem('numero')

sessionStorage.setItem('vetor', JSON.stringify([1,2,3]))
let pessoa = JSON.parse(sessionStorage.getItem('vetor'))
console.log(pessoa)