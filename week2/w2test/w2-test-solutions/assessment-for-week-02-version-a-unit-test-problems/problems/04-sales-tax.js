/***********************************************************************
Write a function using fat arrow syntax, `salesTax` that takes in an arbitrary
number of arguments as prices, adds them up and returns a string containing the
sales tax with a dollar sign in front. Use a tax percentage of 9%.

Hint: Look up `toFixed()` on MDN

Examples:

salesTax(30, 70); // '$9.00'
salesTax(1.12, 2.23, 3.34, 4.45); // '$1.00'
salesTax(4.99, 9.99, 19.99); // '$3.15'
***********************************************************************/

//!!START
let salesTax = (...prices) => {
  let cost = prices.reduce((el, cost) => (cost += el));

  let tax = (cost * 0.09).toFixed(2);
  return "$" + tax;
};
//!!END

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = salesTax;
