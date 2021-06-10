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
// 두가지 방법이 있다.
console.log(yez.name);
console.log(yez['name']); // 키는 항상 스트링 타입이어야함

yez['hasJob'] = true; 
console.log(yez.hasJob); // true

// . 코딩하는 그순간 키에 해당하는 값을 받아오고 싶을때
// 우리가 정확하게 어떤키가 필요힐지 모를때 즉 런타임에서 결정될 때 이 방법을 쓴다.
// 일반적으로 코딩할때는 .을 쓰는경우가 맞다.

// 실시간으로 원하는 키의 값을 받아오고 싶을때 Computed properties를 쓰면 된다.

function printValue(obj, key){
    // console.log(obj.key); // 이렇게 하면 지금 키가 들어있지 않잖아. 그래서 undefined가 뜬다.
    console.log(obj[key]); // 이 방법으로 해줘야지 런타임할때 결정되니까 yez가 정상적으로 출력된다. 
}
printValue(yez, 'name'); // yez 
printValue(yez, 'age'); // 20
// 나중에 동적으로 키에 관련된 밸류를 받와야할때 유용하게 사용할 수 있다.


// 3. Property value shorthand
const person1 = {name: 'bob', age: 2};
const person2 = {name: 'steve', age: 3};
const person3 = {name: 'dave', age: 4};
//const person4 = makePerson('yez', 20);



// 4. Constructor function

// function makePerson(name, age){
//     return{
//         // name : name,
//         // age: age
//         // 위처럼 키와 밸류가 같은 이름일때는 
//         // Property value shorthand라는 기능이 있어서 아래처럼 사용할수 있다
//         name,
//         age
//     };
// }
// 이전에 자바스크립트에 클래스 기능이 없을땐 위와 같은 식으로 펑션을 이용해서 클래스같은 기능- 탬플릿해주는 을 사용했다.
// 이렇게 다른 계산을 하지 않고 순수하게 오브젝트를 생성하는 함수들은 보통 대문자로만 시작한다.
// 또 리턴을 사용하지않고 this를 사용한다.
// 이게 바로 Constructor function 이다.
function Person(name, age){  
    // this = {}; 사실상 이게 생략된거라고 생각하면 된다.
    this.name = name;
    this.age = age;
    // return this;
}
// 이렇게하면 자바스크립트 엔진이 알아서 오브젝트를 생성해 준다. 

//그리고 이 함수를 호출할때도 클래스에서 오브젝트를 만드는 것처럼 이렇게 할수가 있다.
const person4 = new Person('yez', 20);



// 5. in operator : property existence check (key in obj) 있는지 없는지 체크해주는
console.log('name' in yez); // true
console.log('age' in yez); // true
console.log('random' in yez); // false
console.log(yez.random); // undefined

// in 이라는 키워드를 이용해서 해당하는 키가 오브젝트 안에 있는지 확인할 수가 있다. 

console.clear();


// 6. for..in vs for..of 플젝때 정말 유용하게 쓰인다!
// 근데 위에 'use strict'; 이거 쓰면 안된다....??
// ==> key나 value 앞에 let 타입 적어주면 된다.

// for (key in obj)
// for loop를 이용해서 in 이라는 키워드를 쓰면
// yez가 가지고 있는 키들이 블럭을 돌때마다 key라는 지역변수에 키들이 할당된다.
// 모든 키들을 받아와서 일을 처리하고 싶을때 이걸 사용하면 좋다. 
for (key in yez){
    console.log(key);
}

// 하나 더있는데
// for..of
// for (value of iterable)
// for of는 오브젝트를 쓰는것이 아니라 배열과 같은 배열 리스트. 이렇게 순차적으로 interable한 아이들을 쓰는데 
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}
// 배열 array에 있는 애들을 다 꺼내고 싶으면 예전 방식으로는 위처럼 코드를 작성해야 하는데 for of를 쓰면
for(value of array){
    console.log(value);
}


// 7. Fun cloning
// object.assign(dest, [obj1, obj2, obj3...])
const user = {name : 'yez', age : 20};
const user2 = user;
//user2.name = 'coder';
console.log('user', user);
console.log('user2',user2);

// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.log('user3',user3);

const user4 = {}; //이렇게 배열을 선언?하고
Object.assign(user4, user);
console.log('user4',user4);
// 이렇게 하거나 아니면 아래처럼 해도 됨!!
const user5 = Object.assign({}, user);
console.log('user5',user5);

// another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue 뒤로 오는 오브젝이 앞에 동일한 프로퍼티가 있다면 값을 계속 덮어쓰는 식임.
console.log(mixed.size); // big


