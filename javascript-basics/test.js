let userNumber = 10;

nextPrime:
for (let i = 2; i <= userNumber; i++) {
  for (let a = 2; a < i; a++) {
    if(i % a == 0) break nextPrime;
  }

  console.log(i);
}
