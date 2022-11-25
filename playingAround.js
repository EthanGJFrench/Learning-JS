
var drive = prompt('How many years have you been driving for?');

var driveAwnser = parseInt(drive) * 365;

var awnserString = String(driveAwnser);

document.write('If you have been driving for ' + drive + ' ammount of years, you have been driving for ' + awnserString
    + ' days!');

var infoCheak = prompt('Is this information you have entered correct? (Type y/n)');
var lowerInfoCheak = infoCheak.toLowerCase();

if (lowerInfoCheak == 'y') {
    console.log('Thankyou for this accurate information');
} else {
    console.log('This information is incorrect. Please refresh this page to retake this Quiz');
}



