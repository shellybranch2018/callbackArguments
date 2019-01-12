

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