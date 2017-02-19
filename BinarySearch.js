function binarySearch(target, array) {
  var low = 0,
    high = array.length - 1,
    mid, midElement;
  while(low <= high){
    mid = Math.floor((low + high) / 2);
    midElement = array[mid];
    if (target > midElement) {
      low = mid + 1;
    }else if (target < midElement){
      high = mid - 1;
    }else{
      console.log('target index is : ' + mid);
      return mid;
    }
  }
  return -1;
}