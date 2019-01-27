//exercise 1 string sum
console.log('First exercise');

const first = 'Hello';
const second = 'World';

const sum = (`${first} ${second}`);
console.log(sum);

//exercise 2 multiply 
console.log('Second exercise');

const multiply = (a = 3, b = 5) => (a * b);
console.log(`${multiply(5)}`);

//exercise 3 average
console.log('Third exercise');
const average = (...args) => {
    let sum = 0;
    args.forEach((arg) => {
        sum += arg;
    })

    return sum / args.length;
}
console.log(`Average is ${average(4, 2, 4, 6)}`)

// exercise 4 average
console.log('Forth exercise');
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
const goodGrades = average(...grades);
console.log(goodGrades);

//exercise 5 string array
console.log('Fifth exercise');
const array = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstName, , lastName] = array;
console.log(`${firstName} ${lastName}`);


