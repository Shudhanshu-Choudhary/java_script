/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundscore, activeplayer , gameplay;
init();


// document.querySelector('#current-' + activeplayer).textContent = dice ; 

// var x = document.querySelector('#score-0').textContent ;
// console.log(x);

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gameplay){
        // create random number
    
    var dice = Math.floor(Math.random()* 6) + 1 ;
    var ol_dice = dice ;
    // display the dice.....
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src = 'dice-' + dice + '.png' ;
    //Challange
    if((ol_dice === 6) && (dice === 6)){
        scores[activeplayer] = 0 ;
        roundscore = 0;
        
    } 
    // Activity
    if (dice !== 1){
        //Add score         
        roundscore += dice ;
        document.querySelector('#current-' + activeplayer).textContent = roundscore ;

    } else{
        //next player
        nextplayer();

    }   
    }
}) ;

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gameplay){
         //add score to permanent
    scores[activeplayer] += roundscore ;

    // update the ui
    document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer] ;

  
    // check for the winner

    if(scores[activeplayer] >= 200) {
        document.querySelector('#name-' + activeplayer).textContent = 'WINNER !' ; 
       document.querySelector('.dice').style.display = 'none';
       document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner') ;
       document.querySelector('.player-' + activeplayer  + '-panel').classList.remove('active');
       gameplay = false ;
    }else{
         // next player
          nextplayer();

    }

    }
}) ;

document.querySelector('.btn-new').addEventListener('click' , init);

function nextplayer() {
    activeplayer === 0 ? activeplayer = 1 : activeplayer = 0 ;
    roundscore = 0 ;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';


}



function init() {
    scores = [0 , 0];
roundscore = 0;
activeplayer = 0;
gameplay = true ;
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'PLAYER 1';
document.getElementById('name-1').textContent = 'PLAYER 2' ;
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-' + 0 + '-panel').classList.remove('winner') ;
document.querySelector('.player-' + 1 + '-panel').classList.remove('winner') ;


}
