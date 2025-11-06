let userScore = 0; //user ke winning count ko track karne ke ly=iye
let compScore = 0; //computer ke winning count ko track krne ke liye

const choices = document.querySelectorAll(".choice");
// teeno choice wali divs access krni rahegi kuki hame track krna padega ki kis par click kra

const msg = document.querySelector("#msg");
// play game msg ko access kra kuki usko change krna rahega jab koi win ya loose karega

const userScorePara = document.querySelector("#user-score");
//user-score div change krni rahegi
const compScorePara = document.querySelector("#comp-score");
//comp score div change krni rahegi

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  //yeh array store kr rha hai choices kuki hame random function se 0 1 2 index generate karana hai
  //js mei random funtion 0 to 1 ke beech mei value generate krti hai
  //0 to 2 tak value generate karane ke lie random function ko 3 se multiply karege(1 jyada) and whole number ke liye floor function ka use karege
  //randoma and floor dono math library ke functions hai
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

//iss function mei decide karege ki kon jeetega
//userChoice must hai uske liye toh param mei userChoice paas kara lia
const playGame = (userChoice) => {
  //Generate computer choice
  //user ke choice ke baad computer generate karega apni choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    //comp choice and user choice are equal its a draw
    drawGame();
  } else {
    let userWin = true; //to track userWin
    if (userChoice === "rock") {
      //scissors, paper -> comp choice
      //kuki agar rock hoga toh woh toh uper se hi draw kr dega yeh wale if mei aaega hi nhi
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    //useWin ko pta krne ke baad show karege winner ko
    //userChoice aur compChoice isliye paas kra kuki hame yeh bhi show krna hai ki user won by what choice or lost by what choice
    showWinner(userWin, userChoice, compChoice);
  }
};

//choices pr for each loop chalao and track ki who will win
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    //jo choice choose kri uski id userChoice mei aa gyi
    playGame(userChoice);
  })
});

