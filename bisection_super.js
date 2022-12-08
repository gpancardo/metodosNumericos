//CÓDIGO GENERADO POR CHAT GPT DE OPEN AI, SÓLO USAR COMO REFERENCIA

// define the function for which we want to find the roots
function f(x) {
    // for this example, we will use the quadratic function f(x) = x^2 - 2
    return x * x - 2;
  }
  
  // define the bisection function
  function bisection(a, b, eps) {
    // initialize the values of x1 and x2
    var x1 = a;
    var x2 = b;
    var xm = 0;
    var f1, f2, fm;
  
    // loop until the desired accuracy is reached
    while (Math.abs(x2 - x1) > eps) {
      // calculate the midpoint of x1 and x2
      xm = (x1 + x2) / 2;
      // evaluate the function at x1, x2, and xm
      f1 = f(x1);
      f2 = f(x2);
      fm = f(xm);
  
      // check which sub-range contains the root
      if (fm * f1 < 0) {
        // if the product of the function values at x1 and xm is negative,
        // then the root is in the sub-range [x1, xm]
        x2 = xm;
      } else {
        // otherwise, the root is in the sub-range [xm, x2]
        x1 = xm;
      }
    }
  
    // return the midpoint of x1 and x2 as the estimated root
    return (x1 + x2) / 2;
  }
  
  // find the root of the function f(x) = x^2 - 2 within an accuracy of 1e-6
  var root = bisection(0, 2, 1e-6);