// Create an array of strings and use random() to select random entries and add them to a sentence, printing the result to the console.

console.log("a random description of an animal:");

//array of adverbs
let firstString = ["very", "extremely", "abnormally", "crazily"];
let adverb = firstString[Math.floor (Math.random() * firstString.length)];

//array of emotions
let secondString = ["happy", "angry", "sad", "furious", "excited", "confused"];
let emotion = secondString[Math.floor (Math.random() * secondString.length)];

//verb variables
let thirdString = ["llama", "koala", "alligator", "bunny", "octopus"];
let noun = thirdString[Math.floor (Math.random() * thirdString.length)];

// prints a random description of an animal
console.log("a",adverb,emotion,noun);
