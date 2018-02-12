// // ### Episode 1
//
// var name = 'Keith';
//
// var printName = function() {
//   console.log('My name is ' + name );
// };
//
// printName();
//
// // output will be a console statement of 'My name is Keith'
// // this is because the name is defined outside the method and so is available within



// // ### Episode 2
//
// score = 5;
//
// var result = function() {
//   var score = 3;
//   return score;
// };
//
// console.log(result());
//
// // this will return 3 as the score returned is the one defined within the function
// // rather than the global one outside of the function


// // ### Episode 3
//
// var myAnimals = ['Chickens', 'Cats', 'Rabbits'];
//
// var listAnimals = function() {
//   myAnimals = ['Ducks', 'Dogs', 'Lions'];
//   for(var i=0;i<myAnimals.length; i++){
//     console.log(i + ": " + myAnimals[i]);
//   }
// }
//
// listAnimals();
//
// // this will return "0: Ducks" "1: Dogs" "2: Lions"
// // myAnimals is created as a new global variable in the function and that is what
// // is looped through


// // ### Episode 4
//
// var suspectOne = 'Jay';
// var suspectTwo = 'Val';
// var suspectThree = 'Keith';
// var suspectFour = 'Rick';
//
// var allSuspects = function() {
//   var suspectThree = 'Harvey'
//   console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
// };
//
// allSuspects();
// console.log( 'Suspect three is:' + suspectThree );
//
// // the allSuspects() will return the names of all the suspects, except suspectThree will
// // be Harvey instead of Keith as a local variable is defined and has a different value
// // set within the function
// //
// // the final query of suspectThree will still return Keith


// // ### Episode 5
// var detective = {
//   name : 'Ace Ventura',
//   pet : 'monkey'
// };
//
// var printName = function(detective) {
//   return detective.name
// };
//
// var detectiveInfo = function() {
//   detective['name'] = 'Poirot'
//   return printName(detective);
// };
//
// console.log(detectiveInfo());
//
// // the log will show "Poirot" instead of the original name as the detective object
// // is visible within the scope of the detectiveInfo function
// // and when it is modified within that function the effect sticks.
// // so when printName is called with the detective it shows the new name


// // ### Episode 6
//
// var murderer = 'rick';
//
// var outerFunction = function() {
//   var murderer = 'marc';
//
//   var innerFunction = function() {
//     murderer = 'valerie';
//   }
//
//   innerFunction();
// }
//
// outerFunction();
// console.log('the murderer is ', murderer);
//
// // the murderer is originally rick. Inside the outerFunction a new local variable
// // named murderer is made which shadows the outer and has marc assigned. This is then called within
// // the innerFunction and which has valerie assigned
//
// // however the murderer variable outside the function is never modified
// // so the final log will show the murderer as being rick


// // ### Episode 7 - Where did the animals go?
//
// animal = "tiger"
// myAnimals = ["chicken", "goose"]
//
// const showAnimals = function(animalArray){
//   for(animal of myAnimals){
//     console.log(animal);
//   }
// }
//
// showAnimals();
// console.log(animal);


// ### Ad break - One small thing that will make your life easier! If you buy now.
const errorMessage = function(error){
  // if you don't toString below you get a huge message instead
  console.log("Error message:", error.toString());
  // below would show the full error details
  // console.log("Full error message including location:", error);
}


// // ### Episode 8 - Playing is fun!
//
// function play(){
//
//   if(true){
//     try{
//       xPlayFunction = 4;
//       var xPlayFunction;
//       console.log(xPlayFunction);
//     }
//     catch(error){
//       errorMessage(error);
//     }
//   }
//
//   try{
//     console.log(xPlayFunction);
//   }
//   catch(error){
//     errorMessage(error);
//   }
//
// }
// play()


// // ### Episode 9 - Is playing still fun?
//
// function playAgain(){
//
//   if(true){
//     try {
//       xPlayAgain = 3;
//       let xPlayAgain;
//       console.log(xPlayAgain);
//     }
//     catch(error){
//       errorMessage(error)
//     }
//   }
//
//   try {
//     console.log(xPlayAgain);
//   }
//   catch(error){
//     errorMessage(error)
//   }
//
// }
// playAgain()


// // ### Episode 10 - The Final Count, the Last Hurrah
//
// numberFive = 5;
// var   numberEight   = 8;
// const numberNine    = 9;
// let   numberFifteen = 15;
//
//
// const practiseScope = function(){
//   console.log("Number Five at top of practiseScope:", numberFive);
//   console.log("Number Ten at top of practiseScope: " + numberTen);
//
//   if(true){
//     var numberTen = 10;
//     let numberThree = 3;
//     console.log("NumberThree in IF statement:", numberThree);
//   } else {
//     var numberTen = 10;
//     let numberThree = "three";
//     console.log("NumberThree in ELSE statement:", numberThree);
//   }
//
//   console.log("Number Ten after if statement: " + numberTen);
//   numberFive = "five"
//   console.log();
//
//   try {
//     console.log("Number Five at end of practiseScope:", numberFive);
//   }
//   catch(error) {
//     errorMessage(error)
//   }
//
//   try {
//     console.log("Number Ten at end of practiseScope:",numberTen);
//   }
//   catch(error) {
//     errorMessage(error)
//   }
//
//   try {
//     console.log("NumberThree at end of practiseScope:", numberThree);
//   }
//   catch(error) {
//     errorMessage(error)
//   }
//
//   console.log("");
// }
// practiseScope();
//
// const logPractiseScopeAgain = function(){
//
//     console.log("Number Five:", numberFive);
//     console.log("Number Eight:", numberEight);
//     console.log("Number Fifteen: " + numberFifteen);
//
//     try {
//       console.log("Number Ten:", numberTen);
//     }
//     catch(error) {
//       errorMessage(error)
//     }
//
//     try {
//       console.log("Number Nine:", numberNine);
//     }
//     catch(error) {
//       errorMessage(error)
//     }
//
//     try {
//       console.log("Number Three:", numberThree);
//     }
//     catch(error) {
//       errorMessage(error)
//     }
//
//     console.log();
// }
// logPractiseScopeAgain();
//
// try {
//   console.log(numberTen);
// }
// catch (error) {
//   errorMessage(error)
// }
// try {
//   console.log(numberThree);
// }
// catch (error) {
//   errorMessage(error)
// }
