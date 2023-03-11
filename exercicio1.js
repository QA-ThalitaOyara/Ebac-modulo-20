/*Calcule o MDC (máximo divisor comum) entre dois números. */

const calcMdc = (a,b) => 
{ 

    while (a != b) 
    {
     if(a > b)
         a = a - b;
      else
         b = b - a;
    }
   return a;

}

var total = calcMdc(252,105);
console.log(total)