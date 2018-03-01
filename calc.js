
const sumInt = (a, b) => {
  return Number(a) + Number(b);
}; console.log(sumInt(5, 5));

const substractionInt = (a,b) => {
  return Number(a) - Number(b);
}; console.log(substractionInt(5, 6));

const divisionInt = (a,b) => {
  return a / b;
}; console.log(divisionInt(10,2));

const multiplicationInt = (a,b) => {
  return a * b;
}; console.log(multiplicationInt(5,10));

const power = (num, pow) => {
  if (pow === 0) {
    return 1;
  }
  return num * power(num, pow - 1);
}; console.log(power(5,3));


// const root = (number) => {
//
//
// }; console.log(root());

const absolute = (a) => {
 return a < 0 ? -a : a;

}; console.log(absolute(2));

const mod = (a, b) => {
  return a % b;
}; console.log(mod(15,7));

const flipSign = (a) => {
  return -a;
}; console.log(flipSign(2));

const percent = (a,b) => {
  return (a * b) /100;
}; console.log(percent(300,20));
