let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");




//Generate computer choice using random function
const  genCompChoice=()=>
{
   let options=["rock","paper","scissor"];
   //math class contains a random function that generates any random no. between  0 & 1 which are treated as index 
   const randIdx=Math.floor(Math.random()*3);
   return options[randIdx];
}


// Generate user Choice
choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
     const userChoice=choice.getAttribute("id");
      console.log("choice was clicked",userChoice);
      playGame(userChoice);
  
   });
  });


//when game is draw
const drawGame=()=>{
   console.log("Game is draw!");
   msg.innerText="It's Draw!";
   msg.style.backgroundColor="yellow";
   msg.style.color="black";  
   
}

//showing winner
const showWinner=(userWin,userChoice,compChoice)=>{
   if(userWin){
      //For updating score
      userScore++;
      userScorePara.innerText=userScore;
      
      console.log("You Win!");
      msg.innerText=(`You Win! ${userChoice} beats ${compChoice}`);
      msg.style.backgroundColor="green";
      msg.style.color="white";  
   }
   else{
   //For updating score
   compScore++;
      compScorePara.innerText=compScore;
      
   console.log("You Lost!");
   msg.innerText=(`You Lost! ${compChoice} beats ${userChoice}`);
   msg.style.backgroundColor="red";
   msg.style.color="white";  
   }
}


//Playing game
const playGame=(userChoice)=>{
// user choice
console.log("user choice = ",userChoice);
//computer choice
const compChoice=genCompChoice();
console.log("comp choice = ",compChoice);

if(userChoice == compChoice){
   drawGame();
}
else {
let userWin=true;
if(userChoice === "rock"){
   userWin=compChoice==="paper"? false:true;
}

else if(userChoice ==="paper"){
   userWin=compChoice==="scissor"? false:true;
}

else if(userChoice ==="scissor"){
   userWin=compChoice==="rock"? false:true;

}

showWinner(userWin,userChoice,compChoice);

}


};

