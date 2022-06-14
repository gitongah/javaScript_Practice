const options=document.querySelectorAll('.options');

let PlayerScore=0;
let CompScore=0;

options.forEach((option)=>{
  option.addEventListener('click',function(){
    const PlayerInput=this.textContent;
    const CompOption=['Rock','Paper','Scissors'];
    const CompInput= CompOption[Math.floor(Math.random()*3)];

    compareInputs(PlayerInput, CompInput);
    updateScore()
    if( checkWinner()){
      PlayerScore=CompScore=0;
      updateScore();
    }
  });
});

function compareInputs(PlayerInput,CompInput){
  const currentMatch=`${PlayerInput} vs ${CompInput}`;
  if (PlayerInput===CompInput){
    alert(`${currentMatch} is a Tie`);
    return;
  }
  //rock
  if (PlayerInput==='Rock'){
    if (CompInput==='Scissors'){
      alert(`${currentMatch} = you win`)
      PlayerScore++;
    }else{
      alert(`${currentMatch}= Computer Wins`);
      CompScore++;
    }
  }
  //CHECK FOR PAPER
  else if (PlayerInput==='Paper'){
    if(CompInput==='Rock'){
      alert( `${currentMatch}= you win`);
      PlayerScore++;

    }else{
      alert(`${currentMatch} = Computer  wins`)
      CompScore++;

    }
  }
  //check for scissors
  else{
    if(CompInput==='Paper'){
      alert(`${currentMatch} = you win`);
      PlayerScore++;

    }else{
      alert(`${currentMatch} = Computer Wins`)
      CompScore++;
    }
  }
}
function updateScore(){
  document.getElementById('player-score').textContent=PlayerScore;
  document.getElementById('comp-score').textContent=CompScore;
}

function checkWinner(){
  if (PlayerScore===5 || CompScore===5){
    const winner= PlayerScore===5 ?'you win the game! Congratulations!': ' Computer wins  the game! try again next time';

    alert(winner);
    return true;
  }
  return false;
}