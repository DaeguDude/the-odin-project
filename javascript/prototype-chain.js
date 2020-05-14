// var myFriends = {name: "Pete", age: 27};

// // To find the name property below, the search will begin 
// // directly on the myFriends object, and it will immediately
// // find the name property because we defiend the property
// // name on the myFriend object.
// // This could be thought of as a 'prototype chain with one
// // link'
// console.log(myFriends.name);

// // The search for the toString() method will also begin
// // on myFriends object, but we can't find it.
// // So compiler will then search for it on the myFriends
// // prototype.
// // And since all ojbects created with the object lietral
// // inherits from Object.prototype, the toString method
// // will be found on Object.prototype
// myFriends.toString();

function People() {
  this.superstar = "Michael Jackson";
}

// Define 'athlete' property on the people prototype
// so that 'athlete' is accessible by all objects
// that use the People() constructor.
People.prototype.athlete = "Tiger Woods";

var famousPerson = new People ();
famousPerson.superstar = "Steve Jobs";

// This will show the property from the famousPerson
// prototype(People.prototype), since the athlete
// property was not defined on the famousPerson object
// itself.
console.log(famousPerson.athlete);

console.log(famousPerson.toString());
