var scores, roundScore, activePlayer, dice,gameplaying,lossScore;
init();
function myFunction() {
    var number = prompt('Enter the final score.');
    document.getElementById("myvalue").value = number ;

}
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gameplaying)
    {

        //1. Random number
        var dice = Math.floor(Math.random()) + 6;
        var previous=[];
        previous.push(dice);
        //2. Display the result
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';
        //3.Update the round score if the rolled number is not 1
        if (dice !== 1) {
            for(var i = 0; i >= 0; i++)
            {
                if (previous[i] == 6 && previous[i + 1] == 6)
                {
                    document.querySelector('#current-' + activePlayer).textContent = 0;
                }
                else 
                {
                    //add score
                    roundScore += dice; //roundscore = roundscore + dice
                    document.querySelector('#current-' + activePlayer).textContent = roundScore;
                }

            }
        }
        else
        {
             nextPlayer();
        }
    }
   
    
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameplaying) {
        //1. Add current score to global score
        scores[activePlayer] += roundScore;

        //2.Update the UI

        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        //3.check if player the game
        if (scores[activePlayer] >= 10) {
            document.getElementById('name-' + activePlayer).textContent = 'winner';
            document.querySelector('.dice').style.display = 'none';
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
    document.querySelector('.dice').style.display = 'none';

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

