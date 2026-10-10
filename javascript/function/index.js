// 함수[입력->마술상자->결과] //

function hello(name) {
  return `안녕하세요, ${name}님!`;
}
const greeting = hello("지혜");
console.log(greeting);

function icecream(flavor) {
  return `${flavor} 맛 아이스크림입니다!`;
}
const i = icecream("딸기");
console.log(i);

//
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};
console.log(calculator.add(3, 5));
console.log(calculator.subtract(10, 3));
console.log(calculator.multiply(4, 6));
console.log(calculator.divide(8, 2));
