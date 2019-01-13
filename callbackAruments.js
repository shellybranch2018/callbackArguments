

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