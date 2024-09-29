let gameSeq=[];
let userSeq=[];
let highestScore=-1;

let level=0;
let started=false;
let btns=["red","green","yellow","blue"];


let h2 = document.querySelector("h2");

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);
}

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game has started");
        started=true;
        levelUp();
    }
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let ranIdx = Math.floor(Math.random()*4);
    let ranColor = btns[ranIdx];
    gameSeq.push(ranColor);
    console.log(gameSeq);
    let ranBtn = document.querySelector(`.${ranColor}`);
    btnFlash(ranBtn);
}

function checkAns(idx){
    console.log(`Level: ${level}`);
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        if(level>highestScore){
            highestScore=level-1;
        }
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        h2.innerHTML=`Game Over! Highest score: ${highestScore}.<br>Your score was <b>${level-1}.</b><br>Press any key to start.`;
        reset();
    }
}

function btnClicked(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnClicked);
}

function reset(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false;
}