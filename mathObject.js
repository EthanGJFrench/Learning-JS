
alert('welcome to this webpage');

var input = parseInt(prompt('Please input a random number. This will the the max value that can be generated.'));

var rNumber = Math.floor(Math.random()* input) + 1;

document.write('Hi! Your randomly generated number between 1 and ' + input + ' is ' + rNumber + '.');
