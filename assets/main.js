// -------------------CVC-limitation-enter-only-3-number------------------
function limitInput() {
    var input = document.getElementById('input-element');
    if (input.value.length > 3) {
        input.value = input.value.slice(0, 3);
    }
}