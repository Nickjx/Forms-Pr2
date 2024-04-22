// -------------------CVC-limitation-enter-only-3-number------------------
function limitInput() {
    var input = document.getElementById('input-element');
    if (input.value.length > 3) {
        input.value = input.value.slice(0, 3);
    }
}

// Функція для копіювання значення з одного поля введення до іншого
function copyInputValue() {
    // Отримуємо значення поля введення
    var inputValue = document.getElementById("card-number-form").value;
    // Задаємо значення іншого поля введення
    document.getElementById("number-card").value = inputValue;
}