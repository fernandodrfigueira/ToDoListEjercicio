
let listaTareas = [];

const formulario = document.getElementById('formulario');
const lista = document.getElementById('lista');

formulario.addEventListener('submit', function(event) {
   event.preventDefault();

    const elemento = document.getElementById('elemento').value;

    if (elemento === '') {
        console.log("Not valid imput.");
        return;
    }

   
        listaTareas.push(elemento);

    actualizarLista();

    document.getElementById('elemento').value = '';
});

function actualizarLista() {

    lista.innerHTML = '';

    if (listaTareas.length === 0) {
        empty.style.display = 'block';
    } else {
        empty.style.display = 'none';


listaTareas.forEach(function(elemento, index) {
let newButton = document.createElement('button');
    newButton.className = 'btn-delete';
    newButton.textContent = 'eliminar';
    newButton.onclick = function(){
        deleteElement(index);
    }


    const li = document.createElement('li');
    li.textContent = elemento;
    li.appendChild(newButton);
    lista.appendChild(li);
});

    
}}


function deleteElement(index) {
    listaTareas.splice(index, 1);

    actualizarLista();
}