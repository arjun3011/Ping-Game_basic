var scores, roundScore, activePlayer, dice, gameplaying, lastDice;
init();
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gameplaying) {

        //1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        //2. Display the result
        document.getElementById('dice-1').style.display='block';
        document.getElementById('dice-2').style.display = 'block';

        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';
        //3.Update the round score if the rolled number is not 1
        if (dice1 !== 1 && dice2 !==1) {
            //add score
            roundScore += dice1+ dice2; //roundscore = roundscore + dice
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
            nextPlayer();
        }
    }
    /************if (dice === 6 && lastDice === 6) {
            //Player losses score
            scores[activePlayer] = 0;
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        }
        else if (dice !== 1) {
            //add score
            roundScore += dice; //roundscore = roundscore + dice
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        }
        else {
            nextPlayer();
        }

        lastDice = dice;
    }
    ****************/


});
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameplaying) {
        //1. Add current score to global score
        scores[activePlayer] += roundScore;

        //2.Update the UI

        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        if (input) {
            var winningScore = input;
        } else {
            winningScore = 100;
        }

        //3.check if player the game
        if (scores[activePlayer] >= winningScore) {
            document.getElementById('name-' + activePlayer).textContent = 'winner';
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gameplaying = false;
        }
        else {

            nextPlayer();
        }
    }


});

function nextPlayer() {
    //next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.dice1').style.display = 'null';
    document.querySelector('.dice2').style.display = 'null';

}
document.querySelector('.btn-new').addEventListener('click', init);


function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gameplaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');




}