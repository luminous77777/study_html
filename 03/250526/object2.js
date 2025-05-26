//
const obj = new Object();
obj.a = 10;
console.log(obj);

const arr = new Array(); // 길이가 0인 빈 배열

//List<Student> studnets;
//studnets.get(0).getNo; 0번 인덱스의 no가 나옴

//Javascript Object Notation , 데이터를 상호간에 송수신하는 목적이기 때문에 함수는 허용하지 않음
//JSON
const students = [{no:1}, {no:2}];
console.log(students[1].no);

//
[
    {className : '우리반'},
    {
        no : 1,
        name : '새똥이',
        score : {
            kor : 90,
            eng : 80
        }
    },
    {
        no : 2,
        name : '개똥이'
    }
]

//객체 리터럴의 단점
//-> 객체 자체는 손쉽께 사용할수 있다. 하지만 생성자가 없기 때문에 규칙이 없다
[
    {num:1},
    {num:2, name:'개똥이'}
]