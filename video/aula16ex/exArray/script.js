function adicionar(){
    res.innerHTML = ''
    let n = Number(campo.value)

    if(n > 100 || n < 1 || vetor.indexOf(n) != -1){
        alert('Valor inválido ou número já existe na lista!')
    }else{
        vetor.push(n)
        let opt = document.createElement('option')
        opt.text = `Valor ${n} acicionado.`
        lista.appendChild(opt)
        campo.value = ''
        campo.focus()
    }
}

function maiorVet(vet){
    let maior = vet[0]
    for(i in vet){
        if(vet[i] > maior){
            maior = vet[i]
        }
    }
    return maior
}

function menorVet(vet){
    let menor = vet[0]
    for(i in vet){
        if(vet[i] < menor){
            menor = vet[i]
        }
    }
    return menor
}

function somaVet(vet){
    let soma = 0
    for(i in vet){
        soma += vet[i]
    }
    return soma
}

function mostrar(){
    let res = document.getElementById('res')
    if(vetor.length == 0){
        alert('Digite pelo menos 1 valor!')
    }else{
        let maior = maiorVet(vetor)
        let menor = menorVet(vetor)
        let soma = somaVet(vetor)
        media = soma / vetor.length

        res.innerHTML = `<p>Ao todo, temos ${vetor.length} números cadastrados.</p>
        <p>O maior valor informado foi ${maior}</p>
        <p>O menor valor informado foi ${menor}</p>
        <p>Somando todos os valores, temos ${soma}</p>
        <p>A média dos valores digitados é ${media.toFixed(2)}</p>`
    }
}

let campo = document.getElementById('inum')
let lista = document.getElementById('ilista')
let res = document.getElementById('res')
let vetor = []
let add = document.getElementById('add')
let fin = document.getElementById('fin')
add.addEventListener('click', adicionar)
fin.addEventListener('click', mostrar)