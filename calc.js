
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
}; console.log(multiplicationInt(5,5));

const power = (num, pow) => {
  for (let i = 1; i < pow; i++) {
    num *= num;
  }
  return num;
}; console.log(power(5,2));


// const root = (a,b) => {
//
// };console.log(root())

const absolute = (a) => {
 return a < 0 ? -a : a;

}; console.log(absolute(2));

const mod = (a, b) => {
  return a % b;
}; console.log(mod(15,7));

const flipSign = (a) => {
  return -a;
}; console.log(flipSign(2));
