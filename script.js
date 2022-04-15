'use strict';
let secretNumber = Math.trunc(Math.random() * 20) +1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function(){
    const guess  = document.querySelector('.guess').value;
    console.log(guess);
    if(!guess) {
        document.querySelector('.message').textContent = 'Wrong! type a Number!'
    } else if(guess == secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!'
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('div').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;
        if ( score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = score;
        }
    } else if(guess > secretNumber){
        if(score > 1){
        document.querySelector(".message").textContent = "it's too high!"
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You are looser';
            document.querySelector('.score').textContent = 0;
        }
    } else if(guess < secretNumber){
        if(score > 1){
            document.querySelector(".message").textContent = "it's too low!"
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You are looser';
                document.querySelector('.score').textContent = 0;
            }
    }
});
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random() * 20) +1;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('div').style.width = '15rem'
});
