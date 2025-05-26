//생성자 함수와 클래스 이름은 첫글자가 대문자
//목적 new를 통해서 생성할 목적
//this : 선언당시에는 모르는 미래에 생성될 객체의 주소값

function Student(no, name, score){
    this.no = no || 1; //undefined일때 1, 기본값처럼 사용됨. 추천안함
    this.name = name;
    this.score = score;
}

const student = new Student(1, "새똥이",90);
console.log(student);
console.log(student.name);

const students = [];
students.push(student);
students.push(new Student(2,'개똥이',80));
students.push(new Student(3));
students.push(new Student(4,undefined,100));
students.push(new Student(undefined,null,100));

console.log(students);