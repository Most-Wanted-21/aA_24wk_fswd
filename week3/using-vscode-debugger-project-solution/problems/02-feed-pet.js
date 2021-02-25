/*

Fix the `feedPet` function. `feedPet` should take in a pet name and return a
function that, when invoked with a food, will return the pet's name and a list
of foods that you have fed that pet.

Errors: 

1. foods.push(food) cannot be in the return
2. foods.join(', ') needs to be in the return

*/

function feedPet(name) {
  const foods = [];
  return (food) => {
    foods.push(food);
    return "Fed " + name + " " + foods.join(', ') + ".";
  }
}

const feedHydra = feedPet('Hydra');

console.log(feedHydra('bones')); // Fed Hyrda bones.
console.log(feedHydra('Hercules')); // Fed Hyrda bones, Hercules.

const feedHippogriff = feedPet('Hippogriff');

console.log(feedHippogriff('worms')); // Fed Hyrda worms.
console.log(feedHippogriff('crickets')); // Fed Hyrda worms, crickets.
console.log(feedHippogriff('chicken')); // Fed Hyrda worms, crickets, chicken.