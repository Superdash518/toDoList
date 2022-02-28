
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
})

