const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener('click', function() {
    if (input.value != '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = '❌';

        li.append(deleteButton);
        list.append(li);

        li.addEventListener('click', function() {
            list.removeChild(li);
            input.focus(); 
        });

        input.value = '';
        input.focus();
    } else {
        alert("Input is empty!");
        input.focus();
    }
});