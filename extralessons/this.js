
// this key wornd in JS
// * Implicit binding*
const house = {
    name: "My House",
    rooms: 4,
    color: "blue",
    getDetails: function() {
        console.log(`House Name: ${this.name}, Rooms: ${this.rooms}, Color: ${this.color}`);
    }
}

// * Implicit binding in here house object will work as  this
house.getDetails(); 


// * Explicit binding*

var car = function(color){
    console.log(this.name, color );
}

const bmw = {
    name: "BMW",
    model: "X5",
    year: 2020
}

const color = 'Black';

car.call(bmw, color); // Explicit binding using call method, this will work as bmw object

// .bind
const bindcolor = 'Yellow'
car.bind(bmw, bindcolor)(); // Explicit binding using bind method, this will work as bmw object

// In Apply we can send array of arguments
const black = 'red';
const white = 'White';
const red = 'Red';
const colors = [black, white, red];
car.apply(bmw, colors); // Explicit binding using apply method, this will work as bmw object



// * New binding*


const Person = function(name, age) {
    // * here this will create a new object and assign it to this
    this.name = name;
    this.age = age;
    console.log(this.name, this.age);
}

// in here we are creating a new object using the Person constructor function, so this will work as a new object
const person1 = new Person("Mahmud", 25); // New binding, this will work as Person object


// * Window binding*
