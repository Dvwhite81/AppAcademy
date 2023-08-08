
function bubbleSort(arr) {
  let swapped = false;
  // Iterate through the array
  //let start = performance.now();
  for (let i = 0; i < arr.length; i++) {
    // If the current value is greater than its neighbor to the right
    if (arr[i] > arr[i +1]) {
      // Swap those values
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      swapped = true;
      // Do not move this console.log
      console.log(arr.join(","));
    }
    //let end = performance.now();
    //console.log(`${end - start}`);

  }
  // If you get to the end of the array and no swaps have occurred, return
  if (!swapped) {
    return arr;
  }
  // Otherwise, repeat from the beginning
  else {
    bubbleSort(arr);
  }
  return arr;
}

module.exports = bubbleSort;
/*
let arr = [];
for (let i = 1000; i > 1; i--) {
  arr.push(i);
}
bubbleSort(arr);
*/
