"use strict";

// JavaScript is synchronous. 동기적이다.
// Execute the code block in order after hoisting.
// Hoisting : var, function declaration - 이와 같은 애들이 자동적으로 제일 위로 올라가는거 - 즉 먼저 선언 되는거. 호이스팅이 된 이후부터 코드가 나타나는 순서대로 자동적으로 실행이 된다.

console.log("1");
setTimeout(() => {
  console.log("2");
}, 1000); // 브라우저에서 제공되는 api - 우리가 지정한 시간이 지나면 우리가 전달한 콜백 함수(야 우리가 전달해준 함수를 나중에 니가 불러줘)를 호출하는거야.
console.log("3");
// 1 -> 3 -> 일초 있다가 2가 콘솔창에 찍힘
// 이게 asynchronous, 비동기적인 실행 방법이다.
// 그니까 setTimeOut() 이라는 api안에 콜백함수 ' () => { console.log("2"); } '를 넣어주는거야. 그게 1000ms 즉 1초 뒤에 그 콜백함수를 실행하라고 정의한거

// 콜백도 2가지로 나눠진다. - 즉각적으로 동기적으로 실행되는 콜백,  언제 실행될지 모르는 비동기 콜백
// 콜백에는 동기적으로 실행하는 방법, 비동기적으로 실행하는 방법 두가지로 나뉜다.

//동기
// 1. Synchronus callback
function printImmediately(print) {
  // printImmediately라는 함수는, 뭔지는 모르지만 print하는 콜백을 받아서 바로 실행을 하는  print(); 함수를 만듦.
  print(); //The print() method prints the contents of the current window.
}
printImmediately(() => console.log("hello")); // printImmediately() 이 함수를 호출하면 바로 print()라는 콜백함수를 전달 받지, 자바스크립트는 타입이 아니어서 어떤 타입을 받는지(print 파라미터) 예측할수는 없지만 , 아무런 인자가 전달되지 않는 간단하게 hello만 로그에 찍는 함수를 전달함

// 설명 ===> 위 함수는 function declaration 이잖아 그래서 호이스팅을 당함. 따라서 제일 위에 선언이 되고, 1,3을 차례대로 콘솔에 찍고 위에 선언된 함수 printImmediately()를 실행시켜서 hello가 콘솔에 찍히고 난 후, 1초뒤에 2가 출력

// 비동기
// 2. Asynchronous callback
function printWithDelay(print, timeout) {
  // printWithDelay()라는 함수에 print와 얼마정도를 timeout하고 싶은지 알려주는 인자로 2개 받아.
  setTimeout(print, timeout); // 브라우저 api를 이용해서 우리가 원하는 print라는 콜백함수를 호출하고 timeout이라는 인자를 전달.
  //serTimeout(콜백함수(Time handler), 시간(ms))

  // printWithDelay() 이 함수는 setTimeout()이르는 함수를 감싸고 있는 wrapping 하는 함수, 즉 전달받은 인자들을 setTimeout함수에 요청하는 것.
}
printWithDelay(() => console.log("async callback"), 2000);
// 그니까 () => console.log("async callback") 이게 print인자로 들어가는거고/ 2000이 timeout인거지.

// Callback Hell example
// 클래스 안에 함수처럼 생긴애들은 메소드~
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "yez" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "yez") {
        onSuccess({ name: "yez", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");
userStorage.loginUser(
  id,
  password,
  (user) => {
    // id
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello, ${userWithRole.name}. You have a ${userWithRole.role} role. `
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// 콜백지옥 문제점
// 1. 가독성이 너무 떨어짐.
// 2. 에러 발생하거나 디버깅해야할때도, 체인이 길어지면 길어질수록 분석이 어려워짐
