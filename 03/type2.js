var o = {a:10};
o.c = 20;
var arr = [];
arr.length = 10;

console.log(o.b);
// console.log(num);
console.log(arr[5]);


var obj =  2 && 3;
if (obj){
    console.log('참인 경우 출력');
}else{
    console.log('거짓인 경우 출력');
}
//길이가 존재할 경우 참
//숫자 0, undefinde, null(object 중 유일한 거짓), 빈문자열 = 거짓

//형변환
var num = 10;
console.log(typeof num);
num = String(num);
console.log(typeof num);
num = Boolean(num);
console.log(typeof num, num);

//number > boolean
// 0은 false, 그외의 숫자는 true
//boolean > number
//true > 1 , false > 0

//number > string
//string > number ex) "abcd" > NaN (Not a Number)
var str = "abcd";
str = Number(str);
console.log(typeof str, str);
var n = NaN;
console.log(typeof n);
console.log(NaN == NaN); //false
console.log(isNaN(n));
console.log(Number.MAX_VALUE); //java의 double 타입과 범위가 같다
console.log(0/0, 3/0);
console.log(isFinite(3), isFinite(Number.POSITIVE_INFINITY));

n = null;
console.log(n,typeof n);

var fn = function(a,b) {
    return a+b;
}
var ret = fn(10,20);
console.log(ret);