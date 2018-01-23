/*

//Fac adunarea
function sum(a, b) {
    var add = a + b;
    return add;
}
console.log('Sum result is: ' + sum(2, 5));

//Fac scaderea
function diff(c, d) {
    var minus = c - d;
    return  minus;
}
console.log('Difference result is: ' + diff(6, 3));

//Fac inmultirea
function multiply(e, f) {
    var multi = e * f;
    return multi;
}
console.log('Multiplication result is: ' + multiply(2, 2));

//Fac impartirea
function divide(g, h) {
    var div = g / h;
    return div;
}
console.log('Divide result is: ' +divide(8, 2));

//Adum primele 2 operatii
function sum2(add, minus) {
    var add2 = add + minus;
    console.log(add2);
    return add2;
}

var num = parseInt(sum(2, 5)); //Transform din string in numar ca sa nu imi dea NaN
var num2 = parseInt(diff(6, 3));

console.log('Sum result of the first two opperations is: ' + sum2(num, num2));

//Adun ultimele 2 operatii
function sum3(multi, div) {
    var add3 = multi + div;
    return add3;
}

var num3 = parseInt(multiply(2, 2));
var num4 = parseInt(divide(8, 2));

console.log('Sum result of the last two opperations is: ' + sum3(num3, num4));

//Fac adunarea totala 
function sumAll(sum2, sum3) {
    var total = sum2 + sum3;
    return total;
}

var num5 = parseInt(sum2(num, num2));
var num6 = parseInt(sum3(num3, num4));

console.log('Total sum result is: ' + sumAll(num5, num6));



//Primul exercitiu: Write a function called add7 that takes one number and returns that number + 7.

function add7(number) {
    var add = number + 7;
    return add;
}

console.log('The result of adding 7 to the number is: ' + add7(3));

// Al doiel ex. Write a function called multiply that takes 2 numbers and returns their product.

function multiply2(number1, number2) {
    var product = number1 * number2;
    return product;
}

console.log('The result of multiplying two numbers is: ' + multiply2(2, 10));

*/




//Exercitii facute pe 23.01.


//Exercitiu de pe mail
/*
var res = input();

function input() {
    var userInput = prompt('Enter a number: ');
    if (isNaN(userInput)) {
        return -1;
    } else {
        return userInput;  
    }
}

   
if(res === -1) {
    alert('Not a Number!'); 
} else {
    alert(res);
}

*/


// Write a function called capitalize that takes a string and returns that string with only the first letter capitalized

/*

var input = capitalize();

function capitalize() {
    var userInput = prompt('Enter a word to be capitalized: ');
    return userInput.charAt(0).toUpperCase() + userInput.slice(1); 
    
}

alert('The word is now capitalized: ' + input);

*/

// Write a function called lastLetter that takes a string and returns the very last letter of that string:

var input = lastLetter();


function lastLetter() {
    var userInput = prompt('Enter a word to show it`s last letter: ');
    var word = userInput[userInput.length - 1];
    return word;
}

alert('This is the last letter: ' + input);




