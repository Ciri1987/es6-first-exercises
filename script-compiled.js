'use strict';

//exercise 1 string sum
console.log('First exercise');

var first = 'Hello';
var second = 'World';

var sum = first + ' ' + second;
console.log(sum);

//exercise 2 multiply 
console.log('Second exercise');

var multiply = function multiply() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
    return a * b;
};
console.log('' + multiply(5));

//exercise 3 average
console.log('Third exercise');
var average = function average() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var sum = 0;
    args.forEach(function (arg) {
        sum += arg;
    });

    return sum / args.length;
};
console.log('Average is ' + average(4, 2, 4, 6));

// exercise 4 average
console.log('Forth exercise');
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var goodGrades = average.apply(undefined, grades);
console.log(goodGrades);

//exercise 5 string array
console.log('Fifth exercise');
var array = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = array[2],
    lastName = array[4];

console.log(firstName + ' ' + lastName);
