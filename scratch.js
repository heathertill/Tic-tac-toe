

function clearGrid(){
    $(".grid").remove();
}; 


if (moves >= 5) {
    if (player1.includes())
}

function isWinner() {
    for (var i = 0; i < winners.length; i++) {
        let checker = value =>
            !winners[i].some(element => value.includes(element));
        let winner = player1.filter(checker);

        if (winner.length == player1.length - 3) {
            
            if (moves % 2 == 0) {
                alert('player2 is the winner')
                break;
            } if (moves % 2 != 0){
                alert('player1 is the winner')
                break;
            }
         
        }

        console.log(winner.length, 'winner length');
        console.log(player1.length, 'player1 length');
        console.log(player1, 'player1');
        console.log(winners[i], 'winners[i]');
        console.log(winner, 'winner');
        console.log('####');
    }
}
