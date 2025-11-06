function consultar() {
    fetch("http://localhost:3001/alunos")
        .then(res => res.json())
        .then(data => {
            console.log("Alunos:", data);
            document.getElementById("resultado").innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById("resultado").innerHTML = "Erro ao obter dados da API!";
        })
}

function consultarPorCodigo(codigo) {
    fetch(`http://localhost:3001/alunos/${codigo}`)
        .then(res => res.json())
        .then(data => {
            console.log("Alunos:", data);
            document.getElementById("resultado").innerHTML = JSON.stringify(data, null, 2);
        })
        .catch(err => {
            document.getElementById("resultado").innerHTML = "Erro ao obter dados da API!";
        })
}

function cadastrar() {
    const alunoAtualizado = {
        nome: "Rafaella",
        estado: "Mococa",
        estado: "SP"
    };

    fetch(`http://localhost:3001/alunos/${codigo}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(alunoAtualizado)
    })
        .then(res => res.json())
        .then(data => {
            console.log("Alunos:", data);
            document.getElementById("resultado").innerHTML = data.message || data.error;
        })
        .catch(err => {
            document.getElementById("resultado").innerHTML = "Erro ao obter dados da API!";
        });
}

function alterar(codigo) {
    const aluno = {
        nome: "Rafaella Sarraf Bimonte",
        estado: "Mococa",
        estado : "SP"
    };

    fetch(`http://localhost:3001/alunos/${codigo}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(aluno)
    })
        .then(res => res.json())
        .then(data => {
            console.log("Alunos:", data);
            document.getElementById("resultado").innerHTML = data.message || data.error;
        })
        .catch(err => {
            document.getElementById("resultado").innerHTML = "Erro ao obter dados da API!";
        });
}

function excluir(codigo) {

    fetch("http://localhost:3001/alunos", {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(data => {
            console.log("Alunos:", data);
            document.getElementById("resultado").innerHTML = data.message || data.error;
        })
        .catch(err => {
            document.getElementById("resultado").innerHTML = "Erro ao obter dados da API!";
        });
}