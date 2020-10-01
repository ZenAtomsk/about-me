'use strict';

var keepingScore = 0

var userName = prompt('Hello, what is your name?');
alert('nice to meet you ' + userName);

var questionUno = prompt('Is my name Ricardo?');

if(questionUno.toLowerCase() === 'yes' || questionUno.toLowerCase() === 'y'){
    // console.log('Question one, right answer.');
    alert('You are correct!');
    keepingScore++;
} else {
    // console.log('Question one, wrong answer..');
    alert('Nope, wrong answer.');
}


var questionTwo = prompt('Was my first language was English?');

if(questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n'){
    // console.log('Question two, right answer.');
    alert('You are correct!');
    keepingScore++;
} else {
    // console.log('Question two, wrong answer.');
    alert('Nope, wrong answer.');
}


var questionThree = prompt('Did I get an associates degree in Las Vegas, Nevada?');

if(questionThree.toLowerCase() === 'no' || questionThree.toLowerCase() === 'n'){
    // console.log('Question three, right answer.');
    alert('You are correct!');
    keepingScore++;
} else {
    // console.log('Question three, wrong answer..');
    alert('Nope, wrong answer.');
}


var questionFour = prompt('Did I work at a family practice in Las Vegas?');

if(questionFour.toLowerCase() === 'yes' || questionFour.toLowerCase() === 'y'){
    // console.log('Question four, right answer.');
    alert('You are correct!');
    keepingScore++;
} else {
    // console.log('Question four, wrong answer.');
    alert('Nope, wrong answer.');
}


var questionFive = prompt('Did my wife and I start dating while playing Pokemon Go?');

if(questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y'){
    // console.log('Question five, right answer.');
    alert('You are correct!');
    keepingScore++;
} else {
    // console.log('Question five, wrong answer.');
    alert('Nope, wrong answer.');
}

document.write('Welcome to my \"About Me\" ' + userName);
alert('Welcome to my \"About Me\" ' + userName);


//question number six

var questionSix;
var i = 0;
var favNum = 7;

while (questionSix != favNum && i < 4){
    questionSix = prompt('What is my favorite number?');
    if (parseInt(questionSix)===favNum){
        // console.log('Question six, right answer.');
        alert('You got it!');
        keepingScore++;
        break;
    } else if ( questionSix > favNum){
        // console.log('Question six, wrong answer, too high.');
        prompt('Too high! Try again');
        i++;
    } else if (questionSix < favNum){
        // console.log('Question six, wrong answer, too low.');
        prompt('Lowball, guess again');
        i++;
    }
}


//question number seven....is it over yet??

var pcGames = ['monster hunter', 'league of legends', 'overwatch'];
for (var i = 0; i < 6; i++){
    var questionSeven = prompt('Can you name one of my favorite PC games?')
    if (questionSeven.toLowerCase() === 'monster hunter' || questionSeven.toLowerCase() === 'league of legends' || questionSeven.toLowerCase() === 'overwatch'){
        // console.log('Question seven was correct.');
        alert('Fun game!! I love it!');
        keepingScore++;
        break;
} else alert('Nope, but I should check that out. Guess again.');
        // console.log('Question seven, wrong answer.');
}
if (i = 6 && questionSeven.toLowerCase !== pcGames){
    alert('ALL of the correct answers; Monster Hunter, League of Legends and Overwatch')
    // console.log('ALL of the correct answers; Monster Hunter, League of Legends and Overwatch');
}

alert('Tallying up your score now......beep booop boop beeeeeeeeeep............beep...THE RESULTS ARE IN!!!! badadadadadadadadadada...You got ' + keepingScore +'/7 answers correct!!!! Don\'t you feel like you know me now? \'Till next time Space Cowboy.')