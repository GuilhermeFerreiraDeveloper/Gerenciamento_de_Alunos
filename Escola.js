const prompt = require("prompt-sync")();


const listaDeAlunos = [];
let menuSair = false


do {
    console.log("Gerenciamento da Escola: \n" +
        "   [1] - Para adicionar Aluno.\n" +
        "   [2] - Listar todos os Alunos. \n" +
        "   [3] - Listar todos os Alunos por Turma. \n" +
        "   [4] - listar todos os Alunos por Idade. \n" +
        "   [5] - Remover um Aluno. \n" +
        "   [6] - Finalizar aplicativo. \n")
    let escolha = parseInt(prompt("Selecione uma opção: "))
    switch (escolha) {
        case 1:
            AdicionarAluno();
            break;
        case 2:
            ListarAlunos();
            break;
        case 3:
            ListarTodosAlunosPorTurma();
            break;
        case 4:
            ListarIdadeAluno();
            break;
        case 5:
            RemoverAluno();
            break;
        case 6:
            menuSair = true;
            console.log("Saindo do aplicativo.");
            break;
        default:
            console.log("Opção invalida, escolha uma opção do menu!");
    }
} while (!menuSair)


//Adicionar um aluno com nome, idade e turma.
//Crie uma função para adicionar um aluno, garantindo que o nome não esteja vazio e que a idade seja um número positivo.

function AdicionarAluno() {
    sair = false;
    do {
        let nome = prompt("Digite o nome do Aluno: ");
        let idade = prompt("Digite a idade do Aluno: ");

        if (nome != "" && idade > 0) {
            let turma = prompt("Digite a turma do Aluno: ");
            listaDeAlunos.push({ nome, idade, turma });
            sair = true;
        } else {
            console.log("Aluno ou idade invalido, tente novamente! ")
        }
    } while (!sair);
};


//Listar todos os alunos cadastrados com suas informações.
function ListarAlunos() {
    listaDeAlunos.forEach(listaDeAlunos => {
        console.log(listaDeAlunos);
    });
}


// Crie uma função pa1unos cadastrados de forma organizada, mostrando as informações separadas por turma.
function ListarTodosAlunosPorTurma() {
    listaDeAlunos.sort(function(a,b){
        if(a.turma < b.turma) return -1;
        if(a.turma > b.turma) return 1;
        return 0;
    })
    listaDeAlunos.forEach(listaDeAlunos => {
        console.log(listaDeAlunos);
    });
}

function ListarIdadeAluno(){
    listaDeAlunos.sort(function(a,b){
        if(a.idade < b.idade) return -1;
        if(a.idade > b.idade) return 1;
        return 0;
    })
    listaDeAlunos.forEach(listaDeAlunos => {
        console.log(listaDeAlunos);
    });
}



// Adicione a possibilidade de remover um aluno pelo nome.
function RemoverAluno() {
    let removerAlunoNome = prompt("Digite o nome do aluno que quer remover: ");
    let indiceParaRemover = listaDeAlunos.findIndex(listaDeAlunos => listaDeAlunos.nome.toLowerCase() === removerAlunoNome.toLowerCase);

    if (indiceParaRemover !== -1) {
        listaDeAlunos.splice(indiceParaRemover, 1);
        console.log("Aluno removido da lista.");
    }
}