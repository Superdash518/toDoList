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
        console.log(arrayTarefas)
        arrayTarefas.splice(i,1);

        console.log(arrayTarefas)
        checkboxes[i].remove()
        labels[i].remove()
    }
    
    localStorage.setItem("Tarefas",JSON.stringify(arrayTarefas));

    /*
    checkboxes.forEach((element,index) => {
        if(element.checked){
            //arrayTarefas;
            //element.remove()
            //labels[index].remove();


        }
    });*/

  //  reconstruirLista();
})

function reconstruirLista(){
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let labels = document.querySelectorAll("label");
    var lista = document.getElementById("lista");

    while (lista.firstChild) { //Enquanto a lista tiver filhos
        lista.removeChild(lista.firstChild); //os filhos são removidos
    }

    for (let index = 0; index < checkboxes.length; index++) {     
        
            var label = document.createElement("label");
            label.appendChild(document.createTextNode(labels[index].textContent))

            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            lista.appendChild(checkbox);
            lista.appendChild(label);
    }
}

/*
const valuesArr = ["v1", "v2", "v3", "v4", "v5"],
  removeValFromIndex = [0, 2, 4];

for (const i of removeValFromIndex.reverse()) {
  valuesArr.splice(i, 1);
}
console.log(valuesArr)

*/
