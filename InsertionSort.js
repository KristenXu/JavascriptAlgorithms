function insertionSort(array) {
  for(var i = 1; i < array.length; i++){
    var temp = array[i];
    var j = i;
    while(j > 0 && array[j - 1] > temp){
      array[j] = array[j - 1];
      j--;
    }
    array[j] = temp;
  }
  console.log('after Sort : ' + array);
}