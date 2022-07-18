var input = document.getElementsByName('name');
var label = document.getElementById('name');

input.addEventListener('change', updateClass);

function updateClass(e) {
    label.classList.add("label span input");
    input.classList.add("label span input");
}