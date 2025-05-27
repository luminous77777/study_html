//for..in문 객체의 탐색 , java의 map과 유사

const obj = {a:10, b:20, c:30};
obj.d = 40;
obj["e"] = 50;
// obj[str] = 60; //str 내부의 값을 이름으로.

console.log(obj.toString);

for(let i in obj){
    console.log(i, obj[i]);
}

//연관 배열 , 객체를 배열처럼 다루는 기법
//obj["d"];

class Addr {
    #no;
    constructor(no, name, desc){
        this.#no = no ;
        this.name = name;
        this.desc = desc;
    }
    print(){
        console.log(this.no, this.name, this.desc);
        return "반환테스트";
    }
    //get,set
    get no(){
        return this.#no;
    }
    set no(no){
        this.#no= no;
    }
}

const addr  = new Addr(1, "새똥이", "부천시");
console.log(addr);
console.log(addr.print());
addr.no = 10;
console.log(addr.no);
console.log(addr);

//필드 숨기기
//JS의 private하는 법,
//지역변수의 특징을 활용함.
function Card(kind, number){
    let k = kind;
    this.getKind = function(){
        return this.k;
    }
    this.setKind = function(kind){
        this.k = kind;
    }
}
for(let i in addr){
    console.log(i);
}


//js 사용빈도
//객체리터럴
//생성자 함수
//클래스 문법