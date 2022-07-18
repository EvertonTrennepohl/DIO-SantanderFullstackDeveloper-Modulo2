const alunos = [
    {
        nome: "João",
        nota: 6,
        turma: "2C"
    },
    {
        nome: "Maria",
        nota: 8,
        turma: "1B"
    },
    {
        nome: "Pedro",
        nota: 9,
        turma: "3A"
    },
    {
        nome: "Miguel",
        nota: 5,
        turma: "1B"
    },
    {
        nome: "Marcos",
        nota: 8,
        turma: "3A"
    }
]

function alunosAprovados(alunos, media) {
    let aprovados = [];
    for(aluno of alunos) {
        let {nome, nota} = aluno;
        if(nota >= media) {
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 6));