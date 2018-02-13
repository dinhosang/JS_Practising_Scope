# JS Day 1 Homework

Go through each sample code and work out what the output will be and explain what happened.

### Episode 1
```js
var name = 'Keith';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// output will be a console statement of 'My name is Keith'
// this is because the name is defined outside the method and so is available within

```


### Episode 2
```js
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// this will return 3 as the score returned is the one defined within the function
// rather than the global one outside of the function

```

### Episode 3
```js
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// this will return "0: Ducks" "1: Dogs" "2: Lions"
// myAnimals is created as a new global variable in the function and that is what
// is looped through

```

### Episode 4

```js
var suspectOne = 'Jay';
var suspectTwo = 'Val';
var suspectThree = 'Keith';
var suspectFour = 'Rick';

var allSuspects = function() {
  var suspectThree = 'Harvey'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// the allSuspects() will return the names of all the suspects, except suspectThree will
// be Harvey instead of Keith as a local variable is defined and has a different value
// set within the function

// the final query of suspectThree will still return Keith

```

### Episode 5

```js
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// the log will show "Poirot" instead of the original name as the detective object
// is visible within the scope of the detectiveInfo function
// and when it is modified within that function the effect sticks.
// so when printName is called with the detective it shows the new name

```

### Episode 6
```js
var murderer = 'rick';

var outerFunction = function() {
  var murderer = 'marc';

  var innerFunction = function() {
    murderer = 'valerie';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);

// the murderer is originally rick. Inside the outerFunction a new local variable
// named murderer is made which shadows the outer and has marc assigned. This is then called within
// the innerFunction and which has valerie assigned

// however the murderer variable outside the function is never modified
// so the final log will show the murderer as being rick

```

### Episode 7 - Make up your own episode/s!
```js



```
Make up your own episode which can be whatever you wish and the rest of the class will work out together what happened and what the output will be.
