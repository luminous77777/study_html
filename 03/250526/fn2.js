function max(a,b,c){
    console.log(arguments);
    //arguments 객체 > 배열처럼 사용되는 객체 (유사배열)
    var ret = arguments[0];
    for (var i = 0 ; i < arguments.length ; i++){
        if(ret < arguments[i]){
            ret = arguments[i];
        }
    }
    return ret;
}

function max2(){ //arguments는 인자가 필요없다
    console.log(arguments);
    //arguments 객체 > 배열처럼 사용되는 객체 (유사배열)
    var ret = arguments[0];
    for (var i = 0 ; i < arguments.length ; i++){
        if(ret < arguments[i]){
            ret = arguments[i];
        }
    }
    return ret;
}
console.log(max(30,40,50));
console.log(max2(30,40,50,60,70));
function test (a, b){
    console.log(a,b);
}
test();

var abs = function (a){
    return a > 0 ? a: -a;
}

abs = (a) => {
    return a > 0 ? a: -a;
}
// arrow funcion : 익명함수의 대체, es6(2015)
abs = a => a> 0 ? a : -a;


//배열생성
var arr =  [3,2,1,5,4];
arr.sort((a,b) => b - a);
console.log(arr);
arr.forEach(a => console.log(`내부의 값은 ${a}`));
arr.filter(a => a%2 == 1).map(a => "값은 " + a).forEach(console.log);
// arr.filter(a => a%2 == 1).map(a => "값은 " + a).forEach(a => console.log(a));

//scope 범위
//전역변수(global variable), 지역변수(local varibale)