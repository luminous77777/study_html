function factorial(n){
    let result = 1;
    if(n == 0){
        return result;
    }else{
       return result *= n * factorial(n-1);
    }
}

console.log(factorial(5));

//반복문 무한루프
//재귀호출 스택오버플로

//url
//프로토콜://도메인:포트/경로/파일?쿼리스트링#앵커
//http://localhost:5500/03/250526/test.html?color=#002345&name=새똥이

let url = 'http://localhost:5500/03/250526/test.html?color=#002345&name=새똥이';
console.log(url);
console.log(encodeURI(url));
console.log(decodeURIComponent(encodeURIComponent(url)));


//parseInt(문자열) : 숫자 >> 정수만
//parseFloat(문자열) : 숫자 >> 실수포함

let str = "123.456가나다789";
console.log(parseInt(str));
console.log(parseFloat(str));
//parsing 할수 있는 부분까지만 하고 해석불가한 부분이 나오면 그 후는 무시

str == "ff";
console.log(parseInt(str,16));

eval("console.log(10)");
// 인젝션 공격에 취향하므로 사용하면안됨
let s = String.fromCharCode(65,66);
console.log(s);
console.log(s.charCodeAt(1));