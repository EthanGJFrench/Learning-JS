/* 
1)
    
- This function will return undefined;
*/

function multiply(a, b) {  
    a * b
}


//The solution to this problem is to add a return statement.


function multiplySolution(a, b) {  
    return a * b
}

/* 
2)

This block of code will always return name = 'neptune'.
*/

function getPlanetName(id) {
    var name;
    switch(id){
        case 1:
            name = 'mercury'
        case 2:
            name = 'venus'
        case 3:
            name = 'Mars'
        case 4:
            name = 'earth'
        case 5:
            name = 'jupiter'
        case 6:
            name = 'Saturn'
        case 7:
            name = 'uranus'
        case 8:
            name = 'neptune'
    }
    return name;
}

/*
This is because there are no break statements after each case statement. In this case, there is no break statement and so the rest of the code in the swtch statement is executed.

Our soulution to this is to add a break statement after each case statement. This is so that when name = neptune, we break out of the swich statement instead of iterating though each case.
*/

function getPlanetNameSolution(id) {
    var name;
    switch(id){
        case 1:
            name = 'mercury'
            break;
        case 2:
            name = 'venus'
            break;
        case 3:
            name = 'Mars'
            break;
        case 4:
            name = 'earth'
            break;
        case 5:
            name = 'jupiter'
            break;
        case 6:
            name = 'Saturn'
            break;
        case 7:
            name = 'uranus'
            break;
        case 8:
            name = 'neptune'
            break;
    }
    return name;
}

/* 
3)

- Reverse the string;

One solution is to use built in methods.
*/

const reverseStringMethod = (string) => {
    splitStr = string.split('');
    revArray = splitStr.reverse();
    joinArray = revArray.join('');
    return joinArray;
}

// We can abbreviate the expression so that we can write less code. 

const reverseStringMethodAbbr = (string) => {
    return string.split('').reverse(). join('');
}

// This second method is a loop that iterates through the string backwards adding each addition of "i" to a new variable.

const reverseStringLoop = (string) => {
    let resultStr = '';
    for (i = string.length -1; i >= 0; i-- ) {
        resultStr += string[i];
    }
    return resultStr;
}

/* 
4)

- Return even or odd;


The key to our solution is the modulus operator. The modulus ooperatior returns the remainder of 2 integers that have been divided. If we % our number by 2, if our number is even, our number is odd. If the remainder our number / 2 is 0, our number is even. 

We can chain conditional statements together to evaluate pram(numEvenOrOdd). 

In this solution, notice how we have added a specific condition for if no pram(numEvenOrOdd == null) is passed.
*/

function evenOrOddElseIf (numEvenOrOdd) {
    
    if(numEvenOrOdd == null){
        return 'You did not input a number to evaluate'
    }
    else if (numEvenOrOdd % 2 == 1){
        return 'Your number is odd'
    } else {
        return 'Your number is even'
    }
 }

 // In this solution, we have nested a ternary within an else statement.

 function evenOrOddTernary (numEvenOrOdd) {
    if (numEvenOrOdd == null){
        return('You did not input a number to be evaluated')
    } else {
        return (numEvenOrOdd % 2 == 1 ? 'Your number is odd' : 'Your number is even');
    }
      
 }

 /*
 5)

- Return the number of vowels [a, e, i, o, u];

In this solution, we loop through our pram(str) with our i variable.

For each iteration of str[i], we loop through vowels[x]. 

We then cheak to see if our iteration of vowels[x] == our current iteration of str[i]. If so, we iterate our return variable by 1.

In this example, we have added a break statement so that if (vowels[x] == str[i] = true), we break out of the vowel loop as it is not necessary to complete the iteration to of the str vowels loop 
const vowels = ['a', 'e', 'i', 'o', 'u'].
*/

const getNumOfVowelsLoop = (str) => {
    let numOfVowelsLoop = 0;
    for (let i = 0; i < str.length; i++) {
        for (let x = 0; x < vowels.length; x++) {
            if (str[i] == vowels[x]){
                numOfVowelsLoop++;
                break;
            }
        }
    }
    return numOfVowelsLoop;
}

// Instead of using 2 loops, we can use a switch case statement in place of the vowels loop (we don't need an array of vowels to loop through).


function getNumOfVowelsSwitch(str){
    let numOfVowelsSwitch = 0;
    for (let i = 0; i <  str.length; i++){
        switch(str[i]) {
            case 'a':
                numOfVowelsSwitch++;
                break;
            case 'e':
                numOfVowelsSwitch++;
                break;
            case 'i':
                numOfVowelsSwitch++;
                break;
            case 'o':
                numOfVowelsSwitch++;
                break;
            case 'u':
                numOfVowelsSwitch++; //Notice how we dont need a break keyword for our last case statement. This is because we don't need to break out of the switch statement as we break out of the switch when we reach the last case statement. 
        }
    } 
    return numOfVowelsSwitch
}

/*
6)

- Create a funtion that returns a greeting to a user. If the userName == 'Johnny', give a special greeting ;) 

This function returns a greeting to a user. This function is ment to give a diffrent return value when the userName 'johnny' is entered.

The solution the greeting fucntion, that takes userName pram. If userName.toLowerCase() != 'johnny', (if the pram that is passsed is not 'johnny').

If the userName.toLowerCase() == 'johnny', execute a diffrent block of code.
*/ 

const greeting = (userName) => {
    if (userName.toLowerCase() == 'johnny'){
        console.log("It's my night in shining armor <3 <3 <3")
        return 'Welcome ' + userName + ', ' + 'my LOVE!';
    } else {
        console.log('Greetings, npc!')
        return 'Welcome ' + userName;
    }
}

/*
7)

- Create a funtion that cheaks if a number is divisable by 2 diffrent numbers;
 

We know if (divNum / isdiv#) % == 0, our divNum is divided into whole numbers.
*/

const isDivisable = (divNum, isDiv1, isDiv2) => {
    const result = divNum / isDiv1 ;
    const result2 = divNum / isDiv2;
    console.log(result);
    console.log(result2);
    if (result % 1 == 0 && result2 % 1 == 0){
        return 'is diviable'
    } else {
        return 'is not divisable'
    }
}

/*
8)

- Create a function that finds the smallest int in an array;


This solution is returning undefinded. I am not sure why....

UPDATE: i figured out why. We originally did not asssign a value to smallestNum, so there was no value to compare with arrayOfNums[i]. 

The solution is NOT to declare smallestNum = 0. This is because 0 is the smallest number we can have (problem specified that the (pram) arrayOfNums can only be 0 or positive). Our solution is to set our smalletNum variable to the first item in our array (arrayOfNums[0]) by using an if statement. We declare that if our iterable(i) == 0 (the first iteration of our loop), we set smallestNum = arrayOfNums[i] (the first index in our array). In this case, our first iteration == 4. The loop will then continue to iterate through the i iterable.  
*/


numArray = [4, 100, 2011, 300, 1050200, 3]    

function findSmallestInt (arrayOfNums) {
    let smallestNum;
    for(let i = 0; i < arrayOfNums.length; i++) {
        if (i == 0){
            smallestNum = arrayOfNums[i];
        }
        if (arrayOfNums[i] < smallestNum) {
            smallestNum = arrayOfNums[i]
        }   
    }
    return smallestNum;
}

/*
9)

- Write a function that findd the summation of every number from 1 to n;

Our solution is to create a function with a loop and we set our i iterable to 1. For every iteration of our loop, we add our return value, adding our iterable variable[i] to our return value.
*/ 

const summation = (summationNum) => {
    let returnNum = 0;  
    for (i = 1; i <= summationNum; i++) {
        returnNum += i;
    }
    return returnNum
}

/*
10)

- Write a function that find the median of an array of numbers;

This solution outputs the median number from an array of numbers. Our function takes the pram arrayOfNumsmedian. Our median funtion loops through arrayOfNumsMedian. For each iteration of our loop, we add the value of each item in our array to our returnMedian variable.


*/
testScoresSample = [69, 73, 100, 89, 98, 40, 49, 57];

const median = (arrayOfNumsMedian) => {
    let returnMedian = 0;
    for (i = 0; i < arrayOfNumsMedian.length; i++){
       returnMedian += arrayOfNumsMedian[i]; 
    }
    return Math.floor(returnMedian / arrayOfNumsMedian.length);
}


/*
11)

- Write a paperSissorsRock function;

In this solution, we have a funtion called paperSissorsRock. This function takes the parameter player1 and player2. We have have a chain if conditional statements. The first one checks if player1 == player2, and returns 'Draw!' if the condition is meet. 

We then declare an object that defines the 'rules' of the game. We use our rules{} to define the rules and determine if player1 or plauer2 wins (player2 == the rules[player1]). The object helps us determine if the value of player2 == the variable assigned to the value in rules[player1]. If this == true, we return 'Player 1 wins!'.

We know that there are only 3 outcomes to paper sissors rock; A draw, player1 winning, and player2 winning. We have aready defined the condtions for there to be a draw and a player1 win. The only other possible condition is a player2 win, so for or last conditional We can declare en else statement that will execute if the funtion is neither a draw or a player 1 win. If so, our function returns 'Player 2 wins!'.  
*/

const paperSissorsRock = (player1, player2) => {
    if (player1 == player2) {
        return 'Draw!'
    }
    const rules = {rock: 'sissors', paper: 'rock', sissors: 'paper'}
    if (player2 == rules[player1]){
        return 'Player 1 wins!'
    } else {
        return 'Player 2 wins!'
    }
}

/*
12)

- Create a function that removes the first and last character from a string 

In this solution, we have used the substr method on our str pram to return a new str with the first and last charater removed. 

First the function checks to see if typeof removeFrom == 'string'. If typeof removeFrom != 'string', we return a statement letting the user know to enter a valid parameter.

We have included a conditional so that if out str.length <= 2, we return str. This is because if there are <= 2 characters in our str pram, our function will return an empty string. 

If removeFrom == string && removeFrom.length >= 3, we use the substring() method on removeFrom to return a substring that without the first and last characters in removeFrom. 

To get the exclude the first and last index from our return value, we set our first pram to 1. This is because we want to exclude removeFrom[0].
*/

const removeFirstAndLastItem = (removeFrom) => {
    if (typeof removeFrom != 'string'){
        return('Enter a valid parameter');
    }
    else if (removeFrom.length <= 2){
        return removeFrom;
    }
    else if (removeFrom.length >= 3){
        return removeFrom.substring(1, removeFrom.length-1);
    }
}
/*
- Create a function that returns the sum of all the positive numbers;


*/













