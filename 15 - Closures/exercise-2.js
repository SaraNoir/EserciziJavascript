 function pow(base) {
  return (exponent) =>
   base ** exponent;
}
 

/* function pow(base) {
  return function(exponent) {
  return (Math.pow(base,exponent))
}
} */

const pow2 = pow(2);
const pow5 = pow(5);

console.log('--- Power of 2 ---');
console.log(pow2(4));
console.log(pow2(2));
console.log(pow2(8));

console.log('--- Power of 5 ---');
console.log(pow5(4));
console.log(pow5(2));
console.log(pow5(8));
