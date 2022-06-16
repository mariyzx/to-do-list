// Ao digitar a tarefa no input e clicar em Add, a tarefa deve ser incluída na lista;
// Pega o que está escrito no input:
const input = document.getElementById('id-tarefa');
const btnAdd = document.querySelector('.btnAdd');
const lista = document.getElementById('task-list');
const finalizados = document.getElementsByClassName('completed');
const btnClear = document.querySelector('.btnClear');

const addTask = () => {
    const tarefaEscrita = input.value;
    
    const newLi = document.createElement('li');
    newLi.innerText = tarefaEscrita;
    lista.appendChild(newLi);

    input.value = '';
}

btnAdd.addEventListener('click', addTask);

// Ao clicar duas vezes em um item, o risca, marcando como completo;

const completeTask = (event) => {
    const evento = event.target;

    evento.classList.toggle('completed');

    if (evento.classList == 'completed') {
        evento.style.textDecoration = 'line-through solid black';
    } else {
        evento.style.textDecoration = 'none';
    }
}

lista.addEventListener('dblclick', completeTask);

// Ao clicar no botão 'Clear' apaga todo o conteúdo da lista;

const clear = () => {
    lista.innerHTML = '';
}

btnClear.addEventListener('click', clear);
