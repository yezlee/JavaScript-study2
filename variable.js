// 1. Use Strict
// Whole-script strice mode syntax
// JavaScript is very flexible language
// flexible === dangerous
// added ECMAScript 5
'use strict';

console.log("Hello, World");

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalNaming = 'global naming';

{
    let naming = 'yez';
    console.log(naming);
    naming = 'hello';
    console.log(naming);
    console.log(globalNaming);
}
console.log(globalNaming);
// console.log(naming);


// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope - means var just igonre block scope
age = 4;
var age;
console.log(age);


//3. Constant, r(read only)
// use const whenver possible
// only use let if variable needs to change 

// NOTE!
// Immutable data types : premitive types, frozen objects (i.e object.freeze())
// Mutable data types : all objects by default are mutable in JS
// favor immutable data types always for a few reasons :
// - security : 한번 작성한 값을 해커들이 코드를 이상한거 삽입해서 값을 계석 변경해 나가는 것이 가능한데 immutable data는 이것을 방지한다.
// - thread safety : 어플리케이션이 실행되면 한가지 프로세스가 할당이 되고 그 프로세스 안에서는 다양한 쓰레드가 동시에 돌아가면서 어플리케이션을 조금 더 효율적으로 빠르게 동작할 수 있도록 도와주는데, 다양한 쓰레드들이 동시에 변수에 접근해서 값을 변경할 수가 있는데 이 동시에 값을 변경한다는 것은 위험한 생각이다. 그래서 가능하면 immutable data를 사용하는 것이 좋다. 
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;



// 4. Variable Types
// 어떤 프로그래밍 언어도 primitive type과 object type으로 나눠져 있다.
// 메모리에 값이 저장되는 방법은 2가지인데 primitive type과 object type 에 따라서 메모리에 값이 다른 방식으로 저장된다. primitive type은 value, 즉 값 자체가 메모리에 저장이 된다. 반면 object는 너무 커서 메모리에 한번에 다 올라 갈수가 없다. 따라서 const yez = {}; 오브젝트를 할당하게 되면 yez가 가리키는 곳에는 레퍼런스, 참조값이 있다. 이 레퍼런스는 실제로 오브젝트를 가리키고 있는 곳이다. 이 레퍼런스를 통해서 실제로 오브젝트가 담겨있는 메모리를 가리키는 것이다. 따라서 const 타입일 때, 오브젝트 이름 자체는 못바꾸지만 오브젝트 안에있는 애들은 바꿀수 있는거.

// 따라서 primitive type은 value로 값이 저장되고, object type은 오브젝트를 가리키는 레퍼런스가 메모리에 저장된다. 

// primitive type, single item : number, string, boolean, null, undefined, symbol
// object, box-container
// function, first-class function(자바스크립트에선 function도 데이터 타입중 하나이다. function도 다른 데이터 타입처럼 변수에 할당이 가능하고 또 그렇기 때문에 함수에 파라미터 인자로도 전달이 되고 서 함수에서 리턴타입으로도 function을 리턴할 수 있다. 이걸 first-class function이라고 부른다.)
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value : ${count}, type : ${typeof count}`); // value : 17, type : number
console.log(`value : ${size}, type : ${typeof size}`); // value : 17.1, type : number


//number - special numeric values : infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'Not a Number' / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); //NaN


// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53 ~ 2**53)
console.log(`value : ${bigInt}, type : ${typeof bigInt}`); // value : 1234567890123456789012345678901234567890, type : bigint


// string
// need to remeber -> Template Literals (string)

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1; // false

// null
let nothing = null; // null로 값이 할당이 되어져 있는 경우
console.log(`value : ${nothing}, type : ${typeof nothing}`); // value : null, type : object

// undefined
let x; // 선언은 되었지만 값이 아직 정해지지 않은것
let y = undefined;
console.log(`value : ${x}, type : ${typeof x}`); // value : undefined, type : undefined
console.log(`value : ${y}, type : ${typeof y}`); // value : undefined, type : undefined

// symbol, create unique indentifies for objects
// symbol은 나중에 map이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시에 다발적으로 concurrent(동시에 발생하는) 하게 일어날 수 있는 그런 코드에서 우선순위를 주고 싶을때 정말 고유한 식별자가 필요할 때 쓰는 것이다. 간혹 식별자를 string을 이용해서 쓰는 경우도 있는데 이 string은 다른 모듈이나 다른 파일에서 동일한 string을 썼을때 동일한 식별자로 간주된다! 하지만 반대로 symbol같은 경우는 아래 예 처럼 동일한 아이들을 이용해서 심볼을 만들었지만 이 두가지의 심볼은 다른 경우이다.

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false!!!!!!
// 'id'라는 동일한 string으로 작성했어도 다른 symbol로 만들어 지기 때문에 주어지는 스트링에 상관없이 고유한 식별자로 만들어 진것이다.

// string이 똑같고 동일한 심볼을 만들고 싶다면
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true!!!!!!
// Symbol.for를 사용한다면 주어진 스트링에 맞는 심볼을 만들어 달라는 얘기.

console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`); // value : id, type : symbol
console.log(`value : ${symbol1.description}, type : ${typeof symbol1.description}`); // value : id, type : string

// Symbol은 value를 가져오고 싶을때 그냥 symbol1 이렇게만 적으면 안되고 뒤에 꼭 .description을 적어줘야 한다. 그냥 symbol1만 적으면 Uncaught TypeError: Cannot convert a Symbol value to a string 이렇게 에러뜸


// object, real-life object, data structure
const yez = { name : 'yez', age : 20};


// 5. Dynamic typing : dynamically typed language 동적
// 자바나 c언어는 statically typed language 정적
// 정적타입언어는 우리가 변수를 선언할 때 어떤 타입인지 결정해서 타입을 같이 선언했던 반면에
// 동적타입언어(자바스크립트)는 선언할 때 어떤 타입인지 선언하지 않고 runtime, 프로그램이 동작할 때 할당된 값에 타입이 변경될 수 있다는 것을 뜻한다 .
// 이런 다이나믹 타이핑 언어는 내가 뭔가 빠르게 만들고 싶을 때, 프로토타입으로 만들고 싶을때 유연하게 사용할 수 있는 언어지만 규모가 있는 프로젝트들을 할 때는 이런 다이나믹 타이핑 때문에 문제가 생기는 경우가 많다.

let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value : ${text}, type : ${typeof text}`); //value : hello, type : string

text = 1;
console.log(`value : ${text}, type : ${typeof text}`); //value : 1, type : number => 처음에 string으로 했던 타입이 number로 바뀜

test = '7' + 5; // string type '75'
test = '8' / '2'; // 나누기는 숫자로 인식해서 number type 4

//처음에 문자를 넣었으니까 나중에 text.charAt(0) 이걸 또 찍어보면 에러가 뜨지. 지금은 숫자 타입이니까. - 왜냐 자바스크립트는 런타임에서 타입이 정해지기 때문에. 이것 때문에 에러가 런타임으로 발생하는 경우가 많다. 
// 그래서 다이나믹 타이핑 때문에 나온게 타입스크립트!!!!

