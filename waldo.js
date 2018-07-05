function findWaldo(arr, found2) {
var index = -1;


  arr.forEach(function(element) {
    index += 1;


    if (element === "Waldo") {
      found2(index);   // execute callback
    }
  });
}

function actionWhenFound(index) {
  console.log("Found Waldo at index " + index);

}


findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);



