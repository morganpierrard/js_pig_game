let obj = {p1 : [], p2 : []};

let global = [0,0]
let currentPlayer = 'p1';

let dice1 = ~~(Math.random() * 6 + 1);
let dice2 = ~~(Math.random() * 6 + 1);

document.querySelector(`#pastille_p1`).style.display = 'block';
document.querySelector(`#pastille_p2`).style.display = 'none';

const currentScore = () => document.querySelector(`#current${currentPlayer}`).innerHTML = obj[currentPlayer].reduce((a,b) => a + b,0);

document.querySelector('#action-roll-dice').addEventListener("click", function() {
    dice1 = ~~(Math.random() * 6 + 1);
    dice2 = ~~(Math.random() * 6 + 1);
    document.querySelector(`#de1 > img`).src = `images/dice-${dice1}.jpg`;
    document.querySelector(`#de2 > img`).src = `images/dice-${dice2}.jpg`;
    if (dice1 === 1 || dice2 === 1) {
        obj[currentPlayer] = [];
        currentScore();
        currentPlayer = changePlayer();
    } else {
        obj[currentPlayer].push(dice1 + dice2);
        currentScore();
    }
});

document.querySelector('#action-hold').addEventListener("click", function() {
    global[Number(currentPlayer.replace('p', '')) - 1] += obj[currentPlayer].reduce((a,b) => a + b,0);
    document.querySelector(`#score_${currentPlayer}`).innerHTML = global[Number(currentPlayer.replace('p', '')) - 1];
    if (global[Number(currentPlayer.replace('p', '')) - 1] >= 100) {
        alert(`${currentPlayer.replace('p', 'Player ')} wins !!!`);
    } else {        
        obj[currentPlayer] = [];
        currentScore();
        currentPlayer = changePlayer();
    }
});

document.querySelector('#new_game').addEventListener("click", function() {
    location.reload();
});

const changePlayer = () => {
    document.querySelector(`#pastille_p1`).style.display = 'block';
    document.querySelector(`#pastille_p2`).style.display = 'block';
    document.querySelector(`#pastille_${currentPlayer}`).style.display = 'none';
    return currentPlayer === 'p1' ? 'p2' : 'p1';
}