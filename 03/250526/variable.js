let str;
console.log(typeof str);
console.log(str);

const num = 10;
// num = 20;
console.log(num);

const obj = {a:10, b:20}; // const 상수
obj.c = 30;
console.log(obj);
 //obj = {}; //불허용

const students = [];
const studnet1 = {no:1, name:'새똥이', score:80}; 
const studnet2 = {no:2, name:'개똥이', score:70}; 
const studnet3 = {no:3, name:'소똥이', score:90};
students.push(studnet1); 
students.push(studnet2); 
students.push(studnet3);

console.log(students);
students.splice(1,1);// 1번 인덱스에서부터 1개 삭제

console.log(students);

//student1 = {}; // 
//프로퍼티 까지 막지 않음, let으로 선언된 그 자체만 체크

{
    const v = 10;
    console.log(v);
}

{
    const v = 20;
    console.log(v);
}  // 블록레벨 스코프 이기 때문에 허용