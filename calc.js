// const myBtn = document.getElementById("myButton");
// myBtn.addEventListener('click', (event) => {
//   }
// )







const sumInt = (a, b) => {
  return Number(a) + Number(b);
}

const substractionInt = (a,b) => {
  return Number(a) - Number(b);
}

const divisionInt = (a,b) => {
  return a / b;
}

const multiplicationInt = (a,b) => {
  return a * b;
}

const power = (num, pow) => {
  let result = 1;
  for (let i = 0; i < pow; i++) {
    result *= num;
  }
  return result
}

const root = (num, pow) => {
  return num ** (pow ** -1);
}

const absolute = (a) => {
 return a < 0 ? -a : a;

}

const mod = (a, b) => {
  return a % b;
}

const flipSign = (a) => {
  return -a;
}

const percent = (a,b) => {
  return (a * b) /100;
}


const log = (base, a) => {
  if (a < base) {
    return 0;
  }

  return 1 + log(base, a/base);
}
console.log(log(2,9));
