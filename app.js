let moves = 0;
let clicked = false;
let squares = document.querySelectorAll('#cell');



squares.forEach(function(cell) {
    cell.addEventListener('click', mark);
  
});

function mark(e) {
    let icon = document.createElement('span');
    let activeCell = e.target
    console.log(activeCell)
    let notEmpty = activeCell.hasAttribute('class');
    moves++;
 
    if (notEmpty == true) {
        alert('This square is taken!')

    } else if (notEmpty == false){
        
            if (moves % 2 == 0) {
                e.target.appendChild(icon);
                icon.setAttribute('class', 'glyphicon glyphicon-record');
            } else {
                e.target.appendChild(icon);
                icon.setAttribute('class', 'glyphicon glyphicon-remove');
            }
        
       
    }

 



    
   
   
    console.log(moves);
}

function clickable(e) {
   
    if(e.target.innerHTML) {
		false;
	} 
    
    console.log('fired')
}
