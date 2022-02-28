//localStorage.removeItem("Tarefas");
let arrayTarefas = localStorage.getItem("Tarefas") ? JSON.parse(localStorage.getItem("Tarefas")) : [];

if(localStorage.getItem("Tarefas")){
    carregarTarefas()
}
function carregarTarefas(){
    var lista = document.getElementById("lista");
    arrayTarefas.forEach(element =>{
        
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    var label = document.createElement("label");
    label.appendChild(document.createTextNode(element))

        lista.appendChild(checkbox);
        lista.appendChild(label);

    });/*
    arrayTarefas.forEach(element => {
        lista.innerHTML+= `<input type="checkbox"> ${element} <br><br>`
    });*/
}

document.getElementById("botao").addEventListener("click",function(){
    var lista = document.getElementById("lista");
    let tarefa = document.getElementById("tarefa");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    var label = document.createElement("label");
    label.appendChild(document.createTextNode(tarefa.value))

    lista.appendChild(checkbox);
    lista.appendChild(label);

    arrayTarefas.push(tarefa.value);
    console.log(arrayTarefas);

    tarefa.value = "";
    tarefa.focus();

    localStorage.setItem("Tarefas",JSON.stringify(arrayTarefas));

})

document.getElementById("remover").addEventListener("click",function(){

    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let labels = document.querySelectorAll("label");
    
    var removeValFromIndex = [];

    for (let index = 0; index < checkboxes.length; index++) {
        if(checkboxes[index].checked){
            removeValFromIndex.push(index);
        }
    }
    
    for (let i of removeValFromIndex.reverse()) {
        arrayTarefas.splice(i,1);
        checkboxes[i].remove()
        labels[i].remove()
    }
    
    localStorage.setItem("Tarefas",JSON.stringify(arrayTarefas));
})

