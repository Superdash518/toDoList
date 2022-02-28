
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
