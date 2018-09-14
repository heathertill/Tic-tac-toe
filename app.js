let moves = 0;
let clicked = false;
let reset = 0;
let squares = document.querySelectorAll('#cell');
let board = document.querySelector('#gameboard');
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
winDiv.appendChild(h3Winner);
document.body.appendChild(winDiv);
h3Winner.setAttribute('class', 'winDiv');
let child = h3Winner.firstChild;

squares.forEach(function(cell) {
    cell.addEventListener('click', mark);
    cell.addEventListener('click', isWinner);
});

function mark(e) {
    let icon = document.createElement('span');
    let activeCell = e.target;
    let notEmpty = activeCell.hasAttribute('class');
    moves++;
    if (notEmpty == true) {
        alert('This square is taken!');
    } else if (notEmpty == false) {
        if (moves % 2 == 0 && reset == 0) {
            e.target.appendChild(icon);
            icon.setAttribute('class', 'glyphicon glyphicon-record');
            let score2 = activeCell.textContent;
            players[1].push(score2);
        } else if (reset == 0) {
            e.target.appendChild(icon);
            icon.setAttribute('class', 'glyphicon glyphicon-remove');
            let score1 = activeCell.textContent;
            players[0].push(score1);
        }
    }
    console.log(reset);
}

function isWinner() {
    for (i = 0; i < winners.length; i++) {
        let checker = value =>
            !winners[i].some(element => value.includes(element));
        for (j = 0; j < players.length; j++) {
            let winner = players[j].filter(checker);
            if (winner.length == players[j].length - 3) {
                if (moves % 2 != 0) {
                    ++reset;
                    console.log(reset);
                    let h3Text = document.createTextNode(
                        'Congratulations Player 1!!!'
                    );
                    h3Winner.appendChild(h3Text);

                    if ((reset = 1)) {
                        return;
                    }
                } else if (moves % 2 == 0) {
                    let h3Text = document.createTextNode(
                        'Congratulations Player 2!!!'
                    );
                    h3Winner.appendChild(h3Text);
                    ++reset;
                    console.log(reset);
                    if ((reset = 1)) {
                        return;
                    }
                }
            }
        }
    }
    console.log(reset);
}

function replay() {
    if ((reset = 1)) {
        window.location.reload(false);
        console.log('fire');
    }
}
