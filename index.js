const rulesBTN = $('.rules');
const closeBTN = $('#close');
const rulesMap = $('.rulesMap');
const blackout = $('.blackout');
const gameButton = $('.gBtn');
const buttonsContainer = $('.gameButtons');

let icons = ["paper", "scissors", "rock"];
let userIco, cpuIco;
let score = 0;

const game = `  <img class="bg" src="./images/bg-triangle.svg" alt="">

<div class="paper gBtn" onclick="gameStart('paper')">
  <div class="paperIn">
    <div class="iconContainer">
      <img class="icon" src="./images/icon-paper.svg" alt="">
    </div>
  </div>
</div>

<div class="scissors gBtn" onclick="gameStart('scissors')">
  <div class="scissorsIn">
    <div class="iconContainer">
      <img class="icon" src="./images/icon-scissors.svg" alt="">
    </div>
  </div>
</div>

<div class="rock gBtn" onclick="gameStart('rock')">
  <div class="rockIn">
    <div class="iconContainer">
      <img class="icon" src="./images/icon-rock.svg" alt="">
    </div>
  </div>
</div>`;

const paper = `

<div class="paper selected">

<div class="paperIn">
  <div class="iconContainer">
    <img class="icon" src="./images/icon-paper.svg" alt="">
  </div>
</div>
<p class="buttonLabel">YOU PICKED</p>
</div>
<div class="computer">
    <p class="buttonLabel">THE HOUSE PICKED</p>
</div>`;
const scissors = `

<div class="scissors selected">

<div class="scissorsIn">
  <div class="iconContainer">
    <img class="icon" src="./images/icon-scissors.svg" alt="">
    </div>
    </div>
    <p class="buttonLabel">YOU PICKED</p>
</div>
<div class="computer">
    <p class="buttonLabel">THE HOUSE PICKED</p>
</div>`;

const rock = `

<div class="rock selected">

<div class="rockIn">
          <div class="iconContainer">
            <img class="icon" src="./images/icon-rock.svg" alt="">
    </div>
    </div>
    <p class="buttonLabel">YOU PICKED</p>
</div>
<div class="computer">
    <p class="buttonLabel">THE HOUSE PICKED</p>
</div>`;

const paperin = `
<div class="paper anim">
<div class="paperIn">
  <div class="iconContainer">
    <img class="icon" src="./images/icon-paper.svg" alt="">
  </div>
  </div>
</div>`;

const scissorsin = `
<div class="scissors anim">
<div class="scissorsIn">
  <div class="iconContainer">
    <img class="icon" src="./images/icon-scissors.svg" alt="">
    </div>
    </div>
    </div>`;

const rockin = `
<div class="rock anim">
<div class="rockIn">
          <div class="iconContainer">
            <img class="icon" src="./images/icon-rock.svg" alt="">
    </div>
    </div>
    </div>`;

const draw = `<div class="resultText">
<h1>DRAW</h1>
<div class="playAgain" onclick="playAgain()"><p>PLAY AGAIN</p></div>
</div>`;

const win = `<div class="resultText">
<h1>YOU WIN</h1>
<div class="playAgain" onclick="playAgain()"><p>PLAY AGAIN</p></div>
</div>`;

const lose = `<div class="resultText">
<h1>YOU LOSE</h1>
<div class="playAgain" onclick="playAgain()"><p>PLAY AGAIN</p></div>
</div>`;

//Rules Functions
rulesMap.hide();
blackout.hide();

rulesBTN.click(function () {
    rulesMap.animate({
        opacity: 1
    }, 70);
    rulesMap.show();
    blackout.show();
});

closeBTN.click(function () {
    rulesMap.animate({
        opacity: 0
    }, 70).hide();
    blackout.hide();
});

//Game Buttons
function gameStart(symbol) {
    switch (symbol) {
        case "paper":
            buttonsContainer.addClass("select");
            buttonsContainer.html("");
            buttonsContainer.html(paper);
            userIco = icons[0];
            cpuChoice();
            result();
            break;
        case "scissors":
            buttonsContainer.addClass("select");
            buttonsContainer.html("");
            buttonsContainer.html(scissors);
            userIco = icons[1];
            cpuChoice();
            result();
            break;
        case "rock":
            buttonsContainer.addClass("select");
            buttonsContainer.html("");
            buttonsContainer.html(rock);
            userIco = icons[2];
            cpuChoice();
            result();
            break;

    }

}

//Random computer choice
function cpuChoice() {
    let number = Math.floor(Math.random() * 3);
    cpuIco = icons[number];
    switch (cpuIco) {
        case "paper":
            $('.computer').prepend(paperin);
            $('.anim').animate({
                opacity: 1
            }, 500);
            break;
        case "scissors":
            $('.computer').prepend(scissorsin);
            $('.anim').animate({
                opacity: 1
            }, 500);
            break;
        case "rock":
            $('.computer').prepend(rockin);
            $('.anim').animate({
                opacity: 1
            }, 500);
            break;
    }
}

// calculate result
function result() {

    if (userIco === cpuIco) {
        buttonsContainer.append(draw);
    } else {
        switch (userIco) {
            case "paper":
                if (cpuIco === "rock") {
                    score++;
                    $('.scoreValue').html(score);
                    buttonsContainer.append(win);
                    circlesWin();
                } else {
                    if (score > 0) {
                        score--;
                    }
                    $('.scoreValue').html(score);
                    buttonsContainer.append(lose);
                    circlesLose()
                }
                break;
            case "scissors":
                if (cpuIco === "paper") {
                    score++;
                    $('.scoreValue').html(score);
                    buttonsContainer.append(win);
                    circlesWin();
                } else {
                    if (score > 0) {
                        score--;
                    }
                    $('.scoreValue').html(score);
                    buttonsContainer.append(lose);
                    circlesLose()
                }
                break;
            case "rock":
                if (cpuIco === "scissors") {
                    score++;
                    $('.scoreValue').html(score);
                    buttonsContainer.append(win);
                    circlesWin();
                } else {
                    if (score > 0) {
                        score--;
                    }
                    $('.scoreValue').html(score);
                    buttonsContainer.append(lose);
                    circlesLose()
                }
                break;
        }
    }
   
    $('.resultText').animate({
        opacity: 1
    }, 1000);
}

//PLay Again
function playAgain() {
    buttonsContainer.html(game);
    buttonsContainer.removeClass("select");

}

//circles animation
function circlesWin(){
    for(i=1;i<4;i++){
        let size = 100+(i*100)+"%";
        $('.selected').prepend('<div class="circle"></div>');
        $('.selected .circle').first().css("width", size);
        $('.selected .circle').first().css("height", size);
        $('.selected .circle').first().animate({
            opacity: i/10
        }, (1000*i)/2);
    }
}

function circlesLose(){
    for(i=1;i<4;i++){
        let size = 100+(i*100)+"%";
        $('.computer').prepend('<div class="circle"></div>');
        $('.computer .circle').first().css("width", size);
        $('.computer .circle').first().css("height", size);
        $('.computer .circle').first().animate({
            opacity: i/10
        }, (1000*i)/2);
    }
}