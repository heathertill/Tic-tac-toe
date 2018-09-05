let cells = document.querySelectorAll('.cell');

cells.forEach(function(cell) {
    cell.addEventListener('click', cellClicked);
})

function cellClicked(e) {

e.target.textContent = "hello"

}