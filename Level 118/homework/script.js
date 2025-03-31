const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const itemInput = document.getElementById('itemInput');
const itemList = document.getElementById('itemList');

addButton.addEventListener('click', () => {
    const inputText = itemInput.value.trim();

    if (inputText !== "") {

        const newItem = document.createElement('li');
        newItem.textContent = inputText;

        itemList.appendChild(newItem);

        itemInput.value = "";
    } else {
        alert("გთხოვთ შეიყვანოთ ტექსტი!");
    }
});

clearButton.addEventListener('click', () => {
    itemList.innerHTML = "";
});
