//Challenge 1!

let numberVar = 0; //var decleared with 'const' cannot be redecleared.

numberVar ++
numberVar ++
numberVar ++

console.log('challenge 1 Awnser: ' + numberVar); //AWNSER: 3, numberVar iterateed 3 times.

//Challenge 2!

const firstNumber = 20; 
const secondNumber = '20';

const result = firstNumber === secondNumber;

console.log('challenge 2 Awnser: ' + result); //AWNSER: false. Datatypes not the same. 

//Challenge 3!

const expression1 = 100 % 50;
const expression2 = 100 / 50;
const expression3 = expression1 < expression2;
const expression4 = expression3 && 300 + 5 === 305;
const expression5 = !expression4 

console.log('Challenge 3 Awnser: ' + expression5); //AWNSER: False

//Challenge 4!

const myObj = {
    prop1: 'first value',
    prop2: 20
};

const myArray = [40, 50, 2];

const result2 = myObj.prop2 === (myArray[0] / myArray[2]); //AWNSER: True

console.log('Challenge 4 Awnser: ' + result2);

//Challenge 5!

const myObject = {
    nestObj1: {
        price: 100,
        quantity: 5
    },
    nestObj2: {
        price: 150,
        quantity: 2
    }
};

const myArray2 = [myObject.nestObj1, myObject.nestObj2];

const result3 = (myArray2[0].price * myArray2[0].quantity) >
                (myArray2[1].price * myArray2[1].quantity);//AWNSER: true

console.log('Challenge 5 Awnser: ' + result3);

//Challenge 6

    const sum = (num1) => {
        let array1 = [];
        summ = 0
        for (i = 0; i < num1; i++) {
            array1 = array1.concat(i);
            summ += i;
        }
        console.log(array1);
        return summ 
        
    }


