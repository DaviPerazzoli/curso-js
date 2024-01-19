const p_texto = document.getElementById('p_texto');

const endpoint='./texto.txt'
fetch(endpoint)
.then(ret=>{
    return ret.json()
}).then(res=>{
    console.log(res.Nome)
    console.log(res.Curso)
})