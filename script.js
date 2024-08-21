//Chapter : 05

// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var num1 = 3;
var num2 = 5;
let add = num1 + num2;

document.write(`Sum of ${num1} and ${num2} is ${add} <br/>`);

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
document.write(`<h1>Arthematic Operator :</h1>`);
var num1 = 3;
var num2 = 5;
let subtraction = num1 - num2;

document.write(`subtraction ${num1} and ${num2} is ${subtraction} <br/>`);

var num1 = 3;
var num2 = 5;
let multiplication = num1 * num2;

document.write(`multiplication ${num1} and ${num2} is ${multiplication} <br/>`);


var num1 = 3;
var num2 = 5;
let division = num1 / num2;

document.write(`division ${num1} and ${num2} is ${division} <br/>`);

var num1 = 3;
var num2 = 5;
let modulus = num1 % num2;

document.write(`modulus ${num1} and ${num2} is ${modulus} <br/>`);

//------------------------------------------------------//

// 3. Do the following using JS Mathematic Expressions.

// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.

document.write(`<h1>Increment & Decrement:</h1>`);

declare_variable = "value after variable declaration is undefined";

document.write(`${declare_variable}`);

// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.

var value = 5;

document.write(`</br> initial value ${value}`);

//e. Increment the variable.
// //f. Show the value of variable in your browser like “Value
// after increment is: 6”.

value++;

num = 5 ;
newnum = ++num;
document.write(`</br> value after increment is ${newnum}`);


//g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”

value += 7;
document.write(`</br> Value after addition ${value}`);


// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.


value -= 1;
document.write(`</br> Value after decrement ${value}`);

// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

value %= 3;
document.write(`</br> The reminder is  ${value}`);

// ----------------------------------------


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:



tickets= 5;
ticketsCost = 600;
multiplication = tickets * ticketsCost;

document.write(`</br> Total cost to buy <b> ${tickets} </b> tickets to a movie is <b> ${multiplication} PKR </b>`);


// -------------------------------------------------------


// 5. Write a script to display multiplication table of any
// number in your browser. E.g.

document.write(`<h1>Tables:</h1>`);

var tables= 4;
var table = (`write a number to print table.`);

document.write(`Table of ${tables}</br>`);
document.write(`${tables} x 1 = ${tables *1} </br>`);
document.write(`${tables} x 2 = ${tables *2} </br>`);
document.write(`${tables} x 3 = ${tables *3} </br>`);
document.write(`${tables} x 4 = ${tables *4} </br>`);
document.write(`${tables} x 5 = ${tables *5} </br>`);
document.write(`${tables} x 6 = ${tables *6} </br>`);
document.write(`${tables} x 7 = ${tables *7} </br>`);
document.write(`${tables} x 8 = ${tables *8} </br>`);
document.write(`${tables} x 9 = ${tables *9} </br>`);
document.write(`${tables} x 10 = ${tables *10} </br>`);


// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

document.write(`<h1>The Temperature Converter:</h1>`);

var cT = 25;
var fT = 70;

var fT = cT *( 9 / 5 ) + 32;

document.write(`${cT}<sup>0</sup>C  is ${fT}<sup>0</sup>F </br>`);

var newCelsius = (70 - 32) * 5/9;
var newFt = 70;
document.write(`${newFt}<sup>0</sup>F is ${newCelsius}<sup>0</sup>C`);

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// MATH EXPRESSIONS | JAVASCRIPT
// Page 5 of 9
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

document.write(`<h1>Shopping Cart:</h1>`);

var price_1 = 650;
var quantity_Item_1 = 3;
var price_2 = 100;
var quantity_Item_2 = 7;
var shipping_Charges = 100;

var total_Cost = (650 * 3) + (100 * 7) + 100;

document.write(`Price of item 1 is ${price_1}</br>`);
document.write(`Quantity of item 1 is ${quantity_Item_1}</br>`);
document.write(`Price of item 2 is ${price_2}</br>`);
document.write(`Quantity of item 2 is ${quantity_Item_2} </br>`);
document.write(`Shipping Charges ${shipping_Charges}</br>`);

document.write(`Total cost of your order is is ${total_Cost}`);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser.

document.write(`<h1>Marks Sheet:</h1>`);

var totalMarks = 980;
var marksObtained = 804;

var percentage = (804 / 980) * 100;

document.write(`Total marks: ${totalMarks}<br/>`);
document.write(`Marks obtained: ${804}<br/>`);
document.write(`Percentage: ${percentage}%<br/>`);


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee).

document.write(`<h1>Currency in PKR:</h1>`);

var us_Dollars = 104.80 ;
var total_Dollars = 10;

var soudi_riyal = 28;
var total_Riyal = 25;

var total_PKR = (us_Dollars * total_Dollars) + (soudi_riyal * total_Riyal);

document.write(`Total Currency in <b>PKR:<b/> ${total_PKR}`);

// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression.

document.write(`<h1>Arithmetic Calculation:</h1>`);

var newNumber = 6;

var number_1 = 5;
var number_2 = 10;
var number_3= 2;

// var total_Result( (newNumber + number_1)  * (number_2  / number_3 ));

var calculations = (newNumber + number_1 ) * number_2 / number_3;
document.write(`Total Calculation is ${calculations}`);

// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

document.write(`<h1>Age Calculator:</h1>`);

var current_Year = 2016;
var birth_Year = 1992;

var age = (current_Year - birth_Year);

document.write(`Current Year: ${current_Year}</br>`);
document.write(`Birth Year: ${birth_Year}</br>`);
document.write(`Year Age: ${age}</br>`);


// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// MATH EXPRESSIONS | JAVASCRIPT
// Page 8 of 9
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

document.write(`<h1>The Geometrizer:</h1>`);

var radius = 20;
var pie = 3.142 ;

var circumference = (2 * pie * radius);
var area = (pie * radius * 2);

document.write(`Radius of a circle: ${radius}</br>`);
document.write(`The circumference is: ${circumference} </br>`);
document.write(`The area is: ${area} </br>`);


// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write(`<h1>The Lifetime Supply Calculator:</h1>`);

var favorite_Snack = "chocolate chip";
var current_age = 15;
var maximum_Age = 65;
var parDay_Snacks = 3;

var total_Chocolate = (50 * 3);

document.write(`Favourite Snack: ${favorite_Snack} </br>`);
document.write(`Current age: ${current_age} </br>`);
document.write(`Estimated Maximum Age: ${maximum_Age} </br>`);
document.write(`Amount of snacks par day: ${parDay_Snacks} </br>`);
document.write(`You will need ${total_Chocolate} chocolate chip to last you until the ripe old of ${maximum_Age} </br>`);



//------------------------------------------------------------------------------------------------------------------------//