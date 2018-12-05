// 1. Write a program to print ‘hello world’

//In Web Browser Developer tool console.

console.log('Hello world')

          // output-'Hello world'

//2. Variables, Data-types and operators

//  Declare a variable and test variable name rules and log the variable value.

 var a = 10;
 console.log(typeof a);
 console.log(a);

            // output - number

//  Comment Javascript code (single and multi-line comment).

var a = 10;
//console.log(typeof a);
console.log(a);

           // output - 10

//  Store values using assignment operator.
	// Create to two variables ‘a’ and ‘b’
	// Assign variable a with value 5
	// Assign the value of a to b

 var a,b;
var a = 5;
var b = a;
console.log(a)
console.log(b)

           // output - 5, 5

//  Add two numbers using plus operator.

var a = 5;
var b = 6;
console.log(a+b)

           // output - 11

//  Subtract One number from another

var a = 5;
var b = 3;
console.log(a-b)

           // output - 2

//  Multiply two numbers

var a = 5;
var b = 3;
console.log(a*b)

           // output - 15

//  Divide one number by other

var a = 15;
var b = 3;
console.log(a/b)

           // output - 5

//  Increment a number using both pre and post increment.

var a = 15;
var b = 3;
a++;           // post increment
console.log(a);
++b;           // pre increment
console.log(b)

             // output - 15, 4

//  What will be the output of the following program.
// var i = 4;
// var j = 21;
// var k = ++i * 7 +2 - j--;
// console.log(k)

             // output - 16

//  Write a program to get remainder of 17 divided by 3.

var a = 17;
var b = 3;
console.log(a % b)

             // output - 2

//  Declare a string variable and log the type of of variable.

var str = "Hello World"
console.log(typeof str)

             // output - "string"

//  Print a string “ Alan said, “Peter is learning Javascript” ”(ignore first and last quote) use escape character.

//  Concat two strings using plus operator.

var s1 = "Hello "
var s2 = "World"
console.log(s1+s2)

             // output - "Hello World"

//  Concat two strings using plus equal (+=) operator.

var s1 = "Hello "
s1 +="world"
console.log(s1)

             // output - "Hello World"

//  Append a number variable to string.

var a = 112;
var str = "Bheemaraj"
str += a;
console.log(str)

             // output - "Bheemaraj112"

//  Store multiples values in one variable using JS array.

var arr = [10, 20, 'ramu', true]
console.log(arr)

             // output - [10, 20, "ramu", true]

//  Verify a variable is an array using isArray() method.

var a = 21
var arr = [1,21,25,26,8,9,65,4]
console.log(Array.isArray(a))
console.log(Array.isArray(arr))

             // output - false, true

//  Find the length of an array

var arr = [10, 30, 'Bheemaraj', true]
console.log(arr.length)

             // output - 4

//  Create an array with five elements and access the 3rd element using indexes.

var arr = [10, 30, 'Bheemaraj', true, 5]
console.log(arr[3])

             // output - true

//  Create an array with 10 elements and then update the 5th and 6th position with new values using index.

var arr = [1,21,25,26,8,9,65,4,9,10]
arr[4] = 32;
arr[5] = 66;
console.log(arr)

             // output - [1, 21, 25, 26, 32, 66, 65, 4, 9, 10]

//  Add a element to an existing array using push() method.

var ar = [1,2,3,4,5]
ar.push(10)
console.log(ar)

             // output - [1, 2, 3, 4, 5, 10]
