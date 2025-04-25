
// How Prototype work
// In JS all objects are created from other objects

// * Prototype chain*

Object.prototype.customfunction = function() {
    console.log("This is custom function");
}

var myCustomFunction = {}
 myCustomFunction.customfunction() 

//  In this case we made a brand new function and push it to Object prototype, Using var we are gonna access it. At first MyCustomFunction check if customfunction is inside this variable if not found then use prototype chain and it gose at master Object

Object.prototype.myname = "My name is: Mahmud";
Object.prototype.mynamearr =  ['10, 20,30', 40, false];

console.log(myCustomFunction.mynamearr); 