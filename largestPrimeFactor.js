exports.largestPrimeFactor = function(n){

  var divisor =2;
  if (n%divisor===0){
    while(n%divisor===0 && divisor<(n/2)){
      n/=divisor;
      }
        }else{

    while(n%divisor!==0){
      divisor++;
        while(n%divisor===0 && divisor<(n/2)){
        n/=divisor;
        }
      }
      }
  return n;
  };