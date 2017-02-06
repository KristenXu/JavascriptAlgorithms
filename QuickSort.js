function quickSort(array) {
  var arrayIn = array;
  var leftArray = [];
  var rightArray = [];
  if(arrayIn.length <= 1){return array};
  var midIndex = Math.floor(arrayIn.length/2);
  var mid = arrayIn.splice(midIndex, 1)[0];
  for(var index = 0; index < arrayIn.length; index++){
    if(arrayIn[index] < mid){
      leftArray.push(array[index]);
    }else {
      rightArray.push(array[index]);
    }
  }
  return quickSort(leftArray).concat([mid],quickSort(rightArray));
}