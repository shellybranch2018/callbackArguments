

function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    
    if (arr[i] === "Waldo") {
      
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

//ForEach

function findWaldo(arr, found) {
  arr.forEach(function(element, index) {
  if (element === "Waldo") {
    found(index);
  }
});
 
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


// Using map for a Callback

//map over input array
//target x and y values and math formula 



var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var total;
var a;
var b;
var result = input.map(obj => {
a = obj.x ** 2;
b = obj.y ** 2;
total = a + b
console.log(Math.sqrt(total))
});


//const map1 = array1.map(x => x * 2);

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

// Sorting by key values in an object

var array = [10, 2, 5, 1, 9 ];
array.sort(function(a,b){
  return a - b;
});
var array = ['c', 'a', 'b', 'e', 'd' ];
array.sort();

//Say we have a list of students that we would like to sort in alphabetical order. If students have the same name, then we prioritize the older student first.

// write a function that will check to see if the names match.
// If they match, use the sort callback function on the age to list the students
// else do a general sort
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
var result = {};
function sortStudents(){
// sort by value
students.sort(function (a, b) {
  return b.age - a.age;
});
//console.log(students)

// sort by name
students.sort(function(a, b) {
  var nameA = a.name; 
  var nameB = b.name; 
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  if(nameA === nameB){
    return 0;
  }

  // names must be equal
  //return 0;
});
console.log(students)

}
sortStudents()


//Addig the Map Assignment


map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


function map(arr, callback) {
  var newArr = []
  for (var i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  } 
  console.log(newArr)
}


// Adsding loaded dice

// loop through the array
// return the first character in the array
// display the characters 1 increment at a time


function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let num = 0;
  

  return function () {
num++;
   return list[num -1];


  };
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());


// loop through the array
// return the first character in the array
// display the characters 1 increment at a time


function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  let num = 0;
  

  return function () {
num++;
   return list[num -1];


  };
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());


//set up a variable called count to hold x
//set up a variable called result with a starting value
//load result variable with count;
// work with result to form if statements 
// if result hit's 0 console log Blast Off!
// if result is -1 log Rockets already gone, bud!
// if result is -2 log Rockets already gone, bud!
// else log the count values


var countdownGenerator = function (x) {
var count = x;
var result = 0;

return function () {

result = count--;
//return result;
if(result === 0){
return "Blast Off!"
}

if(result <= -1){
return "Rockets already gone, bub!"
}
else return "T-minus " + result + "...";

  };

  
};

var countdown = countdownGenerator(3);
console.log(countdown()); // T-minus 3...
console.log(countdown()); // T-minus 2...
console.log(countdown()); // T-minus 1...
console.log(countdown()); // Blast Off!
console.log(countdown()); // Rockets already gone, bub!
console.log(countdown()); // Rockets already gone, bub!


