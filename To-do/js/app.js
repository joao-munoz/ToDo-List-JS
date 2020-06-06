//1- Criei variávies para as classes dinâmcias

const clear = document.querySelector(".clear");

const date = document.getElementById("date");

const list = document.getElementById("list");

const input = document.getElementById("input");



//2- Mexendo no Add, Input e list

//2.2- Criei o atributo JOB para as caixas de tarefas concluídas ou deletar
//2.3- Coloquei todo o corpo da variável dentro de crases
//2.4- Criei a constante position para completar o insertAdjacentHTML
//2.5- Criei a função addToDo para reutilizar toda vez que for necessário incluir um ítem
//2.6- Incluí o parâmetro (toDo) como o texto que será escrito, e, portanto, dentro do <p>

/*function addToDo(toDo){
    const text = `<li>
                    <i class="fa fa-circle-thin-complete" job="complete"></i>
                    <p class="text"> ${toDo} </p>
                    <i class="fa fa-trash-o delete" job="delete"></i>
                </li>`

    const position = "beforeend";
    //2.1- Criei a lógica de inserção do texto to-do
    list.insertAdjacentHTML(position, text)*/

/*2.7- Adicionando um parâmentro na função addToDo, o mesmo será adicionado

addToDo("Lição");*/

//3- Adicionando o enter no ToDo e crinado o parâmetro toDo
/*document.addEventListener("keyup",function(event){
    if (event.keyup==13){
        const toDo = input.value;
        if (toDo){
            addToDo(toDo);
        }
        input.value="";
    }
});*/

//4- Salvando um to-do em um array

let LIST = [];
let id = 0;

//4.1- Update do keyup - Incluindo propriedades (id, done, trash) do objeto e cruiando o array

document.addEventListener("keyup",function(event){
    if (event.keyup==13){
        const toDo = input.value;
        if (toDo){
            addToDo(toDo, id, false, false);
            LIST.push(
                {
                    name: toDo,
                    id: id,
                    done: false,
                    trash: false,
                }
            );
        }
        input.value="";
        id ++;
    }
});

//4.2- Update da função toDo
//4.3- Criando as variáveis do Check, Uncheck e Linethrough
//4.4- Criando o IF

const CHECK =  "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

function addToDo(toDo, id, done, trash){

    if(trash){return;}

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const text = `<li>
                    <i class="fa ${DONE}" job="complete" ${id}></i>
                    <p class="text" ${LINE}> ${toDo} </p>
                    <i class="fa fa-trash-o delete" job="delete" ${id}></i>
                </li>`

    const position = "beforeend";

    list.insertAdjacentHTML(position, text)
}

//5- Criando função ToDo completo e checked

function completeToDo(element){

    element.classList.toggle(CHECK)
    element.classList.toggle(UNCHECK)
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH)
    LIST[element.id].done = LIST[element.id].done ? false : true
}
