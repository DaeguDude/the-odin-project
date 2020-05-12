// Every JavaScript function has a prototype property(It's empty by default).
// And you attach properties and methods on this prototype property
// when you want to implement inheritance
function Plant() {
  this.country = "Mexico";
  this.isOrganic = true;
}

// Add the showNameAndColor method to the Plant prototype property
Plant.prototype.showNameAndColor = function() {
  console.log("I am a " + this.name + " and my color is " + this.color);
}

// Add the amIOrganice method to the Plant prototype property
Plant.prototype.amIOrganice = function() {
  if(this.isOrganice)
  console.log("I am organice, Baby!");
}

// Another function called 'Fruit'
function Fruit(fruitName, fruitColor) {
  this.name = fruitName;
  this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's constructor, thus inheriting all
// of Plant.prototype methods and properties
console.log('Fruit prototype before inheriting:');
console.log(Fruit.prototype);

Fruit.prototype = Plant.prototype;
console.log('Fruit prototype after inheriting from Plant.prototype:');
console.log(Fruit.prototype);

// Creates a new object, aBanana, with the 'Fruit' constructor
var aBanana = new Fruit("Banana", "Yellow");

// aBanana uses the name property from the aBanana object prototype, which is
// Fruit.prototype, which is Plant.prototype
console.log(aBanana.name);

// Uses the showNameAndColor method from the Fruit object prototype, 
// which is Plant.prototype. The aBanana object inherits all the properties
// and methods from both the Plant and Fruit functions.
console.log(aBanana.showNameAndColor());

aBanana.country = "Brazil";
console.log(aBanana.country);

aBanana.isOrganic = true;
console.log(aBanana.isOrganic);

console.log(aBanana.name);
console.log(aBanana.color);




