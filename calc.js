
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
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result *= num;
  }
  return result
}; console.log(power(5,0));


const root = (num, pow) => {
  return num ** (pow ** -1);
}; console.log(root(36,2));

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


const log = (base, a) => {
  if (a < base) {
    return 0;
  }

  return 1 + log(base, a/base);
}
console.log(log(2,9));
