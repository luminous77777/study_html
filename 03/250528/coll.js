const arr = [1,2,3,4];
const obj = {a:1, b:2};
const map = new Map();
map.set("a",1);
map.set("b",2);

console.log(map);
console.log(map.get("a"));
console.log(map.has("a")); //containsKey
console.log(map.has("c")); //containsKey

const keys = map.keys();
console.log(keys);

for(let i of keys){//iteratable 하기에 for of의 대상
    console.log(i);
}

for(let i of map.values()){

}

for(let i of map.entries()){
    console.log(i); //key와value로 이루어짐
}

//map의 내부인터페이스 entry

//자바에서는 Iterable 인터페이스로 배열, 리스트, Set
for(let i of arr){
    console.log(i);
}



// for(let i of obj){
//     console.log(i);
// }