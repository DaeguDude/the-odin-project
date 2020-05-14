let animal = {
  eat() {
    this.full = true;
  }
};

let rabbit = {
  __proto__: animal
};

console.log(rabbit);
rabbit.eat();
console.log(rabbit);