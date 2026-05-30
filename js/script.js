let modal = document.querySelector('.modal'),
    button = document.querySelector('.open-modal'),
    input = document.querySelector('.input-task'),
    blockForInputTask = document.querySelector('.block-input-task');

button.addEventListener("click", () => {
    if(modal.classList.contains("show")) {

    } else {
        modal.classList.add("show");
        blockForInputTask.innerHTML = "Задача: " + input.value;

        input.value = '';

        setTimeout(() => {
            modal.classList.remove("show");
        }, 2500);
    }
})