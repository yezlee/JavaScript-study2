'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2]; // 이게 더 흔한 방법

// 2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length -1]); // 제일 마지막 인덱스

// 3. Looping over an array
// print all fruits

// a. for
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
// fruits.forEach(function (fruit, index, array) {
//     console.log(fruit, index, array);
// });
fruits.forEach((fruit) => console.log(fruit));
// forEach는 배열안에 들어있는 밸류들 마다 내가 전달한 함수를 출력한다. 

    
// 4. Addition, deletion, copy
// push : add an item to the end
fruits.push('🍉', '🍊');
console.log(fruits);

// pop : remove an item from the end
const popped = fruits.pop(); // pop된건 리턴이 됨! 그래서 이렇게 변수에 담을 수도 있다.
fruits.pop();
console.log(fruits);


// unshift : add and item to the beginning
fruits.unshift('🥝','🍒');
console.log(fruits);

// shift : remove an item from the beginning
fruits.shift();
console.log(fruits);

// NOTE!! shift, unshift are way slower than pop, push


// splice : remove an item by index position
fruits.push('🍉', '🍊');
console.log(fruits);
fruits.splice(1); // splice는 지우고 싶은 인덱스 시작 넘버를 적고 그 뒤에 몇개나 지울건지 갯수를 적어야 하는데. 만약 몇개 지울지 적지 않는다면 인덱스 번호 뒤에는 다 지워 버린다. 즉 인덱스 1번부터 그 뒤까지 다 지워버리는것.
console.log(fruits);
fruits.push('🍉', '🍊','🥝','🍌');
console.log(fruits);
fruits.splice(1, 1);
console.log(fruits);
fruits.splice(1, 1, '🧁', '🍺'); // 뒤에 뺀거 대신에 추가 하고 싶은 거 넣어도 된다. 
fruits.splice(1, 0, '🧁', '🍺'); // splice는 지우지 않고 넣기만 할수도 있다!!!
console.log(fruits);

// concat : combine two arrays
const fruits2 = ['🥑', '🍆'];
const newFruits = fruits.concat(fruits2); // fruits 뒤에 fruits2를 붙이는 것
console.log(newFruits);



// 5. Searching
console.clear();
console.log(fruits);

// indexOf : find the index
console.log(fruits.indexOf('🥑')); // 없으면 -1이 콘솔창에 뜬다.
console.log(fruits.indexOf('🍺')); // 맥주가 몇번째 인덱스에 있는지 알려준다.

// includes
console.log(fruits.includes('🍺')); // 맥주가 fruits라는 배열에 포함이 되어있는지 아닌지를 알려준다. 고로 true
console.log(fruits.includes('🥑')); // 없으면 false 겠지

// lastIndexOf
console.clear();
fruits.push('🍒'); // 이미 체리가 제일 첫번째 즉 0번째 인덱스에 들어있는데 또 push 하면?
console.log(fruits); // 제일 뒤로 들어간다.
console.log(fruits.indexOf('🍒')); // 0
console.log(fruits.lastIndexOf('🍒')); // 5 -> lastIndexOf는 제일 마지막에 있는 그 아이의 인덱스를 알려준다.



