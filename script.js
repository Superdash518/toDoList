
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
    let labels = document.getElementsByTagName("label");
    for (let index = 0; index < checkboxes.length; index++) {
        if(checkboxes[index].checked){
            checkboxes[index].remove()
            labels[index].remove();
        }
    }
    test()
})

function test(){
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    console.log(checkboxes.length)

    
    var lista = document.getElementById("lista");

   
    //console.log(lista.children)
    //lista.remove(lista.children);
    //lista.innerHTML = ""; 
    while (lista.firstChild) { //Enquanto a lista tiver filhos
        lista.removeChild(lista.firstChild); //os filhos são removidos
    }
    //console.log(lista)
    for (let index = 0; index < checkboxes.length; index++) {     
        
            let tarefa = document.getElementById("tarefa");

            var label = document.createElement("label");
            label.appendChild(document.createTextNode(tarefa.value))

            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            lista.appendChild(label);
            lista.appendChild(checkbox);

    }
}













