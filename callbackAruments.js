

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