var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomNumber2 = Math.floor(Math.random()*6) +1;
var img_src1, img_src2;
switch(randomNumber1){
    case 1:
        img_src1='1.png';
        break;

    case 2:
        img_src1='2.png';
        break;

    case 3:
        img_src1='3.png';
        break;

    case 4:
        img_src1='4.png';
        break;

    case 5:
        img_src1='5.png';
        break;

    case 6:
        img_src1='6.png';
        break;
}
switch(randomNumber2){
    case 1:
        img_src2='1.png';
        break;

    case 2:
        img_src2='2.png';
        break;

    case 3:
        img_src2='3.png';
        break;

    case 4:
        img_src2='4.png';
        break;

    case 5:
        img_src2='5.png';
        break;

    case 6:
        img_src2='6.png';
        break;
}

document.querySelector("#dice1").src= img_src1;
document.querySelector("#dice2").src= img_src2;

if(randomNumber1>randomNumber2) document.querySelector(".heading").textContent = "Player 1 wins";
else if(randomNumber1<randomNumber2) document.querySelector(".heading").textContent = "Player 2 wins";
else document.querySelector(".heading").textContent = "Draw";

function refreshPage(){
    window.location.reload();
}