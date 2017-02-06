function fibonaciRecursion(num) {
  if(num === 1 || num === 2){
    return 1;
  }
  return fibonaciRecursion(num - 1) + fibonaciRecursion(num - 2);
}
function fibonaciIteration(num) {
  var n = 1;
  var n1 = 1;
  var n2 = 1;
  for(var index = 3; index <= num; index ++){
    n = n1 + n2;
    n1 = n2;
    n2 = n;
  }
  return n;
}