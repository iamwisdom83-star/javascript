//연산자//

const a = 10;
const b = 3;

// + - * / % **  //
console.log("--- 산술 연산자 ---");
console.log("더하기:", a + b);
console.log("빼기:", a - b);
console.log("곱하기:", a * b);
console.log("나누기:", a / b);
console.log("나머지:", a % b);
console.log("거듭제곱:", a ** b);
console.log("문자열 이어 붙이기:", "안녕" + "하세요"); //문자연결 연산자

// > < >= <= == === != !== //
console.log("--- 비교 연산자 ---"); // 결과값 : boolean
console.log("10은 3보다 큰가요?", a > b);
console.log("10과 3은 같은가요?", a === b);
console.log("10은 3과 다른가요?", a !== b);

// && || ! //
console.log("--- 논리 연산자 ---");
console.log("true && false:", true && false); // and
console.log("true || false:", true || false); // or
console.log("!true:", !true); // not (!true = false, !false = true)

console.log("--- 대입 연산자 ---");
let score = 10;
score += 5;
console.log("score += 5 결과:", score);
