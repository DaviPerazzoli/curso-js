const objetos = document.getElementById('objetos')

let computador = {
    cpu: '',
    ram: '',
    hd: '',
    info: function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD:${this.hd}`)
    }
}
// computador['monitor']='22pol'
// computador.placaVideo='rtx'

const c1 = Object.assign({},computador)

delete c1.hd

// c1.info()

const o1 ={obj1: '1'}
const o2 ={obj2: '2'}
const o3 ={obj3: '3'}

const o4 = Object.assign(o1,o2,o3)

console.log(o4)

const c2 = Object.create(computador)
c2.cpu = 'amd'
c2.info()

const computadores=[{
        cpu: 'i9',
        ram: '64gb',
        hd: '2tb'
    },
    {
        cpu: 'i7',
        ram: '32gb',
        hd: '2tb'
    },
    {
        cpu: 'i5',
        ram: '16gb',
        hd: '1tb'
    }]

// computador.info()

// objetos.innerHTML= JSON.stringify(computadores)

computadores.forEach((c)=>{
    const div = document.createElement('div')
    div.innerHTML=c.cpu+'<br>'+c.ram+"<br>"+c.hd
    div.style.padding = '5px'
    objetos.appendChild(div)
})