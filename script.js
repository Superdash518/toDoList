
document.getElementById("botao").addEventListener("click",function(){
    var lista = document.getElementById("lista");
    let tarefa = document.getElementById("tarefa");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    var label = document.createElement("label");
    label.appendChild(document.createTextNode(tarefa.value))

    lista.appendChild(checkbox);
    lista.appendChild(label);
})

document.getElementById("remover").addEventListener("click",function(){

    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let labels = document.querySelectorAll("label");
    
    checkboxes.forEach((element,index) => {
        if(element.checked){
            element.remove()
            labels[index].remove();
        }
    });
    reconstruirLista()
})

function reconstruirLista(){
    let checkboxes = document.querySelectorAll("input[type='checkbox']");

    let labels = document.querySelectorAll("label");

    let tarefa = document.getElementById("tarefa");

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













