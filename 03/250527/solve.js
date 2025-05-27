//  1.undefined
console.log(typeof num);
// 2. var let const
//var 재선언 재할당
//let 재할당
//const 불가
const ret = console.log(); //ret ? undefined타입
//"3"+5 >> 35
const hello = function(){
    return "hi";
}

console.log(hello.toString());
console.log(hello());

const obj = {"1name" : "ABCD", let : 1234}; //2015 , 단 추천되지는 않음
console.log(obj.let);

//9 객체가 바뀌지않음, 객체 내부의 값이바뀌는 것을 막지 않음

//10 undefined

//11 

//12
//생성자 함수
//객체 리터럴
//슈거 타입 sugar type

//13
function Student(name){
    this.name = name;
    // return;
}
Student("abcd");
// = undefined.c 와 같다

//14. 호이스팅에 의한 undefined

// 15. 1 

// 17. 2,3

//19