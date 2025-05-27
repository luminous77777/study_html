// 생성자 함수
//Student 프로퍼티의 갯수
// -> 7개(학번, 이름, 국,영,수, 총점, 평균)
// 학생 100명 > 700개의 프로퍼티

//프로토타입을 통한분리
//학번, 이름, 국어, 영어 , 수학 500개
//추가적으로 메서드 두개를 관리

function Student(no, name,kor,eng,mat){
    this.no = no;
    this.name= name;
    this.kor= kor;
    this.eng = eng;
    this.mat = mat;
}

Student.prototype.total = function () {
    return this.kor + this.eng + this.mat;
}

Student.prototype.avg = function () {
    return parseInt(this.total () / 3);
}
Student.prototype.test = 10;
Student.test = 20;
Student.fn = function(){
    return "hi";
}

// 프로토 타입: 함수를 통해 생성된 객체(new)의 공용 공간
const s = new Student(1,"새똥이",80,90,100);
console.log(s.total());
console.log(s.avg());
console.log(s.test);
console.log(new Student().test);
console.log(Student.test);
console.log(Student.fn());

const arr = [1,2,3,4];
Array.prototype.size = function(){
    return this.length;
}
Object.prototype.fn = function(){
    return 10;
}
console.log(arr.size());
console.log({}.fn());

const num = 10;
console.log(num.toFixed(2));

