// Function 
// - fundamental building in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return;}
// one function === one thing
// naming  : doSomething, command, verb
// e.g createCardAndPoint -> createCard, createPoint 만약 함수이름을 짓는게 너무 어렵다면, 이 함수에서 하는일이 너무 많은게 아닌지 다시한번 봐야한다. 
// function is object in JS 따라서 함수를 변수에다가 할당할 수도 있고, 파라미터로 전달할 수도 있고, 리턴할 수도 있다.

// 이런 함수(파라미터가 없는)는 쓸모가 없어. 계속 'Hello'만 출력되기 때문
function printHello(){
    console.log('Hello');
}
printHello();

// 이렇게 파라미터로 메시지를 전달하면 전달된 메시지를 화면에 출력하도록 만드는것이 좋다.
function log(message){
    console.log(message);
}
log('Hello~!')

// +자바스크립트에는 타입이 없기 때문에, 아쉽게도 함수 자체의 인터페이스만 보았을 때, 이 message가 문자열을 전달해야하는지 숫자를 전달해야 하는지 알 수가 없다.


// 2. Parameters
// premitive parameters : passed by value
// object parameters : passed by reference
function changeName(obj){
    obj.name = 'coder';
}

const yez = {name : 'yez'}; // 이렇게 yez라는 const를 정의한 다음에, 오브젝트를 만들어서 할당해주면, 메모리에는 오브젝트가 만들어진 reference가 메모리에 들어가게 되고, reference는 바로 이 오브젝트(which is {name : 'yez'} )를 메모리 어딘가에 가리키고 있다.
changeName(yez);
console.log(yez); // coder ==> 오브젝트는 레퍼런스로 전달되기 때문에 함수안에서 오브젝트의 값을 변경하게 되면 그 변경된 사항이 그대로 메모리에 적용이 되기 때문에 추후에 변경된 사항을 확인할 수가 있다. 

// 설명 : changeName(yez); 함수를 부르는데 파라미터가 yez라는 오브젝트. changeName()함수를 보면, 파라미터 이름이 obj이고, 파라미터를 오브젝트를 넘겨줬으니까 obj가 yez오브젝트 안에 있는 키랑 밸류를 가리키는 거지. 근데 obj.name = 'coder'; 이렇게 하라고 하면, 이말인 즉슨 yez.name을 'coder'로 바꾸란 말과 똑같은거라서, 로그에 yez를 찍었을때 {name: "coder"}가 나오는것.


// 3. Default parameters (added in ES6)
// function showMessage(message, from){
//     console.log(`${message} by ${from}`);
// }

function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}

showMessage('Hi!'); // Hi! by undefined

// 예전에는 (ES6이전에는)
// function showMessage(message, from){
//     if(from === undefined){
//         from = 'unknown';
//     };
//     console.log(`${message} by ${from}`);
// }


// 4. Rest parameters (added in ES6)
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    // 간단하게 forOf라는 문법을 이용해서도 가능. args에 있는 모든 값들이 차례대로 arg로 하나씩 지정이 되면서 arg를 출력하는거
    for(const arg of args){
        console.log(arg);
    }

    // 배열에서 forEach라는 문법을 사용해서도 가능. 
    args.forEach( (arg) => console.log(arg) );
}

printAll('dream', 'coding', 'yez');



// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello'; // local variable
    console.log(message); // local variable
    console.log(globalMessage); // global variable

    function printAnother(){
        console.log(message); 
        let childMessage = 'hello'; // 이렇게 중첩된 함수에서 자식의 함수가 부모 함수에 정의된 변수에 접근이 가능한것들이 closure.
    }
    // console.log(childMessage);  이건 에러.
    // return undefined; // 이렇게 리턴타입이 없는건 undefined를 리턴하는 것과 똑같다. 
}
printMessage();


// 6. Return a value
function sum(a, b){
    return a + b;
}

const result = sum(1, 2); //3
console.log(`sum : ${sum(1,2)}`);


// 7. Early return, early exit
// bad 
// 이렇게 조건문을 유저포인트가 10점이 넘을때 이런 로직을 실행해라~ 라고 하는것보단
function upgradeUser(user){
    if(user.point > 10){
        // long upgrade logic...
    }
}

// good
// 조건에 맞지 않으면 그냥 빨리 return해서 함수를 종료시키고 그 다음에 로직을 실행하는 것이 더 좋은 코드
function upgradeUser(user){
    if(user.point <= 10){
        return;
    }
    // long upgrade logic...
}

// 조건이 맞지 않는 경우, 값이 undefined인 경우, 값이 -1인 경우 빨리 리턴을 하고 필요한 로직을 그 뒤에 작성을 하는 것이 더 좋다!!!



//위에는 펑션을 어떻게 선언하는지에 대해 알아봤고, 이젠 function expression에 대해 알아본다.

// First-class function
// functions are treates like any other variable
// can be assignes as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted) - ex) 위에 function sum()
// a function expression is created when the execution reaches it.
const print = function(){ // 이렇게 함수에 이름이 없는 것을 annoymous function이라고 함. 이름이 있는건 named function
    console.log('print');
}
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));


// 2. Callback function using function expression 
// randomQuiz라는 함수안에 정답(answer)과, < 정답이 맞았을 때의 함수(printYes), 틀렸을 때 호출하는 함수(printNo) - 이렇게 함수 두개까지 >
// 상황이 맞으면, 원하면 이 전달된 함수를 불러 - 라고 하는게 콜백함수...
// 즉 < 정답이 맞았을 때의 함수(printYes), 틀렸을 때 호출하는 함수(printNo) > 이 두가지의 callback functions가 파라미터로 전달되어서 
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}

// annoymous function
const printYes = function(){
    console.log('yes!');
};

// named function
// better debugging in debuggers's stack traces(stack traces에 이름이 나오게 하려고 네임드펑션을 쓴다.)
// recursions
const printNo = function print(){
    console.log('no!')
    // print(); // 이렇게 함수안에서 자신 함수를 다시 부르는것을 recrusion이라고 한다. 하지만 이걸하면 무한반복해서 프로그램 꺼진다.
    // 꼭 필요할때(피보나치수를 계산, 반복되는 평균값을 계산한다던지 쓰임새가 다양하다.)
};

randomQuiz('wrong', printYes, printNo); // 그래서 randomQuiz 함수를 호출할 때는 answer과 printYes,printNo의 콜백 함수들을 각각 전달하는것이다. 
randomQuiz('love you', printYes, printNo);



// Arrow Function 
// always annonymous
// const simplePrint = function(){
//     console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!');
const add = (a,b) => a + b;
// const add = function(a,b){
//     return a + b;
// };

const simpleMultiply = (a,b) => {
    // do something more
    return a * b;
};



// IIFE : Immediately Invoked Function Expression (최근에 잘 쓰이진 않지만 그래도 자스에서 함수만들면서 바로 호출하고 싶을때 유용하게 사용 가능)
function hello(){
    console.log('IIFE');
};
// 이걸 아래처럼 만들면 바로 만듦과 동시에 함수가 호출된다.
(function hello(){
    console.log('IIFE');
}) ();


// Fun Quiz
// function calculate(command, a, b) 입력받은 커맨드에 따라서 
// command : add1, substract, divide, multify, remainder

function calculate(command, a, b){
    if(command === add1){
        add1(a, b);
    }else if(command === substract){
        substract(a, b);
    }else if(command === divide){
        divide(a,b);
    }else if(command === multify){
        multify(a,b);
    }else if(command === remainder){
        remainder(a,b);
    }
};


const add1 = function(a,b){
    console.log(`add : ${a + b}`);
};
const substract = (a,b) => console.log(`substract : ${a-b}`);
const divide = (a,b) => console.log(`divide : ${a/b}`);
const multify = (a,b) => console.log(`multify : ${a*b}`);
const remainder = (a,b) => console.log(`remainder : ${a%b}`);

calculate(add1, 3, 5);
calculate(substract, 3, 5);
calculate(divide, 3, 5);
calculate(multify, 3, 5);
calculate(remainder, 3, 5);




// 스위치문을 사용해서하면 좀 더 간단하게 할수 있다.
function calculate2(command, a, b){
    switch(command){
        case 'add' :
            return a+b;
        case 'substract' : 
            return a-b;
        case 'divide' : 
            return a/b;
        case 'multiply' : 
            return a*b;
        case 'remainder' : 
            return a%b;
        default :
            throw Error('unknown command');
    }
}

console.log(calculate2('add', 3, 5));