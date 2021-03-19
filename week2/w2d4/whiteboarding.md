function createCounter () {
  let count = 0;

  return function() {
    count++;
    return count;
  }

}

let counter1 = createCounter();


let counter2 = createCounter();
