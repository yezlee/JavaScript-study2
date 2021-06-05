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
// computation이 heavy한 함수를 호출하거나 또는 expression같은 애들은 연산자를 사용할 때 뒤에 놔야한다.
// 왜냐, or, and는 처음에 flase가 뜨면 뒤에 까지 이게 false인지 true인지 알아볼 필요없이 그냥 false 이기 때문에. 처음에는 간단한 value같은 애들을 놓아야함.
// 또한 and는 오브젝트가 널이면 false가 되기 때문에 뒤에까지 실행이 안된다.

// often used to compress long if-stament
// nullableObjext && nullableObject.somthing
//