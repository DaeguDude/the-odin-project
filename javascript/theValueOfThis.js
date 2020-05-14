let animal = {
  walk() {
    if (!this.isSleeping) {
      alert('I walk')
    }
  },
  sleep() {
    this.isSleeping = true;
  }
};

let rabbit = {
  name: 'White Rabbit',
  __proto__: animal
};

// modifies rabbit.isSleeping
rabbit.sleep();

console.log(rabbit.isSleeping);
console.log(animal.isSleeping);