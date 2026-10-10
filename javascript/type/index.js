// 기본 데이터 타입
const score = 95; // number: 숫자
const userName = "민지"; // string: 문자열
const isLearning = true; // boolean: 참 또는 거짓(기본값은 true, 0 & "" 만 false)
let favoriteFood; // undefined: 값이 아직 정해지지 않음
const emptyValue = null; // null: 값이 없다고 직접 지정함
const uniqueId = Symbol("id"); // symbol: 고유한 값 (조금 더 알아보기)
const largeNumber = 9007199254740993n; // bigint: 아주 큰 정수 (조금 더 알아보기)

console.log("--- 기본 데이터 타입 ---");
console.log("점수:", score, "타입:", typeof score);
console.log("이름:", userName, "타입:", typeof userName);
console.log("공부 중인가요?:", isLearning, "타입:", typeof isLearning);
console.log("좋아하는 음식:", favoriteFood, "타입:", typeof favoriteFood);
console.log("비어 있는 값:", emptyValue, "typeof 결과:", typeof emptyValue);
console.log("고유 ID:", uniqueId, "타입:", typeof uniqueId);
console.log("큰 정수:", largeNumber, "타입:", typeof largeNumber);

// 배열과 객체는 여러 값을 담는 자료형입니다.
const fruits = ["사과", "바나나", "포도"];
const student = { name: "민지", age: 12 };
console.log("배열:", fruits, "배열인지:", Array.isArray(fruits));
console.log("객체:", student, "타입:", typeof student);

// 데이터 타입 바꾸기
console.log("--- 데이터 타입 바꾸기 ---");
console.log('Number("500"):', Number("500")); // 문자열 -> 숫자 500 , Number("학생") -> NaN
console.log("String(500):", String(500)); // 숫자 -> 문자열 "500"
console.log("Boolean(1):", Boolean(1)); // 숫자 -> true
console.log("Boolean(0):", Boolean(0)); // 숫자 -> false
console.log('Boolean(""):', Boolean("")); // 빈 문자열 -> false
console.log('Boolean("안녕"):', Boolean("안녕")); // 내용이 있는 문자열 -> true, 0 & "" ->false

// 숫자로 바뀔 수 없는 문자열은 NaN(숫자가 아님)이 됩니다.
console.log('Number("안녕"):', Number("안녕"));

// prompt()로 입력한 값도 문자열이므로 Number()로 숫자로 바꿉니다.
const ageInput = "12";
const ageAsNumber = Number(ageInput);
console.log("입력한 나이 + 10:", ageAsNumber + 10);
