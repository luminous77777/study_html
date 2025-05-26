//number, string, boolean
//function, object, undefined

function f(c){
    let l = 10;
    // function inner(){
    //     return l + c;
    // }

    // let inner = function(){ //익명함수
    //     return l + c;
    // }

    return function(){ //함수 그 자체를 리턴가능
        return l+c;
    }

    // return inner; //inner 함수를 리턴
}

const ret = f(0); //타입은 함수 타입
console.log(ret);
console.log(typeof ret);
const result = ret(); // number 타입
console.log(result);
console.log(typeof result);

console.log(f(20)());

function f3(c){
    c();
}

f3(function() {
    console.log("callback");
});

const arr = [3,41,5,4,2,1];
arr.sort(function (a,b){
    return b - a;
});
console.log(arr);