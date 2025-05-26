//JS 데이터 타입
//숫자, 문자열, 논리 >> 기본자료형 처럼 쓰임
//객체, 함수, underfinded(미정의 타입) .. 심볼(Symbol)

var num;  //underfinded 타입
console.log(num);

var num2 = '20';
console.log(typeof num2);
var num2 = true;
console.log(typeof num2);
var num2 = 20;
console.log(typeof num2);

var obj = {};
var arr = [];
var fn = function() {};
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof fn);

var obj2 = {a:10, b:20};
console.log(obj2.a);
var arr2 = [3,2,1,true,'가나다라'];
console.log(arr2[4]);

//템플릿 리터럴

var str1 = '문자열';
var str2 = `문자열`;  //백틱, 템플릿 리터럴
var str3 = "문자열";

// ` (back tick)을 활용한 내부의 참조호출
var str4 = `여기는 ${obj2.b} 문자열 ${10} ${obj}` +"\nhello${obj}" + 20;
console.log(str4);
