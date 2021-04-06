// Create a function that takes in one argument that is passed through a conditional statement.
// (For example, something like our haunted house door() function.) Print some resulting text to the console.
// Test all of your conditions to make sure you can receive all of your results back.


function ogAvengers(num){
  if (num == 1){
    return "iron man";
  }
  else if (num == 2){
    return "captain america";
  }
  else if (num == 3){
    return "thor";
  }
  else if (num == 4){
    return "hulk";
  }
  else if (num == 5){
    return "black widow";
  }
  else if (num == 6){
    return "hawkeye";
  }
  else {
      return "no other original avenger";
  }
}

console.log(ogAvengers(1)); // returns iron man
console.log(ogAvengers(2)); // returns captain america
console.log(ogAvengers(3)); // returns thor
console.log(ogAvengers(4)); // returns hulk
console.log(ogAvengers(5)); // returns black widow
console.log(ogAvengers(6)); // returns hawkeye
console.log(ogAvengers(7)); // returns no other original avenger
