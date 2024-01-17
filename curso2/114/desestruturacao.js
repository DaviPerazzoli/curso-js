let numeros = [10,20,30,40,50,60,70,80,90]

let [a,b,c,...d] = numeros


let obj={nome:'bruno', canal: 'CFB Cursos'}

let {nome,canal}=obj

console.log(d)
console.log(nome)
console.log(canal)

const cores = ()=>{
    return ['verde', 'amarelo', 'azul','branco']
}

let[c1,c2,,c3]=cores()
console.log(c1)
console.log(c2)
console.log(c3)

let texto='curso de JavaScript'
let [...t]=texto.split(' ')
console.log(t)
//* let[e,f,g,h]=numeros

//* let [e=0,f=0,g=0,h=0]=[10];

//* ({a,b,c,d} = {a:'verde',b:'amarelo',c:'azul',d:'branco'})

//* let numeros=()=>{
//*     return [10,20,30,40]
//* }

//* let [a,b,c,d] = numeros()

//* [a,b] = [b,a]
