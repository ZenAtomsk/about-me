'use strict';

var keepingScore = 0

function getName() {
    var userName = prompt('Hello, what is your name?');
    alert('nice to meet you ' + userName);

    document.write('Welcome to my \"About Me\" ' + userName);
    alert('Welcome to my \"About Me\" ' + userName);
}

getName();

function question1() {
    var questionUno = prompt('Is my name Ricardo?');

    if(questionUno.toLowerCase() === 'yes' || questionUno.toLowerCase() === 'y'){
        alert('You are correct!');
        keepingScore++;
    } else {
        alert('Nope, wrong answer.');
    }
}

function question2() {
    var questionTwo = prompt('Was my first language was English?');

    if(questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n'){
        alert('You are correct!');
        keepingScore++;
    } else {
        alert('Nope, wrong answer.');
    }
}

function question3() {
    var questionThree = prompt('Did I get an associates degree in Las Vegas, Nevada?');

    if(questionThree.toLowerCase() === 'no' || questionThree.toLowerCase() === 'n'){
        alert('You are correct!');
        keepingScore++;
    } else {
        alert('Nope, wrong answer.');
    }
}

function question4() {
    var questionFour = prompt('Did I work at a family practice in Las Vegas?');

    if(questionFour.toLowerCase() === 'yes' || questionFour.toLowerCase() === 'y'){
        alert('You are correct!');
        keepingScore++;
    } else {
        alert('Nope, wrong answer.');
    }
}

function question5() {
    var questionFive = prompt('Did my wife and I start dating while playing Pokemon Go?');

    if(questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y'){
        alert('You are correct!');
        keepingScore++;
    } else {
        alert('Nope, wrong answer.');
    }
}

// document.write('Welcome to my \"About Me\" ' + userName);
// alert('Welcome to my \"About Me\" ' + userName);


//question number six

function question6() {
    var questionSix;
    var i = 0;
    var favNum = 7;

    while (i < 4){
        questionSix = prompt('What is my favorite number?');
        if (parseInt(questionSix)===favNum){
            alert('You got it!');
            keepingScore++;
            break;
        } else if (parseInt(questionSix) > favNum){
            alert('Too high! Try again');
            i++;
        } else if (parseInt(questionSix) < favNum){
            alert('Lowball, guess again');
            i++;
        }
    }
}

// question number seven....is it over yet??

function question7() {
    var pcGames = ['monster hunter', 'league of legends', 'overwatch'];
    var numberTries = 6;
    for (var i = 0; i < numberTries; i++) {
        var questionSeven = prompt('Can you name one of my favorite PC games?').toLowerCase();
        for (var j = 0; j < pcGames.length; j++) {
            console.log(questionSeven);
            console.log('guess made');
            if (questionSeven === pcGames[j]) {
                console.log(questionSeven);
                console.log('correct answer');
                alert('Fun game!! I love it!');
                var correct = 'correct';
                keepingScore++;
                break;
            } else if ((questionSeven !== pcGames[j] && (j === pcGames.length - 1)) && i < numberTries) {
                console.log(questionSeven);
                console.log('wrong answer');
                alert('Nope, but I should check that out. Guess again.');
                break;
            } else if (questionSeven !== pcGames[j] && i === numberTries) {
                console.log(questionSeven);
                console.log('wrong last');
                alert('ALL of the correct answers; Monster Hunter, League of Legends and Overwatch');
                break;
            }
        }
    if (correct) {
        break;
    }        
    }
}



question1();
question2();
question3();
question4();
question5();
question6();
question7();

alert('Tallying up your score now......beep booop boop beeeeeeeeeep............beep...THE RESULTS ARE IN!!!! badadadadadadadadadada...You got ' + keepingScore +'/7 answers correct!!!! Don\'t you feel like you know me now? \'Till next time Space Cowboy.');
