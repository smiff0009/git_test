// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"You miss 100 percent of the shots you don't take."`,
    person: ` Michael Jordan`
}, {
    quote: `"Bitches ain't shit but hoes and tricks."`,
    person: ` Dr. Dre`
}, {
    quote: `"That's what I said - I said I'm setting booby traps!"`,
    person: ` Data`
}, {
    quote: `"A job you love and you will never have."`,
    person: ` Confucius`
}, {
    quote: `"You will be more disappointed."`,
    person: ` Mark Twain`
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;
     if (randomNumber === 1) {
        return "rock"
     }
     else if (randomNumber === 2) {
        return "paper"
     }
     else {
        return "scissors"
     }
};
/*
let computerChoice = getComputerChoice(randomNumber);
*/


/*
console.log(getComputerChoice(randomNumber));
*/
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function getHumanChoice () {
    prompt("Please choose rock, paper, or scissors");
    if (humanChoice.toLowerCase() === "rock") {
    return humanChoice.toLowerCase()
    }
    else if (humanChoice.toLowerCase() === "paper") {
        return humanChoice.toLowerCase()
        }
    else if (humanChoice.toLowerCase() === "scissors") {
            return humanChoice.toLowerCase()
            }    
    else {
    return "not a valid choice!"
    }
}



/*let humanChoice = getHumanChoice();*/


/*
console.log(humanChooses);
*/

/* score variables */



/* Switch Statement */
function playRound(humanChoice, computerChoice) {
switch(humanChoice) {
    case "rock": 
    if(computerChoice === "paper") {
        return "You lose! Paper beats rock";
        computerScore++;
    }
    else if(computerChoice === "scissors") {
        return "You win! Rock beats scissors";
        humanScore++;
    }
    else {
        return "It's a tie! Play again!";
    }
    case "paper": 
    if(computerChoice === "rock") {
        return "You win! Paper beats rock";
        humanScore++;
    }
    else if(computerChoice === "scissors") {
        return "You lose! Scissors beats rock";
        computerScore++;
    }
    else {
        return "It's a tie! Play again!";
    }
    case "scissors": 
    if(computerChoice === "rock") {
        return "You lose! Rock beats scissors";
        computerScore++;
    }
    else if(computerChoice === "paper") {
        return "You win! Scissors beats paper";
        humanScore++;
    }
    else {
        return "It's a tie! Play again!";
    }
}
}
/* single round function
function playRound(humanChoice, computerChoice) {
    let lowerHumanChoice = humanChoice.toLowerCase();
    if (lowerHumanChoice === "rock" && computerChoice === "rock"){
        console.log("It's a tie! Replay the game!");
    }
    else if (lowerHumanChoice === "rock" && computerChoice ==="paper") {
        console.log("You lose! Paper beats rock!");
        computerScore++;
    }
    else if (lowerHumanChoice === "rock" && computerChoice ==="scissors") {
        return "You win! Rock beats scissors!";
        humanScore++;
    }
    else if (lowerHumanChoice === "paper" && computerChoice ==="rock") {
        return "You win! Paper beats rock!";
        humanScore++;
    }
    else if (lowerHumanChoice === "paper" && computerChoice ==="paper") {
        return "It's a tie! Replay the game!";
    }
    else if (lowerHumanChoice === "paper" && computerChoice ==="scissors") {
        return "You lose! Scissors beats paper!";
        computerScore++;
    }
    else if (lowerHumanChoice === "scissors" && computerChoice ==="rock") {
        return "You lose! Rock beats scissors!";
        computerScore++;
    }
    else if (lowerHumanChoice === "scissors" && computerChoice ==="paper") {
        return "You win! Scissors beats paper!";
        humanScore++;
    }
    else if (lowerHumanChoice === "scissors" && computerChoice ==="scissors") {
        return "It's a tie! Replay the game!";
    }
}
    */



console.log(playRound(humanChoice, computerChoice));
