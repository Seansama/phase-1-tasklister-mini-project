document.addEventListener("DOMContentLoaded", () => {
  const getElementById = (id) => document.getElementById(id);
  const addToListHandler = (event) => {
    event.preventDefault();
    const input = getElementById('new-task-description');
    const list = getElementById('tasks');
    if(input.value.length === 0){
      return;
    }
    const newList = document.createElement('li');
    newList.innerHTML = input.value;
    list.appendChild(newList)
    input.value = '';
  }
  const form = getElementById('create-task-form');
  form.addEventListener('submit', addToListHandler)
});
