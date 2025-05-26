// var num = 10;
function f(){
    // console.log(num);
    // var num = 20;
    num = 20;
    console.log(num);
}
f();
console.log(num);

// 지역의 위치에서 var, let이 없이 선언이 가능, 키워드 생략시 전역의 위치에 선언 -> 좋지 않은 방식 hoist와는 다름
//es5이전까지는 이 현상을 막을 방법이 없음

//var 키워드, 선언적함수 hoisting의 대상, 함수 레벨 scope

for(var i = 0; i < 10; i++){ // i가 10일 때 탈출

}
if(true){
    var test = 10;
}


// i 값은?
console.log(i);
console.log(test);

(function () {
    for(var i = 0; i < 10; i++){ // i가 10일 때 탈출

    }
    //i 접근가능
})
//외부에서는 i 접근불가

var str1 = "abcd";
var str1 = "가나다라";

let str2 = "abcd";
// let str2 = "가나다라"; //불허용