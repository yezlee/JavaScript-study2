// 함수 선언
function doSomething(add){
    console.log(add);
}

function add(a, b){
    const sum = a + b;
    return sum;
}


// 함수 호출
doSomething(add);


const addFun = add;
console.log(addFun(6,2));



// false : 0, -0, '', null, undefined
// true  : -1, 'hello', 'false'
// object는 안에 값이 있던 없던 데이터가 있던 비어져있건 오브젝트가 자체가 만들어진것이기 때문에 true이다. 

let obj = {
    name : 'yez'
}; 

// let obj = {
// };  이건 undefined

if(obj){
    console.log(obj.name);
}
obj && console.log(obj.name);
// obj가 참이면(&&) 뒤에 obj.name을 부르는 로그도 출력이된다. 
// 위에 두개는 같은 결과를 호출한다.
// 만약 obj안에 아무 값도 안들어 있으면 if문도 성립이 안되고 obj도 undefined이기 때문에 참이 아니여서 뒤에 로그 부르는 것도 실행이 되지 않는다. 
