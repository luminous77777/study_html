function add(){
    let n = 0;
    return function () {
        return ++n;
    }
}
// colsure : 함수 호출완료 이후에도 지역변수가 잔존하는 현상
// 최소 선행 조건 : 함수를 리턴할것
const increase = add(); //increase의 type ? function
console.log(increase());
console.log(increase());
console.log(increase());

const increase2 = add();
console.log(increase2());
console.log(increase2());
console.log(increase2());