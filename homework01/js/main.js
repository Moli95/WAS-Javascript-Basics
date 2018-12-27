// decalration of varaibles
let name, surname, age, nationality, favouriteColor;
const PI = 3.14;

name = 'Tom';
surname = 'Swirski';
age = '99';
nationality = 'Polish';
favouriteColor = 'blue';

// Example sentences with variables
// ES6 version
console.log(`My name is ${name} ${surname}.`);
console.log(`I have ${age} years old.`);
console.log(`My favourite color is ${favouriteColor}.`);
console.log(`PI value: ${PI}`);
// old one
console.log('My name is ' + name + ' ' + surname + '.');
console.log('I have ' + age + ' years old and I am ' + nationality + '.');
console.log('My favourite color is ' + favouriteColor + '.');
console.log('PI value: ' + PI);

// Change a value of age variable
age = 30;

// Change color of element with id 'main-header'
document.getElementById('main-header').style.color = 'pink';

// document.getElementsByClassName('list-element') returns HTMLCollection that's why we have go through each one of elements of this collection.
document.getElementsByClassName('list-element')[0].style.color = 'blue';
document.getElementsByClassName('list-element')[1].style.color = 'blue';
document.getElementsByClassName('list-element')[2].style.color = 'blue';

// check if user is an adult
// ES6 version
(age >= 18) ? //condition
(console.log('You are an adult.')) : //if true
(alert('No access.')); // if false

// old version
if (age >= 18) {
	console.log('You are an adult.');
} else {
	alert('No access.');
}