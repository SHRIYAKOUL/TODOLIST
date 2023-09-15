// access input field
const input = document.querySelector('#todo-input');
let task=0;

// Listening to click event from "Add" button.
document.querySelector('#submit').addEventListener('click', () => {
  // value of the input field
    if(input.value==""){
        alert("Enter text");
    }else{
        const inputData = input.value;
        input.value = "";
        task=task+1;
        document.getElementById('task').innerHTML="Total task -"+task;
        // creating todo item element
        const todo_element = document.createElement('div');
        todo_element.classList.add('todo-item');

        const todo_content = document.createElement('div');
        todo_element.appendChild(todo_content);

        const todo_input = document.createElement('input');
        todo_input.classList.add('text');
        todo_input.type = 'text';
        todo_input.value = inputData;
        todo_input.setAttribute('readonly', 'readonly');

        todo_content.appendChild(todo_input);

        const todo_actions = document.createElement('div');
        todo_actions.classList.add('action-items');

        const todo_done = document.createElement('i');
        todo_done.classList.add('fa-solid');
        todo_done.classList.add('fa-check');

        const todo_edit= document.createElement('i');
        todo_edit.classList.add('fa-solid');
        todo_edit.classList.add('fa-pen-to-square');
        todo_edit.classList.add('edit');

        const todo_delete = document.createElement('i');
        todo_delete.classList.add('fa-solid');
        todo_delete.classList.add('fa-trash');

        todo_actions.appendChild(todo_done)
        todo_actions.appendChild(todo_edit);
        todo_actions.appendChild(todo_delete);

        todo_element.appendChild(todo_actions);
        console.log(todo_element)
        // add the todo-item to lists
        document.querySelector('.todo-lists').appendChild(todo_element);

        // done functionality
        todo_done.addEventListener('click', () => {
            todo_input.classList.add('done')
            todo_actions.removeChild(todo_done);
            todo_actions.removeChild(todo_edit);
            
        })

        // edit functionality
        todo_edit.addEventListener('click', (e) => {
            if (todo_edit.classList.contains("edit")) {
            todo_edit.classList.remove("edit");
            todo_edit.classList.remove("fa-pen-to-square");
            todo_edit.classList.add("fa-check-double");
            todo_edit.classList.add("save");
            todo_input.removeAttribute("readonly");
            todo_input.focus();
            } else {
            todo_edit.classList.remove("save");
            todo_edit.classList.remove("fa-check-double");
            todo_edit.classList.add("fa-pen-to-square");
            todo_edit.classList.add("edit");
            todo_input.setAttribute("readonly", "readonly");
            }
        });

        // delete functionality
        todo_delete.addEventListener('click', (e) => {
            console.log(todo_element);
            document.querySelector('.todo-lists').removeChild(todo_element);
            task=task-1;
            document.getElementById('task').innerHTML="Total task -"+task;
        });
    }
})
