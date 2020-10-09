cross=true;
score=0;
audiogo=new Audio("smb_mariodie.wav");
audio=new Audio("super-mario-bros-4293.mp3");

setInterval(() => {
    audio.play()
    
}, 1000);

document.onkeydown=function(e){
    console.log("key code is: ", e.keyCode)
    if(e.keyCode==38){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    else if(e.keyCode==39){
        dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left=dinox+30+"px";

        
    }
    else if(e.keyCode==37){
        dino=document.querySelector('.dino');
        dinox=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left=(dinox-30)+"px";

        
    }
}
setInterval(() => {
    dino=document.querySelector('.dino');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    console.log(offsetX,offsetY)

    if(offsetX<93 && offsetY<52)
    {
        gameover.style.visibility='visible';
        obstacle.classList.remove('obstacleAni');
        
        audio.pause();
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            

        }, 2900);
    }
    else if(offsetX<145 && cross){
        score+=1;
        updateScore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
        setTimeout(() => {
            anidur=parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur= anidur - 0.1;
            obstacle.style.animationDuration=newdur + 's';
        }, 500);
    }

}, 100);
 
function updateScore(score)
{
    scorecount.innerHTML="score: "+score
}