const player=document.getElementById('player');
const block=document.getElementById('block');
const ScorElement=document.getElementById('score');
let gameOver =new Audio('gameover.mp3');

let mp = new Audio('2.mp3');
let score =0 ;

function moveLeft(){
    const curleft=parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if(curleft <=0)return;
    const newleft =curleft - 100;
    player.style.left =newleft +"px";
    mp.play();
}

function moveRight(){
    const curleft =parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    if(curleft>=200)return;
    const newleft = curleft + 100;
    player.style.left= newleft +"px";
    mp.play();

}

document.addEventListener('keydown',(event)=>{
    if(event.key =="ArrowLeft")moveLeft();
    else if(event.key == "ArrowRight")moveRight();
})

block.addEventListener('animationiteration',()=>{
    const ranpos =Math.floor(Math.random()*3)*100;
    block.style.left= ranpos+"px";
    score++ ;
    ScorElement.innerHTML=`Score : ${score}`;
})

setInterval(() => {

    let playerLeft =parseInt(window.getComputedStyle(player).getPropertyValue('left'));
    let blockLeft =parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let blocktop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));

    if(playerLeft == blockLeft && blocktop < 450 && blocktop >350){
        mp.pause();
        gameOver.play();
    alert(`game over!!!!\n Your Score Is : ${score}`);
    block.style.top =-1000+ "px";
    score=0;
    location.reload();

}
},1)
