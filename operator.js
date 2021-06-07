// 1. String concatenation
console.log('1' + 2);
console.log(`String Literals : 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); // add : 2 
console.log(1 - 1); // substract : 0
console.log(1 / 1); // divide : 1
console.log(1 * 1); // multiply : 1
console.log(5 % 2); // remainder : 1
console.log(2 ** 3); // exponentiation : 8

// 3. Incremant and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(preIncrement, counter); //3, 3

const postIncrement = counter++;
// postIncrement = counter; 우선 postIncrement 여기에 counter변수를 담고
// counter = counter + 1; 그러고 나서 counter에 1을 더해서 다시 counter변수에 담은거니까
console.log(preIncrement, counter); //3, 4

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal


// 6. Logial operators : || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2; // false

// || (or), finds the first truthy value
console.log(`or : ${value1 || value2 || check()}`)
// 위에서 value1은 false, value2도 false, check()는 시간낭비를 좀 하다가 true를 return한다. 
// 따라서 결국 '😒'를 10번 출력한 뒤에 or : true 라고 콘솔창에 뜬다. 이 때 value1이 true이면 뒤에 애들은 보지도 않고 그냥 바로 true라고 함 -> '😒' 10번 출력하는 시간낭비 안하고 바로 true가 된다.  즉 or는 처음에 true가 뜨면 뒤에 까지 이게 true인지 false인지 알아볼 필요없이 그냥 true 이기 때문에. 처음에는 간단한 value같은 애들을 놓아야함.
// computation이 heavy한 함수를 호출하거나 또는 expression같은 애들은 연산자를 사용할 때 뒤에 놔야한다. 심플한 애들을 제일 앞에 두고, 앞에도 다 false여서 마지막에 마지못해 호출하는 것이 제일 좋다.


// && (and), finds the first falsy value
console.log(`or : ${value1 && value2 && check()}`)
// 마찬가지로 and는 처음에 flase가 뜨면 뒤에 까지 이게 false인지 true인지 알아볼 필요없이 그냥 false이기 때문에. 처음에는 간단한 value같은 애들을 놓아야함. 
// often used to compress long if-statement - 그리고 and는 간편하게 null체크할때도 많이 쓰이는데 nullableObject - 오브젝트가 null이면 false가 되기 때문에 뒤에까지 실행 되지 않아서.
// nullableObject && nullableObject.something -> nullableObject가 null이 아닐때만, nullableObject(오브젝트)의 something이라는 value를 받아오게 된다. 

// if(nullableObject != null ){
//     nullableObject.something;
// }  
//이 if문이랑 nullableObject && nullableObject.something 이거랑 같은말임


function check(){
    for(let i = 0; i < 10; i++){
        //wasting time
        console.log('😒');
    }
    return true;
}


// ! (not)
// not연산자는 값을 반대로 바꿔준다.
console.log(!value1); // value1의 값이 false 이기 때문에 true가 출력된다.



// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion 
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true


// equality를 공부할 때는 object를 좀 더 신경 써서 공부해야한다. object는 메모리에 탑재될 때 reference 형태로 저장이 된다. 
// object equality by reference 
const yez1 = {name : 'yez'};
const yez2 = {name : 'yez'};
const yez3 = yez1;
console.log(yez1 == yez2); // false -  yez1과 yez2에는 엄연히 다른 reference가 들어가 있고 그 다른 레퍼런스는 서로 다른 오브젝트를 가리키고 있다. 
console.log(yez1 === yez2); // false
console.log(yez1 === yez3); // true - yez3에는 yez1과 같은 레퍼런스를 같고 있으니 같은 오브젝트를 가리키지.


// equality - puzzler
console.log(0 == false); // true ======> 0과 null, undefined, empty string은 false로 간주될 수 있다. 
console.log(0 === false); // false ======> 하지만 0은 boolean type이 아니기 때문에!!! type strict equality를 적용하면 이것은 false가 된다!!!!!!!!!!!!
console.log('' == false); // true ======> 
console.log('' === false); // true ======> empty string 역시 boolean type이 아니기 때문에 false
console.log(null == undefined); // false - false인가? ======> 얘는 특이하게도 null과 undefined은 같은 것으로 간주되어서 true
console.log(null === undefined); // true ======> 하지만 타입은 다르기 때문에 false.


// 8. Conditional operators : if
// if, else if, else
const yourName = 'yez';
if(yourName === 'yez'){
    console.log('Welcome, Yez');
}else if(yourName === 'coder'){
    console.log('You are amazing coder');
}else{
    console.log('unknown');
}


// 9. Ternary operator : ?
// condition ? value1 : value2;
console.log(yourName === 'yez' ? 'yes' : 'no');


// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS - 정해져있는 타입을 검사할때
const browser = 'IE';
switch (browser){
    case 'IE' :
        console.log('go away');
        break;
    case 'Chrome' :
    case 'Firefox' :
        console.log('love u');
        break;
    default :
        console.log('same all');
        break;
} 


// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while(i > 0){
    console.log(`while : ${i}`);
    i--;
}

console.log(`i : ${i}`); // 0

// do while loop, body code is executed first,
// then check the condition.
do{
    console.log(`do while : ${i}`);
    i--;
}while(i > 0);


// for loop, for(begin; condition; step)
for(i = 3; i > 0; i--){
    console.log(`for : ${i}`);
}

for(let i = 3; i > 0; i = i - 2){
    //inline variable declaration - block안에 지역변수 let이라고 선언해서 사용하는 변수 선언 
    console.log(`inline variable for : ${i}`);
}

// nested loops - cpu에 좋지않음. 사용하는거 추천하지 않음.
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log(`i : ${i}, j : ${j}`);
    }
}


// break(loop를 완전히 끝내는것), continue(지금것만 스킵하고 다시 다음걸로 넘어가는것)
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for(let i = 0; i <= 10; i++){
    if(i%2 === 1){
        continue;
    }
    console.log(i);
    
    // if(i%2 === 0){
        //     console.log(i);
        // }
    }
    
    
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for(let i = 0; i <= 10; i++){
    if(i === 8){
        break;
    }
    console.log(i);
}

