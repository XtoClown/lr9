window.onload = function(){
    let userName = prompt("Hello! Enter your name pls...");
    if(userName == "" || userName == null){
    alert("Pls enter your name to continue");
    location.reload();
    }
    document.getElementById("userName").innerHTML = userName;
}
let playerPoint = 0;
let botPoint = 0;
let playerScore = 0;
let botScore = 0;
let games = 0;
function func(trigger){
    while(trigger == 1){
        trigger = 0;
        if(playerPoint < 21 && botPoint < 21 && games < 3){
            playerScore = Math.floor(Math.random()*9);
            botScore = Math.floor(Math.random()*9);
            playerPoint+=playerScore;
            botPoint+=botScore;
            document.getElementById("playerPoint").innerHTML = playerPoint;
            document.getElementById("botPoint").innerHTML = botPoint;
            cardReplace(playerScore, botScore);
        }
    }
    if(playerPoint > 21){
        setTimeout(()=>winner(1),500);
    }
    if(botPoint > 21){
        setTimeout(()=>winner(0),500);
    }
    if(games == 3){
        if(playerPoint>botPoint)setTimeout(()=>winner(0),500);
        if(botPoint>playerPoint)setTimeout(()=>winner(1),500);
        if(botPoint == playerPoint)setTimeout(()=>winner(2),500);
    }
}
function cardReplace(playerScore, botScore){
   let sixP = "Cards/sixP.svg";
   let sixC = "Cards/sixC.svg";
   let sixB = "Cards/sixB.svg";
   let sixK = "Cards/sixK.svg";
   let sixArray = [sixP, sixC, sixB, sixK];
   let sevenP = "Cards/sevenP.svg";
   let sevenC = "Cards/sevenC.svg";
   let sevenB = "Cards/sevenB.svg";
   let sevenK = "Cards/sevenK.svg";
   let sevenArray = [sevenP, sevenC, sevenB, sevenK];
   let eightP = "Cards/eightP.svg";
   let eightC = "Cards/eightC.svg";
   let eightB = "Cards/eightB.svg";
   let eightK = "Cards/eightK.svg";
   let eightArray = [eightP, eightC, eightB, eightK];
   let nineP = "Cards/nineP.svg";
   let nineC = "Cards/nineC.svg";
   let nineB = "Cards/nineB.svg";
   let nineK = "Cards/nineK.svg";
   let nineArray = [nineP, nineC, nineB, nineK];
   let tenP = "Cards/tenP.svg";
   let tenC = "Cards/tenC.svg";
   let tenB = "Cards/tenB.svg";
   let tenK = "Cards/tenK.svg";
   let tenArray = [tenP, tenC, tenB, tenK];
   let aceP = "Cards/aceP.svg";
   let aceC = "Cards/aceC.svg";
   let aceB = "Cards/aceB.svg";
   let aceK = "Cards/aceK.svg";
   let aceArray = [aceP, aceC, aceB, aceK];
   let kingP = "Cards/kingP.svg";
   let kingC = "Cards/kingC.svg";
   let kingB = "Cards/kingB.svg";
   let kingK = "Cards/kingK.svg";
   let kingArray = [kingP, kingC, kingB, kingK];
   let queenP = "Cards/queenP.svg";
   let queenC = "Cards/queenC.svg";
   let queenB = "Cards/queenB.svg";
   let queenK = "Cards/queenK.svg";
   let queenArray = [queenP, queenC, queenB, queenK];
   let jackP = "Cards/jackP.svg";
   let jackC = "Cards/jackC.svg";
   let jackB = "Cards/jackB.svg";
   let jackK = "Cards/jackK.svg";
   let jackArray = [jackP, jackC, jackB, jackK];
   if(playerScore != botScore){
    games++;
    if(playerScore == 0){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#playerCardHolder").src = jackArray[cardSuit];
        document.getElementById("playerPointCard").innerHTML = 2;
    }
    if(botScore == 0){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#botCardHolder").src = jackArray[cardSuit];
        document.getElementById("botPointCard").innerHTML = 2;
    }
    if(playerScore == 1){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#playerCardHolder").src = queenArray[cardSuit];
        document.getElementById("playerPointCard").innerHTML = 3;
    }
    if(botScore == 1){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#botCardHolder").src = queenArray[cardSuit];
        document.getElementById("botPointCard").innerHTML = 3;
    }
    if(playerScore == 2){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#playerCardHolder").src = kingArray[cardSuit];
        document.getElementById("playerPointCard").innerHTML = 4;
    }
    if(botScore == 2){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#botCardHolder").src = kingArray[cardSuit];
        document.getElementById("botPointCard").innerHTML = 4;
    }
    if(playerScore == 3){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#playerCardHolder").src = sixArray[cardSuit];
        document.getElementById("playerPointCard").innerHTML = 6;
    }
    if(botScore == 3){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#botCardHolder").src = sixArray[cardSuit];
        document.getElementById("botPointCard").innerHTML = 6;
    }
    if(playerScore == 4){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#playerCardHolder").src = sevenArray[cardSuit];
        document.getElementById("playerPointCard").innerHTML = 7;
    }
    if(botScore == 4){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#botCardHolder").src = sevenArray[cardSuit];
        document.getElementById("botPointCard").innerHTML = 7;
    }
    if(playerScore == 5){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#playerCardHolder").src = eightArray[cardSuit];
        document.getElementById("playerPointCard").innerHTML = 8;
    }
    if(botScore == 5){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#botCardHolder").src = eightArray[cardSuit];
        document.getElementById("botPointCard").innerHTML = 8;
    }
    if(playerScore == 6){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#playerCardHolder").src = nineArray[cardSuit];
        document.getElementById("playerPointCard").innerHTML = 9;
    }
    if(botScore == 6){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#botCardHolder").src = nineArray[cardSuit];
        document.getElementById("botPointCard").innerHTML = 9;
    }
    if(playerScore == 7){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#playerCardHolder").src = tenArray[cardSuit];
        document.getElementById("playerPointCard").innerHTML = 10;
    }
    if(botScore == 7){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#botCardHolder").src = tenArray[cardSuit];
        document.getElementById("botPointCard").innerHTML = 10;
    }
    if(playerScore == 8){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#playerCardHolder").src = aceArray[cardSuit];
        document.getElementById("playerPointCard").innerHTML = 11;
    }
    if(botScore == 8){
        let cardSuit = Math.floor(Math.random()*4);
        document.querySelector("#botCardHolder").src = aceArray[cardSuit];
        document.getElementById("botPointCard").innerHTML = 11;
    }
   }
   if(playerScore == botScore){
    document.querySelector("#playerCardHolder").src = "black_joker.svg";
    document.querySelector("#botCardHolder").src = "red_joker.svg";
    document.getElementById("playerPointCard").innerHTML = "Equals";
    document.getElementById("botPointCard").innerHTML = "Equals";
   }
}
function winner(win){
    if(win == 0){   
        document.getElementById("userName").style.background = "linear-gradient(#567258, #2b552f)";
        document.getElementById("userName").style.border = "0.3rem solid #102712";
        document.getElementById("userName").style.color = "#102712";
        document.getElementById("pointP").style.background = "linear-gradient(#567258, #2b552f)";
        document.getElementById("pointP").style.border = "0.3rem solid #102712";
        document.getElementById("pointP").style.color = "#102712";
        document.getElementById("scoreP").style.background = "linear-gradient(#567258, #2b552f)";
        document.getElementById("scoreP").style.border = "0.3rem solid #102712";
        document.getElementById("scoreP").style.color = "#102712";
        document.querySelector("#playerCardHolder").style.backgroundColor = "#102712";
        document.querySelector("#playerCardHolder").style.border = "0.3rem solid #102712";
        document.querySelector("#pointP").innerHTML = "WINNER!";
        document.querySelector("#scoreP").innerHTML = "WINNER!";
        setTimeout(()=>{
            location.reload();
        },1500);
    }
    if(win == 1){
        document.getElementById("botName").style.background = "linear-gradient(#567258, #2b552f)";
        document.getElementById("botName").style.border = "0.3rem solid #102712";
        document.getElementById("botName").style.color = "#102712";
        document.getElementById("pointB").style.background = "linear-gradient(#567258, #2b552f)";
        document.getElementById("pointB").style.border = "0.3rem solid #102712";
        document.getElementById("pointB").style.color = "#102712";
        document.getElementById("scoreB").style.background = "linear-gradient(#567258, #2b552f)";
        document.getElementById("scoreB").style.border = "0.3rem solid #102712";
        document.getElementById("scoreB").style.color = "#102712";
        document.querySelector("#botCardHolder").style.background = "#102712";
        document.querySelector("#botCardHolder").style.border = "0.3rem solid #102712";
        document.querySelector("#pointB").innerHTML = "WINNER!";
        document.querySelector("#scoreB").innerHTML = "WINNER!";
        setTimeout(()=>{
            location.reload();
        },1500);
    }
    if(win == 2){
        document.getElementById("userName").style.background = "linear-gradient(#567258, #2b552f)";
        document.getElementById("userName").style.border = "0.3rem solid #102712";
        document.getElementById("userName").style.color = "#102712";
        document.getElementById("pointP").style.background = "linear-gradient(#567258, #2b552f)";
        document.getElementById("pointP").style.border = "0.3rem solid #102712";
        document.getElementById("pointP").style.color = "#102712";
        document.getElementById("scoreP").style.background = "linear-gradient(#567258, #2b552f)";
        document.getElementById("scoreP").style.border = "0.3rem solid #102712";
        document.getElementById("scoreP").style.color = "#102712";
        document.querySelector("#playerCardHolder").style.backgroundColor = "#102712";
        document.querySelector("#playerCardHolder").style.border = "0.3rem solid #102712";
        document.querySelector("#pointP").innerHTML = "WINNER!";
        document.querySelector("#scoreP").innerHTML = "WINNER!";
        document.getElementById("botName").style.background = "linear-gradient(#567258, #2b552f)";
        document.getElementById("botName").style.border = "0.3rem solid #102712";
        document.getElementById("botName").style.color = "#102712";
        document.getElementById("pointB").style.background = "linear-gradient(#567258, #2b552f)";
        document.getElementById("pointB").style.border = "0.3rem solid #102712";
        document.getElementById("pointB").style.color = "#102712";
        document.getElementById("scoreB").style.background = "linear-gradient(#567258, #2b552f)";
        document.getElementById("scoreB").style.border = "0.3rem solid #102712";
        document.getElementById("scoreB").style.color = "#102712";
        document.querySelector("#botCardHolder").style.background = "#102712";
        document.querySelector("#botCardHolder").style.border = "0.3rem solid #102712";
        document.querySelector("#pointB").innerHTML = "WINNER!";
        document.querySelector("#scoreB").innerHTML = "WINNER!";
        setTimeout(()=>{
            location.reload();
        },1500);
    }
}