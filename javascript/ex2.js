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

console.time("pocket glasses");
console.log(pockets.glasses)
console.timeEnd("pocket glasses");

console.time("head glasses");
console.log(head.glasses)
console.timeEnd("head glasses");

