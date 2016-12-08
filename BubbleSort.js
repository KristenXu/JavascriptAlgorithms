function bubbleSort(array) {
  for(var i = 0; i < array.length; i ++){
    for(var j = i; j < array.length - 1; j ++){
      if(array[j] > array[j+1]){
        var temp = array[j];
        array[j] = array[j + 1];
        array[j+1] = temp;
      }
    }
  }

  console.log('after bubblrSort : ' + array);
}