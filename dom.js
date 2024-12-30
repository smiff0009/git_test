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

console.log("Hello World");
let randomNumber = Math.floor(Math.random()*3)+1;
function getComputerChoice() {
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

console.log(getComputerChoice(randomNumber));

function getHumanChoice () {
    let humanChoice = prompt("Please choose rock, paper, or scissors");
    if (humanChoice.toLowerCase() = "rock" || "paper" || "scissors") {
    return humanChoice.toLowerCase()
    }
    else
    return "not a valid choice!"
}
let humanChooses = getHumanChoice();
console.log(humanChooses);