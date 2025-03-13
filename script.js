var player = 'O';
var gameEnd = false ;

function gamePlay(box_id) {

    var box = document.getElementById(box_id);
    var choice = document.getElementById('choice');

    if(box.innerHTML != '') {
        return;
    }

    if(gameEnd) {
        choice.innerHTML = 'Winner declared';
        choice.style.color = 'red';
        choice.style.fontSize = '32px';
        return;
    }

    if(player === 'O') {
        box.innerHTML = player;
        box.style.color = 'blue';
        checkWinner();
        if(gameEnd) {
            choice.innerHTML = '';
            return
        }
        player = 'X'
        choice.innerHTML = `Player ${player}'s trun`;
        choice.style.color = 'red';
    } else {
        box.innerHTML = player;
        box.style.color = 'red';
        checkWinner();
        if(gameEnd) {
            choice.innerHTML = '';
            return
        }
        player = 'O'
        choice.innerHTML = `Player ${player}'s trun`;
        choice.style.color = 'blue';
    }
}

function restartGame() {
    window.location = 'index.html'
}

function checkWinner() {

    let box1 = document.getElementById('box1');
    let box2 = document.getElementById('box2');
    let box3 = document.getElementById('box3');
    let box4 = document.getElementById('box4');
    let box5 = document.getElementById('box5');
    let box6 = document.getElementById('box6');
    let box7 = document.getElementById('box7');
    let box8 = document.getElementById('box8');
    let box9 = document.getElementById('box9');

    let c1 = box1.innerHTML;
    let c2 = box2.innerHTML;
    let c3 = box3.innerHTML;
    let c4 = box4.innerHTML;
    let c5 = box5.innerHTML;
    let c6 = box6.innerHTML;
    let c7 = box7.innerHTML;
    let c8 = box8.innerHTML;
    let c9 = box9.innerHTML;

    let result = document.getElementById('result');

    if(c1 == player && c2 == player && c3 == player) {
        box1.style.backgroundColor = 'gold';
        box2.style.backgroundColor = 'gold';
        box3.style.backgroundColor = 'gold';
        result.innerHTML = (`${player} is winner`);
        gameEnd = true;
        
    } else if(c4 == player && c5 == player && c6 == player) {
        box4.style.backgroundColor = 'gold';
        box5.style.backgroundColor = 'gold';
        box6.style.backgroundColor = 'gold';
        result.innerHTML = (`${player} is winner`);
        gameEnd = true;
        
    } else if(c7 == player && c8 == player && c9 == player) {
        box7.style.backgroundColor = 'gold';
        box8.style.backgroundColor = 'gold';
        box9.style.backgroundColor = 'gold';
        result.innerHTML = (`${player} is winner`);
        gameEnd = true;
        
    } else if(c1 == player && c5 == player && c9 == player) {
        box1.style.backgroundColor = 'gold';
        box5.style.backgroundColor = 'gold';
        box9.style.backgroundColor = 'gold';
        result.innerHTML = (`${player} is winner`);
        gameEnd = true;
    } else if(c3 == player && c5 == player && c7 == player) {
        box3.style.backgroundColor = 'gold';
        box5.style.backgroundColor = 'gold';
        box7.style.backgroundColor = 'gold';
        result.innerHTML = (`${player} is winner`);
        gameEnd = true;
    } else if(c1 == player && c4 == player && c7 == player) {
        box1.style.backgroundColor = 'gold';
        box4.style.backgroundColor = 'gold';
        box7.style.backgroundColor = 'gold';
        result.innerHTML = (`${player} is winner`);
        gameEnd = true;
    } else if(c2 == player && c5 == player && c8 == player) {
        box2.style.backgroundColor = 'gold';
        box5.style.backgroundColor = 'gold';
        box8.style.backgroundColor = 'gold';
        result.innerHTML = (`${player} is winner`);
        gameEnd = true;
    } else if(c3 == player && c6 == player && c9 == player) {
        box3.style.backgroundColor = 'gold';
        box6.style.backgroundColor = 'gold';
        box9.style.backgroundColor = 'gold';
        result.innerHTML = (`${player} is winner`);
        gameEnd = true;
    } else if(c1 != '' && c2 != '' && c3 != '' && c4 != '' && c5 != '' && c6 != '' 
        && c7 != '' && c8 != '' && c9 != '' ) {
        result.innerHTML = 'Macth Drawn'
    }
}