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
let computerChoice = Math.floor(Math.random()*3)+1;
function getComputerChoice() {
     if (computerChoice === 1) {
        return "rock"
     }
     else if (computerChoice === 2) {
        return "paper"
     }
     else {
        return "scissors"
     }
};
console.log(getComputerchoice);