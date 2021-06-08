// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key : value };

// 1. Literals and properties
// object를 만드는 방법은 두가지가 있다
const obj1 = {}; // 'Object Literal' syntax
const obj2 = new Object(); // 'Object Constructor' syntax

// const yourName = 'yez';
// const age = 20;
// print(yourName, age);
// function print(yourName, age){
//     console.log(yourName);
//     console.log(age);
// }
// 오브젝트를 사용하기 전엔 이런식으로 했지. 근데 프린트해야 할 것들이 추가가 되면 수정이 힘들어 

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const yez = {name : 'yez', age : 20};
print(yez);

// 추가도 가능하고
yez.hasJob = true;
console.log(yez.hasJob); // true

// 삭제도 가능함
delete yez.hasJob;
console.log(yez.hasJob); // undefined

// 하지만 이렇게 너무 동적으로 코딩하면 금방 하기에는 좋지만 나중에 유지보수 하기에도 힘들고, 생각치도 못한 오류가 생길수도 있다. 따라서 가능하면 사용하지마.


// 2. Computed properties





