//Reference - Udacity course - https://classroom.udacity.com/courses/ud356

//Symbol - immutable data type

const sym1 = Symbol("Apple");

console.log(sym1)

//Output - Symbol(Apple)

const bowl = {
  [Symbol('apple')]: { color: 'red', weight: 136.078 },
  [Symbol('banana')]: { color: 'yellow', weight: 183.15 },
  [Symbol('orange')]: { color: 'orange', weight: 170.097 },
  [Symbol('banana')]: { color: 'yellow', weight: 176.845 }
};
console.log(bowl);

//  The first banana doesn’t get overwritten by the second banana.
// Each property is a unique Symbol



//Iterator
const digits = [1, 2, 3, 4, 5];

const iterator = digits[Symbol.iterator]();

console.log(iterator.next());

//Output  - Object {value: 0, done: false}
// value - the data representing the next value
// done is true - iterator has reached the end of its sequence of values
// done is false - iterator is able to produce another value in its sequence of values




//Sets

const games = new Set();
console.log(games);

//Output - Set {}



const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);
games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');
console.log(games);

//Output - Set {'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart'}


games.has('Banjo-Tooie');


games.values();


//Map

const employees = new Map();

employees.set('apple.banana@live.com', { 
    firstName: 'apple',
    lastName: 'banana',
    role: 'Artist' 
});
employees.set('orange@live.com', {
    firstName: 'orange',
    lastName: 'Candy',
    role: 'Graphics Designer'
});
employees.set('grapes@live.com', {
    firstName: 'grapes',
    lastName: 'Rise',
    role: 'UI designer'
});

console.log(employees);

employees.has('grapes@live.com');


employees.next();
employees.values();
employees.keys();














