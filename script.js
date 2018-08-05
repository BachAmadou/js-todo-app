// Step 1 -> create variables `form`, `todosList`, `button`, `input`
    // to target the form, unordered list, button and input.
    let form = document.querySelector('form');
    let todoList = document.querySelector('ul');
    let button = document.querySelector('button');
    let input = document.getElementById('user-todo');

    // Step 2 -> attach an event listener to the `form` variable with `addEventListener`
    // to capture the user input on the `submit` event.
    // Make sure to run `preventDefault()` on the event when the form is submitted.
    // Call a `todoMaker` function which we will create in step three and pass to it
    // the `input` variable and target the value the user has provide with `input.value`.
    // Finally, set the `input.value` to an empty string.
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        todoMaker(input.value);
        input.value = '';
    });

    // Step 3 -> create a todoMaker function that creates 'li' elements with the text user provides
    // from their form and appends it to the 'ul'.
    let todoMaker = function(text) {
        let todo = document.createElement('li');
        todo.textContent = text;
        todoList.appendChild(todo);

    }

    // Step 4 -> attach an event listener to the `clear all` button listening for
    // a user click.
    // In the function use a while loop checking to see whether there
      // is an li element as a child of the `ul` tag. In the code block use the
      // removeChild() DOM method to removed that `li` using the firstChild property.
    button.addEventListener('click', function() {
        while (todoList.firstChild) {
            todoList.removeChild(todoList.firstChild)
        }
    });