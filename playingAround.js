
// How to turn a string into and int

// Getting string from user input. Saving the value to var drive
var drive = prompt('How many years have you been driving for?');

// Converting visitorAge variable to an Int. Saving value to driveAwnser 
var driveAwnser = parseInt(drive * 365);

// Changing back to string(for fun/demonstration)
var awnserString = String(driveAwnser); 

// Writing string onto webpage and combining the awnserString
document.write('If you have been driving for ' + drive + ' ammount of years, you have been driving for ' + awnserString
+ ' days!');

// Asking user if informantion is true
var info = prompt('Is this information you have entered correct? (y/n)');

// Executing command if infoCheak = true (is = 'y') 
if (info = 'y') {

    info = true;

}

// Executing command if infoCheak is not = 'y'
if(info = true) {

    console.log('The informantion you have given is incorect. Please referesh the page to try again.');

}