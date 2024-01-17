const q1 = document.getElementById('q1')
const q2 = document.getElementById('q2')
const posx = document.getElementById('posx')
const posy = document.getElementById('posy')
const largura = document.getElementById('largura')
const altura = document.getElementById('altura')

q1.accessKey='.'
q2.accessKey='n'

console.log('Atalho q1: ' + q1.accessKey)

const info = (el)=>{
    let DOMrect = el.getBoundingClientRect()
    posx.innerHTML= 'posx: '+ DOMrect.x
    posy.innerHTML= 'posy: '+DOMrect.y
    largura.innerHTML= 'largura: '+DOMrect.width
    altura.innerHTML= 'altura: '+DOMrect.height

}

q1.addEventListener('click', (evt)=>{
    info(evt.target)
})

q2.addEventListener('click', (evt)=>{
    info(evt.target)
})