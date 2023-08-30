function aluno(nome, nota){
    this.nome = nome
    this.nota = nota

    this.dadosArrow = function(){
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }
}
const aluno1 = new aluno('bruno', 100)
aluno1.dadosArrow()
