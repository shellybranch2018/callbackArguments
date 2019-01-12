
var person = '';
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    
    if (arr[i] === "Waldo") {
      person = i;
      found();   // execute callback
    }
  }
}

function actionWhenFound() {
  console.log("Found Waldo at index " + person);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);