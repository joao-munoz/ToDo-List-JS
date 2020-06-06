//1- Criei variávies para as classes dinâmcias

const clear = document.querySelector(".clear");
console.log("Ok")

const date = document.getElementById("date");

const list = document.getElementById("list");

const input = document.getElementById("input");



//2- Mexendo no Add, Input e list

//2.2- Criei a constante to-do
//2.3- Criei o atributo JOB para as caixas de tarefas concluídas ou deletar
//2.4- Coloquei todo o corpo da variável dentro de crases
//2.5- Criei a constante position para completar o insertAdjacentHTML
//2.6- Criei a função addToDo para reutilizar toda vez que for necessário incluir um ítem
//2.7- Incluí o parâmetro (toDo) como o texto que será escrito, e, portanto, dentro do <p>

function addToDo(toDo){
    const text = `<li>
                    <i class="fa fa-circle-thin-complete" job="complete"></i>
                    <p class="text"> ${toDo} </p>
                    <i class="fa fa-trash-o delete" job="delete"></i>
                </li>`

    const position = "beforeend";
    //2.1- Criei a lógica de inserção do texto to-do
    list.insertAdjacentHTML(position, text)
}

//2.8- Adicionando um parâmentro na função addToDo, o mesmo será adicionado

addToDo("Lição");


//3.0- Adicionando o enter no ToDo
/*document.addEventListener("keyup",function(event)){
    if (event.keyup===13){

    }
}*/
