// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["apple", "banana"]);
console.log(json); //["apple","banana"] 뭔가 좀더 배열스러워짐?

//오브젝을 배열로
const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  //   symbol: Symbol("id"),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2021-06-16T12:05:45.095Z"}
//jump()같은 함수나 symbol은 json에 포함되지않음

// json을 좀더 통제하고 싶다면 api문서에 적혀있듯이
json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json); //{"name":"tori","color":"white"}

//아니면 함수를 넣어도 됨
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  //   return value;
  return key === "name" ? "yez" : value;
});
console.log(json);

// 특이한점은 key : , value : [object Object] 이렇게 처음 전달되는것은 토끼의 오브젝트를 감싸고 있는 제일 최상의 것이 전달이 되고 나머지 키, 밸류가 전달된다
// 위와 같은 걸 이용해서 return 할때, return key === 'name' ? 'yez' : value; 이렇게 key에 name이 있으면 무조건 밸류를 'yez'로 설정하고 아니면 그냥 있던 value를 리턴해

console.clear();

// 2. JSON to Object
// parse(json)
json = JSON.stringify(rabbit);
//const obj = JSON.parse(json); 얘네들을 좀 더 세밀하게 전달하고 싶을때 reviver 이라는 콜백함수를 이용해
const obj = JSON.parse(json, (key, value) => {
  console.log(`key : ${key}, value : ${value}`);
  return key === "birthDate" ? new Date(value) : value;
});

console.log(obj.birthDate.getDate()); // 위에 콜백함수를 사용해서 이제 사용가능함
console.log(obj);
rabbit.jump();
// obj.jump(); // 에러가 난다 - 왜냐 stringify 할때 함수가 안들어가잖어

console.log(rabbit.birthDate.getDate());
// console.log(obj.birthDate.getDate()); // 에러가뜸. 왜냐 birthDate는 스트링이기 때문에
console.log(obj.birthDate);
// 그래서 얘네들을 좀 더 세밀하게 전달하고 싶을때 reviver 이라는 콜백함수를 이용해
