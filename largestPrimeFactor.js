exports.largestPrimeFactor = function(n){

  var divisor =2;
  while(n%divisor!==0){
    divisor++;
   while(n%divisor===0 && divisor<(n/2)){
      n/=divisor;
  }
}
  return n;
};