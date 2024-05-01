
const input = document.querySelector ('.input');
const button = document.querySelector ('.button');
const toDoContainer = document.querySelector ('.toDoContainer');

button.addEventListener ('click', () => { 
    const text = document.createElement ('li');
    text.innerText = input.value;
    text.classList.add ('toDoList');
    toDoContainer.appendChild (text);
    input.value = '';

    text.addEventListener ('click', () => {
        text.classList.add ('toDoListCompleted');
    })

    text.addEventListener ('dblclick', () => {
        toDoContainer.removeChild(text);
    })
})

Swal.fire("SweetAlert2 is working!");
