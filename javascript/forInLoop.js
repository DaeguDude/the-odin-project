let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
}

// Object.keys only returns own keys
alert(Object.keys(rabbit)); // jumps

// for..in loops over both own and inherited keys
for(let prop in rabbit) alert(prop);
