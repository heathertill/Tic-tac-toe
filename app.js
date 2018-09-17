let moves = 0;
let reset = 0;
let squares = document.querySelectorAll('#cell');
let players = [[], []];
let winners = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
    ['1', '4', '7'],
    ['2', '5', '8'],
    ['3', '6', '9'],
    ['1', '5', '9'],
    ['3', '5', '7']
];

let winDiv = document.createElement('div');
let h3Winner = document.createElement('h3');
let newGame = document.createElement('h3');
document.body.appendChild(winDiv);
winDiv.appendChild(h3Winner);
h3Winner.setAttribute('id', 'h3Winner');
winDiv.appendChild(newGame);
newGame.setAttribute('id', 'newGame');
let startOver = document.createTextNode('Click on gameboard to play again');

squares.forEach(function(cell) {
    cell.addEventListener('click', mark);
    cell.addEventListener('click', isWinner);
    cell.addEventListener('click', catsGame)
    cell.addEventListener('click', full);
    cell.addEventListener('click', replay);
});

function mark(e) {
    let icon = document.createElement('span');
    let activeCell = e.target;
    let notEmpty = activeCell.hasAttribute('class');
    moves++;
    if (notEmpty == true && reset != 1) {
        alert('This square is taken!');
    } else if (notEmpty == false) {
        if (moves % 2 == 0 && reset == 0) {
            e.target.appendChild(icon);
            icon.setAttribute('class', 'glyphicon glyphicon-record');
            let score2 = activeCell.textContent;
            players[1].push(score2);
        } else if (moves % 2 != 0 && reset == 0) {
            e.target.appendChild(icon);
            icon.setAttribute('class', 'glyphicon glyphicon-remove');
            let score1 = activeCell.textContent;
            players[0].push(score1);
        }
    }
}

function isWinner() {
    for (i = 0; i < winners.length; i++) {
        let checker = value =>
            !winners[i].some(element => value.includes(element));
        for (j = 0; j < players.length; j++) {
            let winner = players[j].filter(checker);
            if (winner.length == players[j].length - 3) {
                if (moves % 2 != 0 && reset == 0) {
                    let congrats1 = 'Congratulations Player 1!!!';
                    let h3Text = document.createTextNode(congrats1);
                    h3Winner.appendChild(h3Text);
                    newGame.appendChild(startOver);
                    return;
                } else if (moves % 2 == 0 && reset == 0) {
                    let congrats2 = 'Congratulations Player 2!!!';
                    let h3Text = document.createTextNode(congrats2);
                    h3Winner.appendChild(h3Text);
                    newGame.appendChild(startOver);
                    return;
                }
            }
        }
    }
}

function full() {
    if (h3Winner.innerHTML == '') {
    } else {
        ++reset;
    }
}

function replay() {
    if (reset == 2) {
        window.location.reload(false);
    }
}

function catsGame() {
    if (moves == 9) {
        let cat = "Cat's Game";
        let h3Text = document.createTextNode(cat);
        h3Winner.appendChild(h3Text);
        newGame.appendChild(startOver);
    }
}
