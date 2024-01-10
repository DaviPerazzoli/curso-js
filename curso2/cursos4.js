export default class Cursos{
    static cursos = ['Javascript', 'HTML', 'CSS', 'Arduino', 'Raspberry', 'C++', 'Python', 'Java', 'C#']

    constructor(){}

    static getTodosCursos=()=>{
        return this.cursos
    }

    static getCurso=(index)=>{
        return this.cursos[index]
    }

    static addCurso=(curso)=>{
        this.cursos.push(curso)
    }

    static apagarTodosCursos=()=>{
        this.cursos=[]   
    }
}

