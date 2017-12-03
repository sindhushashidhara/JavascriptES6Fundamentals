//Reference - Udacity course - https://classroom.udacity.com/courses/ud356

//let and const
let instructor = "James";
instructor = "Richard";
console.log(instructor);

const student = {
  name: 'Richard Kalehoff',
  guardian: 'Mr. Kalehoff'
};


//Template Literals

let message = `${student.name} please see ${teacher.name} in ${teacher.room} to 
                pick up your report card`;


//Destructuring

const gemstone = {
    
    type: "quart",
    color : "sapphire",
    karat : 21.6
};

const { type, color, karat} = gemstone;

console.log(type, color, karat);


//Object Literal Shorthand

let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
  type,
  color,
  carat,
  calculateWorth: function() {
    // will calculate worth of gemstone based on type, color, and carat
  }
};


//For of 

const digits = [0, 1, 2, 3];

for (const digit of digits) {
  if (digit % 2 === 0) {
    continue;
  }
  console.log(digit);
}


//Spread Operator

const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);

// Output: Don Quixote The Hobbit Alice in Wonderland Tale of Two Cities



//Rest Paramater - Indefinite number of elements

const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);

// Output: 20.17 18.67 1.5 ["cheese", "eggs", "milk", "bread"]

function sum(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
  return total;
}


//Arguments object

function sum() {
  let total = 0;  
  for(const argument of arguments) {
    total += argument;
  }
  return total;
}


