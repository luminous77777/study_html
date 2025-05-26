// console.log(max(10,5));
// console.log(min(10,5)); //undefined

//function

//1.선언적 함수
function max(a,b){
    return a > b ? a:b;
}
//2.익명함수
var min = function(a,b){
    return a < b ? a:b;
}

console.log(max(10,5));
console.log(min(10,5));
console.log(typeof max);
console.log(typeof min);

// 선언적 함수로 두수의 곱을 반환하는 함수를 정의 함수명 : mul
function mul(a,b){
    return a*b;
}
// 익명 함수로 두수의 차이를 반환하는 함수를 정의 (반드시 양수로) 함수명 : sub
var sub = function(a,b){
    
    return a > b ? a - b : b - a;
}
console.log(mul(3,5));
console.log(sub(0,0));

var add = function(a,b){
    if(!(typeof a === "number" && typeof b === "number")) return NaN;
    return a+b;
}

//type script
// var add2:Number = function(a:Number, b:Number){
//  return a+b;
// }

//  hoist : var로 선언한 변수, 선언적 함수는 끌어올려짐
// var로 선언한 변수는 중복선언이 가능
var num = 10;
var num = 20;

//함수 내에서 선언한 변수 => 지역변수
//익명함수 === 함수리터럴
//10 -> 정수 리터럴
//"abcd" -> 문자열 리터럴
//false,fure -> 불린 리터럴
//{} : object literal
//function() {} : function literal
//[] : array literal ->, 배열 리터럴
//정규식 리터럴
console.log("abcde".substring(3,5));
console.log([10,20,30][1]);// 1번 인덱스 호출
console.log({a:10,b:20}.a);//10 호출

//IIFE , 즉시실행함수 : 한번만 사용할 목적
(function(a) {console.log('파라미터의 값 : ' + a)})(30);

//javascript에서 function은 type이다.

obj = {no:1,name:"새똥이",score:80, getScore : function() {
    return this.score;
}};

console.log(obj);
console.log(obj.score);
console.log(obj.getScore());

function max2 (a ,b, c){
    if(a > b && a > c){
        return a;
    }
    else {
        if(b> c){
            return b;
        }
        else {
            return c;
        }
    }
}

function max3(a,b,c){
    return max(max(a,b),c);
}

function max4(a,b,c){
    console.log(arguments);
}
max4(10,20,30); //{} 객체가 출력됨,
