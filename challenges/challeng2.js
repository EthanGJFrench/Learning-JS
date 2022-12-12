//1


const evenOrOdd = () => { // Func returns even or odd statement bases on user input

    if (number % 2 == 0) {
        console.log('number is even');
    } else {
        console.log('number is odd');
    }
};


//2 

const getCount = (str) => {// Func returns number of vowels in a string
    
    console.log(str);
    let count = 0;
    let vowelsStr = 'aeiou';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < vowelsArr.length; j++ ) {
            if (str.toLowerCase()[i] == vowelsStr[j]) {
                count++;
            }
        }
    }    
    return count;
};   

//3

const greet = (userName) => {// Func returns special greeting if userName == 'johnny'
    
    if (userName.toLowerCase() == 'johnny'){
        return 'hello seggciii boiii xxoxoxoxoxox';
    } else {
        return 'Welcome ' + userName +'!';
    }
};


//4

const isDivisble = (n, x, y) => {// Func checks to see if num is divisable by x and y
 
    const result = n % x;
    const result2 = n % y;

    if (result == 0 && result2 == 0){
        return 'Is divisable';
    } else {
        return 'Is not divisable';
    }
}

//OR.................................................................................

const isDivisble2 = (n, x, y) => {// Func checks to see if num is divisable by x and y
 
	let number1 = ((n % x == 0) && (n % y == 0)) == true ? 'Is divisable' : 'Is not divisable';
    console.log(number1);
}   
        
//5

const getNegNum = (n) => {// Returns negitave number UNLESS number is already negative
    
    if (n >= 0){
        n = n - (n * -1);
        return n;
    } else if (n <= 0) {
        n = n;
        return n;
    }
}

// 7
let array = [12, 4000, 20, 0, -100, - 34]

const findSmallestNumber = (array) => {// Returns the smallest intiger from an array
    smallestNum = 0

    for (let i =0; i < array.length; i++){

        if (array[i] < smallestNum){
            smallestNum = array[i];
        }
    } return smallestNum
}  

//Challenge 8

const sum = (num1) => {
    let array1 = [];
    sum1 = 0
    for (i = 0; i < num1; i++) {
        array1 = array1.concat(i);
        sum1 += i;
    }
    console.log(array1);
    return sum1 
    
}

//Challenge 8

const getAverage = (scoreArray) => {// Returns average of an array

    let count = scoreArray.length;
    let total = 0
    
    for (let i = 0; i < count; i++){
        total += scoreArray[i];
    }
    return Math.floor(total / count)
}

//Challenge 9

const rockPaperScissors = (player1,  player2) => {// Rock Paper Scissors *game*

    if (player1 === player2) return 'Draw!';
    rules = {rock: 'scissors', paper: 'rock', scissors: 'paper'}
    
    if (player2 == rules[player1]) {
        return 'player 1 Wins!'
    }
    else {
        return 'player 2 Wins!'
    }

}

//Challenge 10

const shortenedString = (aString) => {// Returns a string without the first and last character unless string >= 2 
    if (aString.length <= 2){
        return aString
    } else {
        return aString.substr(1, aString.length - 2);
    }
}

//OR.................................................................................

const shortenedString2 = (aString2) =>{
    return aString2.slice(1, -1)
}

//Challenge 11

anArray = [-200, 23, 32, 100, 600, -200, -200000]// Returns sum of positive numbers from an array 

const positiveSum = (arr) => {
    let posSum = 0
    for(i = 0; i < arr.length; i++){
        if (arr[i] > 0) {
            posSum += arr[i]
        }

    }
    return posSum
}   

//Challenge 13 

const caculator = (operator, valueA, valueB) => {
    let result4;
        switch(operator){
            case '+':
                result4 = valueA + valueB
                break;
            case '-':
                result4 = valueA - valueB
                break;
            case '*':
                result4 = valueA * ValueB
                break;
            case '/':
                result4 = valueA / valueB

        }
        return result4
}

//Challenge 13

const strRepeat = (strIterable, string1) => {
    console.log(strIterable, string1);
    return string1.repeat(strIterable)
}

//Challenge 14

function hero (bullets, dragons){
    bool = null    
    if(bullets / dragons >= 2){
            bool = true
        }else {
            bool = false
        }
        return bool
}








