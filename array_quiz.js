// Q1. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];

  //answer - use join()
  const result = fruits.join(", ");
  console.log(result);

  console.log(`there are ${fruits[0]}, ${fruits[1]}, ${fruits[2]} `);

  // for(let i = 0; fruits.length > i; i++){
  //   console.log(fruits[i]); // 과일들이 그냥 하나하나씩 나열됨 - 정답아님
  // }

  // for(let i of fruits){
  //   console.log(i); // 과일들이 그냥 하나하나씩 나열됨 - 정답아님
  // }
}

// Q2. make an array out of a string
{
  const fruits = "🍎, 🥝, 🍌, 🍒";

  // answer - use split()
  // const result = fruits.split(); // split사용할때 구분자를 넣어주지 않으면 그냥 배열하나에 다 넣어버림 ["🍎, 🥝, 🍌, 🍒"]
  const result = fruits.split(", "); //(4) ["🍎", "🥝", "🍌", "🍒"]
  const result2 = fruits.split(", ", 2); // 그리고 seperator 뒤에 limited를 넣으면 그 갯수만큼 나온다. (2) ["🍎", "🥝"]
  console.log(result);
  console.log(result2);

  // const fruitsArray = new Array(fruits);
  // console.log(fruitsArray); //["🍎, 🥝, 🍌, 🍒"] 하지만 이게 아니고 배열 하나하나에 넣어야됨
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.splice(0, 5, "5,4,3,2,1");
  console.log(array); //["5,4,3,2,1"]

  //answer - use reverse()
  const result = array.reverse(); // 이렇게 하면 reverse한것만 result에 담는게 아니고 그냥 array자체를 리버스 해버림. 리턴값도 배열자체도 reverse
  console.log(result); //["5,4,3,2,1"]
  console.log(array); //["5,4,3,2,1"]
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // array.splice(0,2); // 이건 지워버린 그 배열을 리턴함 그래서 얘를 찍어보면 // (2) [1,2]
  // console.log(array); //(3) [3, 4, 5] 하지만 문제는 array는 변화가 없어야함. 그냥 새로운 배열을 만들라고해서 splice는 쓸수 없음

  // splice()는 배열 자체를 바꿔주고 slice()는 배열에서 원하는 부분만 리턴해서 받아오고 싶을때 사용하면 된다.

  //answer - use slice()
  const result = array.slice(2); // slice는 (start index, end index) 근데 end index는 적어준 넘버를 포함하지 않음.
  // 또 slice()에서 end index를 적어주지 않으면 start index에서 부터 끝까지 배열에 넣어버림
  console.log(result); //(3) [3, 4, 5]
  console.log(array); //(5) [1, 2, 3, 4, 5]
}

console.clear();

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student("A", 29, true, 45),
  new Student("B", 28, false, 80),
  new Student("C", 30, true, 90),
  new Student("D", 40, false, 66),
  new Student("E", 18, true, 88),
];

// Q5. find a student with the score 90
// use find()
// find() 는 두개의 인자를 받는데, 처음엔 predicate라는 함수(콜백함수)를 받고,
// find는 배열의 첫번째 인자를 값으로 돌려주는데 언제? 전달된 콜백함수가 true이면 - 만약 찾지 못하면 undefined를 리턴함
// predicate는 배열에 있는 모든 요소들마다 호출이된다. - 이 호출되어지는 콜백함수가 true를 리턴하면 바로 함수를 멈추고 그 true가 된 요소를 리턴한다.
{
  //find는 내가 콜백함수를 만들어서 전달해야함
  // 그리고 이 콜백함수는 boolean타입을 리턴해야함
  // const result = students.find(function (value, index) {
  //   return value.score === 90;
  // });
  const result = students.find((value) => value.score === 90); // arrow f는 리턴도 생략가능하잖아
  console.log(result);

  // 설명 : 우리가 전달한 이 콜백함수 (value) => value.score === 90 는 배열에 있는 모든 요소들마다 하나씩 호출이 되는데 즉, 배열에 들어있는 아이템들 마다 순차적으로 하나하나씩 호출이 되는데 '야 나중에 호출할게'라고 해서 콜백함수라고 하잖아. 그래서 첫번째 학생일때 콜백함수가 호출이 되어지고, 이 콜백함수가 만약에 리턴을 true로 하면 당장 이 find메소드가 멈추게 되고 첫번째로 true가 된 student를 리턴하게 된다. 근데 false이면 다음학생...이런식으로 되는것임
}

// Q6. make an array of enrolled students
// use filter() - filter메소드 역시 콜백함수가 true이면 바로 그값을 리턴함
{
  const result = students.filter((student) => student.enrolled); //student.enrolled === true 이렇게 안쓰고 true생략해도 됨
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// use map() - map메소드는 배열 안에 들어있는 요소 한가지 한가지를 다른 것으로 변환해주는걸 mapping이라고 한다.
// 예를들어 3가지 아이템이 들어있는 배열이 있다고 하면, 맵은 지정된 콜백함수를 호출하면서 각각의 아이템들을 함수를 거쳐서 다시 새로운 값으로 변환하는 것을 말한다. 따라서 우리가 전달한 콜백함수가 어떤일을 하느냐의 따라서 원래 아이템들의 값이 다른 값으로 매핑 되어 만들어진다.
{
  const result = students.map((student) => student.score);
  console.log(result);
  // 즉 맵은 배열안에 있는 모든 요소들을 우리가 전달해준 콜백함수를 호출하면서 콜백함수에서 가공되어진 리턴되어진 값들로 대체하는 것이다. 이렇게 '배열안에 있는' 요소들을 원하는 함수를 이용해서 다른방식의 데이터를 만들고 싶을때 MAP을 이용하면 좋다!!!
  // 콜백함수로 전달되는 인자는 최대한 이해가 쉽게 이름을 지어줘야 한다.
}

// Q8. check if there is a student with the score lower than 50
{
  // const result = students.find((student) => student.score < 50);
  // 근데 이건 하나라도 참이면 바로 리턴해서...
  // console.log(result);

  const result = students.some((student) => student.score < 50); // true
  // some() 배열의 요소중에서 이 콜백함수가 리턴이 true가 되는애가 있는지 없는지 확인해주는 메소드
  console.log(result);

  // 이걸 every를 써서 동일하게 만들수가 있다.
  // every는 모든 요소들이, 즉 배열에 들어있는 모든 요소들이 이 조건을 충족해야지만 true를 리턴한다.
  const result2 = !students.every((student) => student.score >= 50); // true
  // some() 배열의 요소중에서 이 콜백함수가 리턴이 true가 되는애가 있는지 없는지 확인해주는 메소드
  console.log(result);
}

// Q9. compute students' average score
// reduce
// recuceRight()은 거꾸로 시작함. E, D, C..이렇게
{
  const result = students.reduce((prev, curr) => {
    console.log("----------------");
    console.log(prev);
    console.log(curr);
    return prev + curr.score;
    // reduce()는 리턴값이 있어야함
    // array_quiz.js:134 ----------------
    // array_quiz.js:136 0
    // array_quiz.js:137 Student {name: "A", age: 29, enrolled: true, score: 45}
    // array_quiz.js:135 ----------------
    // array_quiz.js:136 45
    // array_quiz.js:137 Student {name: "B", age: 28, enrolled: false, score: 80}
    // array_quiz.js:135 ----------------
    // array_quiz.js:136 125
    // array_quiz.js:137 Student {name: "C", age: 30, enrolled: true, score: 90}
    // array_quiz.js:135 ----------------
    // array_quiz.js:136 215
    // array_quiz.js:137 Student {name: "D", age: 40, enrolled: false, score: 66}
    // array_quiz.js:135 ----------------
    // array_quiz.js:136 281
    // array_quiz.js:137 Student {name: "E", age: 18, enrolled: true, score: 88}
    // array_quiz.js:142 369
  }, 0); // 0으로 initial value를 전달하면 제일 먼저 시작하는게 a학생이 아니고 0이된다.

  console.log(result);

  //간단하게 만들면
  const finalResult = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(finalResult / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();

  console.log(result);
  //console.log(result.join(", "));
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log(result);
}
