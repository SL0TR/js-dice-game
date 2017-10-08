var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('.roll-dice').addEventListener('click', function() {
    if(gamePlaying) {
        //1 random number

        var dice = Math.floor(Math.random() * 6) + 1;

        //2 display result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.visibility = 'visible';
        diceDOM.src = 'dice-' + dice + '.png';

        //3 update round score if the rolled number was not a 1

        if(dice !== 1) {
            // Add score
            roundScore += dice;
            document.querySelector('.current-' + activePlayer).textContent = roundScore;
        } else {
            //Next player
            nextPlayer();
        }   
    }

});

document.querySelector('.hold').addEventListener('click', function() {
    if(gamePlaying){
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        //Update the UI
        document.querySelector('.score' + activePlayer).textContent = scores[activePlayer];

        //Check if player won the game
        if (scores[activePlayer] >= 100) {
            document.querySelector('.name-' + activePlayer).textContent = "Winner!";
            document.querySelector('.dice').style.visibility = "hidden";
            document.querySelector('.name-' + activePlayer).classList.add('winner');
            gamePlaying = false;
        }else {
            //Next Game
            nextPlayer(); 
        }
    }
});


function nextPlayer() {
    //Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.querySelector('.current-0').textContent = '0';
    document.querySelector('.current-1').textContent = '0';

    document.querySelector('.player0').classList.toggle('active');
    document.querySelector('.player0--red-dot').classList.toggle('active-red');
    document.querySelector('.player1').classList.toggle('active');
    document.querySelector('.player1--red-dot').classList.toggle('active-red');
    document.querySelector('.dice').style.visibility = 'hidden';
    document.querySelector('.player0-h2').classList.toggle('active-h2');
    document.querySelector('.player1-h2').classList.toggle('active-h2');
}

document.querySelector('.new').addEventListener('click', init);

function init() {
    scores=[0,0];
    activePlayer = 0;
    roundScore= 0;
    gamePlaying = true;

    document.querySelector('.dice').style.visibility = 'hidden';
    document.querySelector('.player0--score').textContent = '0';
    document.querySelector('.player1--score').textContent = '0';
    document.querySelector('.current-0').textContent = '0';
    document.querySelector('.current-1').textContent = '0';
    document.querySelector('.name-0').textContent = "Player 1";
    document.querySelector('.name-1').textContent = "Player 2";
    document.querySelector('.player0-h2').classList.remove('winner');
    document.querySelector('.player1-h2').classList.remove('winner');
}
