const p_array = document.querySelector('#array')
const txt_pesquisar = document.querySelector('#txt_pesquisar')
const btnPesquisar = document.querySelector('#btnPesquisar')
const resultado = document.querySelector('#resultado')

const elementosArray=['html', 'css', 'javascript']

p_array.innerHTML= `[${elementosArray}]`

btnPesquisar.addEventListener('click', (evt)=>{
    resultado.innerHTML = "Valor não encontrado"
    const retorno = elementosArray.find((e, i)=>{
        if(e.toUpperCase()==txt_pesquisar.value.toUpperCase()){
            resultado.innerHTML = "Valor encontrado: "+ e+ "<br>Encontrado na posição: "+ i
            return e
        }
    })

    console.log(retorno)
})