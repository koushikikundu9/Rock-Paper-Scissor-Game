function mo(play) {
    const p=document.querySelector(play);
    p.classList.add('big');
   }
function ml(play) {
    const p=document.querySelector(play);
    p.classList.remove('big');
   }
function omr() {
    const p=document.querySelector('.rbutton');
    p.classList.add('bigr');
   }
function olr() {
    const p=document.querySelector('.rbutton');
    p.classList.remove('bigr');
   }
const score={
    win: 0,
    loss: 0,
    tie: 0
   };
function compmove() {
    var c= Math.random()*3+1;
    c=Math.round(c);

    if (c==1) {
        return 'rock';
    } else if (c==2) {
        return 'paper';
    } else {
        return 'scissor';
    }
   }
function update(move){
    let re='';
    const cm= compmove();
    printmoves(cm,move);
    if (cm === move) {
        score.tie+=1;
        re='Tie';
    } else {
        if (cm=== 'rock' && move === 'paper') {
            score.win +=1;
            re='You Win';
        } else if (cm=== 'rock' && move === 'scissor') {
            score.loss+=1;
            re='You Loss';
        } else if (cm=== 'paper' && move === 'rock') {
            score.loss+=1;
            re='You Loss';
        } else if (cm=== 'paper' && move === 'scissor') {
            score.win+=1;
            re='You Win';
        } else if (cm=== 'scissor' && move === 'paper') {
            score.loss+=1;
            re='You Loss';
        } else if (cm=== 'scissor' && move === 'rock') {
            score.win+=1;
            re='You Win';
    }
   }
    const s=document.querySelector('.score');
    s.innerHTML= `Win: ${score.win}  Loss: ${score.loss}  Tie: ${score.tie}`;
    document.querySelector('.result').innerHTML=re;
}
const s=document.querySelector('.score');
s.innerHTML= `Win: ${score.win}  Loss: ${score.loss}  Tie: ${score.tie}`;
function reset() {
    score.win=0;
    score.loss=0;
    score.tie=0;
    const s=document.querySelector('.score');
    s.innerHTML= `Win: ${score.win}  Loss: ${score.loss}  Tie: ${score.tie}`;
    document.querySelector('.result').innerHTML='';
    document.querySelector('.moves').innerHTML='';
}
function printmoves(comp,player) {
    if (comp==='rock') {
        const co= 'rock.webp';
    } else if (comp==='paper') {
        const co= 'paper.webp';
    } else if (comp==='scissor') {
        const co= 'scissor.png';
    }
    if (player==='rock') {
        const po= 'rock.webp';
    } else if (player==='paper') {
        const po= 'paper.webp';
    } else if (player==='scissor') {
        const po= 'scissor.png';
    }
    const show=document.querySelector('.moves');
    show.innerHTML= `Your move: <img src="images/${player}-icon.webp" class='icon'> &nbsp Computer move: <img src="images/${comp}-icon.webp" class='icon'>`;
}
