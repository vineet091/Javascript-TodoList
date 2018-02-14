window.onload = function () {
  var todoObj = new TodoClass();
  let inputBox = document.getElementById('add-text');
  inputBox.focus();
  let addButton = document.getElementById('btn-addtodo')
  addButton.addEventListener('click', function(ev) {
     if(inputBox.value) {
        todoObj.addTodo(inputBox);
     } else {
      alert('Something is missing....')
     }
  })

}

function TodoClass() {
  this.addTodo = (input) => {
    let todobox = document.createElement('li');
    todobox.className = 'li-item';
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox'; 
    checkbox.className = 'todo-done';
    let todoLabel = document.createElement('span');
    todoLabel.className = 'todo-label';
    todoLabel.innerText = input.value;

    let editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'todo-edit hide';
    let editButton = document.createElement('button');
    editButton.className = 'btn-todo-edit';
    editButton.innerText = 'Edit'
    let cancelEdit = document.createElement('button');
    cancelEdit.className = 'btn-cancel-edit hide';
    cancelEdit.innerText = 'Cancel';
    let deleteButton = document.createElement('button');
    deleteButton.className = 'btn-todo-delete';
    deleteButton.innerText = 'Delete';
    let btnBox = document.createElement('span')
    btnBox.className = 'btn-box';

    checkbox.addEventListener('click', function () {
     todobox.classList.toggle('done')
     this.checked = !this.checked;
    }, false);

    editButton.addEventListener('click', function () {
      todoLabel.className = 'todo-label hide';
      editInput.value = todoLabel.innerText;
      editInput.className = 'todo-edit show';
      this.className = 'btn-todo-edit hide';
      cancelEdit.className = 'btn-cancel-edit show';
    }, false);
    cancelEdit.addEventListener('click', function () {
      editInput.value = '';
      editInput.className = 'todo-edit hide';
      todoLabel.className = 'todo-label';
      this.className = 'btn-cancel-edit hide'
      editButton.className = 'btn-todo-edit show';
    }, false);

    deleteButton.addEventListener('click', function () {
      let todoList = document.getElementById('todo-list');
      _li = this.parentNode.parentNode
      todoList.removeChild(_li);
    }, false);

    todobox.addEventListener('click', function (ev) {
      ev.preventDefault();
      const regex = /show/g
      if(ev.target.tagName === 'LI' && regex.test(editInput.className)) {
            todoLabel.innerText = editInput.value;
            editInput.value = '';
            editInput.className = 'todo-edit hide';
            todoLabel.className = 'todo-label';
            cancelEdit.className = 'btn-cancel-edit hide';
            editButton.className = 'btn-todo-edit';

      }
    }, false);
    todobox.appendChild(checkbox);
    todobox.appendChild(todoLabel);
    todobox.appendChild(editInput)
    btnBox.appendChild(editButton);
    btnBox.appendChild(cancelEdit);
    btnBox.appendChild(document.createTextNode(' | '));
    btnBox.appendChild(deleteButton);
    todobox.appendChild(btnBox);
    document.getElementById('todo-list').appendChild(todobox);
    input.value = '';
  }

}
