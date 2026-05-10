function mensagem01(){
    alert("Alerta: Questão 01");
}

function mensagem02(){
    alert("Alerta: Questão 02");
}

function mensagem03(){
    alert("Construir o código da questão 4!");
}

function trocarCor(){

    if(document.body.style.backgroundColor == "lightblue"){
        document.body.style.backgroundColor = "#f3f3f3";
    }else{
        document.body.style.backgroundColor = "lightblue";
    }
}

function mostrarNome(){

    let nome = document.getElementById("nome").value;

    document.getElementById("resultado").innerHTML =
    "Olá, " + nome; }
