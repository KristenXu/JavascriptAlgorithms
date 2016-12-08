function selectionSort(array) {
  for(var i = 0; i < array.length - 1; i++){
    var minIndex = i;
    for(var j = i; j < array.length; j++){
      if(array[minIndex] > array[j]){
        minIndex = j;
      }
    }
    var temp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = temp;
  }
}