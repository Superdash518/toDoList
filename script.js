//Caso exista a chave "Tarefas" salva, o valor de "arrayTarefas" será o valor da chave, caso não exista, o valor será um array vazio.
let arrayTarefas = localStorage.getItem("Tarefas") ? JSON.parse(localStorage.getItem("Tarefas")) : [];

//Verificando se a chave "Tarefas" existe
if(localStorage.getItem("Tarefas")){
    carregarTarefas();
}

//Construindo a lista baseado nas tarefas salvas
function carregarTarefas(){
    let lista = document.getElementById("lista");
    arrayTarefas.forEach(element =>{ //Nesse contexto, o "element" é o texto contido no array
        
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    var label = document.createElement("label");
    label.appendChild(document.createTextNode(element));

    lista.appendChild(checkbox);
    lista.appendChild(label);
    });
}

document.getElementById("tarefa").addEventListener('keypress',function(e){
    if (e.key === 'Enter') {
        inserirElemento();
      }
});

document.getElementById("inserir").addEventListener("click",inserirElemento)

//regEx para verificar se o campo está vazio ou não;
const myReg = "^\\s*$";

function inserirElemento(){
    let lista = document.getElementById("lista");
    let tarefa = document.getElementById("tarefa");

    if(tarefa.value.match(myReg)){
        alert("Insira uma tarefa");
        return;
    }

    //cria a checkbox
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    //cria uma label baseada no que foi escrito no input "tarefa"
    var label = document.createElement("label");
    label.appendChild(document.createTextNode(tarefa.value))

    lista.appendChild(checkbox);
    lista.appendChild(label);

    arrayTarefas.push(tarefa.value);

    tarefa.value = "";
    tarefa.focus();

    //Persistindo dados com o localStorage
    localStorage.setItem("Tarefas",JSON.stringify(arrayTarefas));
};



document.getElementById("remover").addEventListener("click",function(){

    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    let labels = document.querySelectorAll("label");
    
    var removeValFromIndex = [];

    //Insere o índice de todos os elementos a serem removidos na variável "removeValFromIndex"
    for (let index = 0; index < checkboxes.length; index++) {
        if(checkboxes[index].checked){
            removeValFromIndex.push(index);
        }
    }
    
    //Remove os elementos de "arrayTarefas" e da página
    //removeValFromIndex é invertido para que não haja problemas com o índice 
    for (let i of removeValFromIndex.reverse()) {
        arrayTarefas.splice(i,1);
        checkboxes[i].remove()
        labels[i].remove()
    }
    
    localStorage.setItem("Tarefas",JSON.stringify(arrayTarefas));
})

