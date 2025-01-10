let userScore = 0; // use variables to save score
let compScore = 0;

//access which option is clicked
const choices = document.querySelectorAll(".choice")

//access msg who win
const msg  = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
//generate computer choice using math formula
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"]//rock paper scissor
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx]
  //math.random generate random nos vd decimal here we give 3 dt mnz bw 0-2, floor clear the decimal
}

//draw game condition
const drawGame = () => {
  msg.innerText = "Game was draw. Play again";
  msg.style.backgroundColor ="rgb(44, 44, 60)";
}

const showWinner =(userWin, userChoice,compChoice) => {
  if (userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
    msg.style.backgroundColor ="green";
  }else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose. ${compChoice} beats  your ${userChoice} `;
    msg.style.backgroundColor ="red";
  }
}
//generate user choice
const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);

//call and print  computer choice
const compChoice =genCompChoice();
console.log("comp choice = ", compChoice);

//if else to see the winner
if (userChoice === compChoice){
  //draw game
  drawGame();
} else {
  let userWin = true;
if(userChoice === "rock"){
  userWin = compChoice === "paper"? false: true; //scissor , paper
}else if(userChoice === "paper"){
  userWin = compChoice === "scissors"? false: true;
}else{
    userWin = compChoice === "rock"? false: true;
}
showWinner(userWin, userChoice, compChoice );
}
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  })
})