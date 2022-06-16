// Ao digitar a tarefa no input e clicar em Add, a tarefa deve ser incluída na lista;
// Pega o que está escrito no input:
const input = document.getElementById('id-tarefa');
const btnAdd = document.querySelector('.btnAdd');
const lista = document.getElementById('task-list');

const addTask = () => {
    const tarefaEscrita = input.value;
    
    const newLi = document.createElement('li');
    newLi.innerText = tarefaEscrita;
    lista.appendChild(newLi);

    input.value = '';
}

btnAdd.addEventListener('click', addTask);