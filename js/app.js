'use strict';

var userName = prompt('Hello, what is your name?');
alert('nice to meet you ' + userName);

var questionUno = prompt('Is my name Ricardo?');

if(questionUno.toLowerCase() === 'yes' || questionUno.toLowerCase() === 'y'){
    // console.log('You are correct!');
    alert('You are correct!');
} else {
    // console.log('Nope, wrong answer.');
    alert('Nope, wrong answer.');
}


var questionTwo = prompt('Was my first language was English?');


if(questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n'){
    // console.log('You are correct!');
    alert('You are correct!');
} else {
    // console.log('Nope, wrong answer.');
    alert('Nope, wrong answer.');
}


var questionThree = prompt('Did I get an associates degree in Las Vegas, Nevada?');


if(questionThree.toLowerCase() === 'no' || questionThree.toLowerCase() === 'n'){
    // console.log('You are correct!');
    alert('You are correct!');
} else {
    // console.log('Nope, wrong answer.');
    alert('Nope, wrong answer.');
}


var questionFour = prompt('Did I work at a family practice in Las Vegas?');


if(questionFour.toLowerCase() === 'yes' || questionFour.toLowerCase() === 'y'){
    // console.log('You are correct!');
    alert('You are correct!');
} else {
    // console.log('Nope, wrong answer.');
    alert('Nope, wrong answer.');
}


var questionFive = prompt('Did my wife and I start dating while playing Pokemon Go?');


if(questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y'){
    // console.log('You are correct!');
    alert('You are correct!');
} else {
    // console.log('Nope, wrong answer.');
    alert('Nope, wrong answer.');
}

document.write('Welcome to my \"About Me\" ' + userName);
alert('Welcome to my \"About Me\" ' + userName);

