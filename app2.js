//Reference - Udacity course - https://classroom.udacity.com/courses/ud356

//Arrow Functions

const upperCaseNames = ["Ram" , "Raghu", "Laskhmi"].map(
name => name.toUpperCase()
);



const greet = name => `Hello ${name}`;

greet("Vidhya");



const sayHi = () => console.log('I am Udacity Student!');
sayHi();



const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');



const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map( name => {
  name = name.toUpperCase();
  return `${name} has ${name.length} characters in their name`;
});


//Prototypes

// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(() => { // an arrow function is passed to setTimeout
    this.scoops++;
    console.log('scoop added!');
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();


//Default Function Parameters

function greet(name, greeting) {
  name = (typeof name !== 'undefined') ?  name : 'Student';
  greeting = (typeof greeting !== 'undefined') ?  greeting : 'Welcome';

  return `${greeting} ${name}!`;
}


