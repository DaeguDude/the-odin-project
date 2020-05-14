let head = {
  glasses: 1
};

let table = {
  __proto__: head,
  pen: 3
};

let bed = {
  __proto__: table,
  sheet: 1,
  pillow: 2
};

let pockets = {
  __proto__: bed,
  money: 2000
};

<<<<<<< HEAD
console.time("pocket glasses");
console.log(pockets.glasses)
console.timeEnd("pocket glasses");

console.time("head glasses");
console.log(head.glasses)
console.timeEnd("head glasses");

=======
console.log(pockets.pen);
console.log(bed.glasses);
>>>>>>> 5fd0f9ea7c126903a41969d1a160a5f2c4c7750b
