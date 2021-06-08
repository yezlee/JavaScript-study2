'use strict';

// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar(문법상으로 달달한, 편의에 의해 추가된 가짜 같은 느낌) over prototype-based inheritance

// 1. Class declarations
class Person{
    // constructor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //method
    speak(){
        console.log(`${this.name} : hello!`);
    }
}
// class라는 키워드를 이용해서 Person이라는 클래스를 만들고 constructor, 생성자를 이용해서 나중에 우리가 오브젝트를 만들 때 필요한 데이터를 전달한다. 전달받은 데이터를 이 클래스에 존재하는 두가지 fields인 name과 age에 전달된 데이터를 바로 할당해 주는 것이다. 따라서 여기 클래스에는 이름과 나이라는 fields도 있고, speak이라는 메소드도 안에 보면 단순하게 클래스 안에 있는 this.name을 출력하면서 헬로라고 말하는 메소드도 있다. 

// 새로운 object를 만들때는 new라는 키워드를 이용해서 만들수도 있다.
const yez = new Person('yez', 20);
// Person이라는 생성자안에는 이름과 나이라는 데이터가 전달되잖아, 그니까 이름은 yez이고 나이는 20이라고 적어서 새로운 오브젝트를 만드는 거지. 

console.log(yez.name); // yez
console.log(yez.age); // 20 
// 클래스를 이용해서 새로운 오브젝을 만들고!!! 아하 
// 메소드도 쓸수 있다
yez.speak(); // yez : hello!

// 따라서 위에 클래스에서 말하는 this는 만들어진 오브젝트(여기선 yez)를 말하는 것이고(왜냐면 클래스를 이용해서 오브젝을 만들며 전달해주는 데이터는 어차피 생성자로 가니까) 따라서 console.log(`${this.name} : hello!`); 여기서 말하는 this.name은 yez.name이지



// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // get age() {
    //     //사용자가 get age()를 호출하게 되면 우리는 바로 this.age를 보내야한다.
    //     return this.age;
    // }

    // // set은 값을 설정해서 주는 것이기 때문에 파라미터로 밸류를 꼭 받아와야한다. 
    // set age(value){
    //     // 새로운 밸류를 받으면 우리가 this.age를 value로 받아서 설정하게 된다.
    //     this.age = value;  
    // }


    
    get age() {
        //사용자가 get age()를 호출하게 되면 우리는 바로 this.age를 보내야한다.
        return this._age;
    }

    // set은 값을 설정해서 주는 것이기 때문에 파라미터로 밸류를 꼭 받아와야한다. 
    set age(value){
       
        // 이렇게 공격적으로 해도 되고
        // if(value < 0){
        //     throw Error('age can not be negative');
        // }
        
        //아니면 아래와 같은 식을 써줘도 된다.
        this._age = value < 0 ? 0 : value ;  
    }


    // 우리가 age라는 getter를 정의하는 순간 constructor안에 있는 this.age는 메모리에 올라가있는 데이터를 읽어 오는 것이 아니라! 바로 getter를 호출하게 된다. 

    // 그리고 우리가 setter를 정의하는 순간 = age; 이거, =, assign, 즉 값을 할당할 때 바로 메모리의 값을 할당하는 것이 아니라 setter를 호출하게 된다. 

    // 그말은 우리가 setter안에서 전달된 밸류를 this.age에 할당할 때 메모리 값을 업데이트 하는것이 아니라 이 세터를 호출하게 된다. 즉 이 세터로 돌아와서 this.age = value; 이 문장은 또 다시 세터를 호출하고 계속 무한 반복
    
    // 세터안에서 = 이걸 만나면 할당이 아니고 세터를 다시 부르는건가??????????

    // 암튼 무한반복을 방지하기 위해선 getter, setter안에서 쓰여지는 변수의 이름을 조금 다른 걸로 만들어줘야한다. 



    // 그래서 user라는 클래스안에는 총 3개의 field가 있는데 firstName, lastName, _age 이렇게 3개이다.
}

const user1 = new User('Steve', 'Job', -1);
// 사용자가 실수로 나이를 -1로 설정하게 됐을때 실제로 -1이라고 등록되지 않게 하기 위해, 사용자 혹은 클래스를 사용해는 내 동료가 실수를 해도 괜찮게끔, 좀 더 방어적인 자세로 만들수 있도록 해주는 것이 게터와 세터를 설정하는 것임. 
console.log(user1.age);


//그리고 field는 _ 이렇게 기호가 들어간 age가 있지만 우리가 .age라고 호출할수 있는것 그리고 .age에 값을 할당할수 있는 것은 (이렇게  this.age = age;) 내부적으로 getter와 setter를 이용하기 때문이다. 

// 조금 더 설명드리자면, class 내에 getter 와 setter 가 specifically define 되어있다면, 그 define 되어있는 property 에 한해서 accessor로 작용합니다. 그래서 위에 예제에서 age 에 대한 getter / setter 가 정확하게 define이 되어있기 때문에, 이제 저 "User" object에서의 age를 access 하려고하면 자동으로 JS가 getter / setter를 call 합니다.

// 그래서 this.age = age; 에서 'this.age =' 는 set age(value)를 call 합니다.
// 그러면 이제 여기 set age()을 보시면
// set age(value){
//     this.age = value;
// }
// set age가 처음에 호출되고 function body를 execute할때, this.age = value; 여기서 "this.age = " 는 다시 set age(value)를 호출하고, 다시 호출된 set age 에서 "this.age = "는 또 다시 set age(value)를 호출하고.. infinite recursion이 되서 callstack overflow 에러가 발생하죠.

// 그래서 나온 방법이 private property convention을 이용해서 getter 와 setter 안에 따로 age를 다른 이름으로 사용하자고 해서 _age로 define해줍니다.

// set age(value){
//     this._age = value;
// }
// 그러면 이제 다시 constructor 로 돌아가서,
// this.age = age; 이 실행될때 "this.age = "는 set age()를 호출하고, set age()의 body에서보면 실제로는 age가 아니라 _age 라는 또 다른 이름의 변수에 저장합니다. 여기서 _age는 setter 가 define되어있지 않기 때문에 바로 메모리에 _age의 값을 저장합니다.
// 실제로는 _age라는 변수가 저장된 것이기 때문에, User object에서 age가 아닌 _age도 직접 access해보면 age랑 같은 값인 것을 볼 수 있습니다.
// const user1 = new User('Java', 'Script', 10);
// console.log(user1.age);
// console.log(user1._age);
// 하면 둘다 같은 10이 나옵니다.
// 실제로는 age가 아니라 _age에 저장되었는데 왜 user1.age 도 10이 나오냐?  위에서도 설명했듯이 자동으로 getter를 호출하기때문에 getter에서 우리가 _age 값을 return하기로 정의를 바꾸어 주었기때문에 user1.age 도 10을 리턴하는 것입니다.

// 그래서 위의 엘리님의 13:19 예제는 사실상 깊이 들어가서 메모리 레벨까지 보게되면,
// age 는 실제로 undefined이고 _age 가 -1입니다. 하지만 외부 코드가 user1의  object를 access 할때는 age가 아니라 _age로 re-direct되기 때문에 high level에서 볼때 user1.age이 문제없이 -1로 작용하게되죠. 외부에는 불필요한 정보를 숨기는 것이고 이게 바로 encapsulation이죠.



// 3. Fields (public, private)
// Too soon! - 너무 최근에 추가되어진거라서 많은 개발자들이 쓰고있지는 않음. 2020/4 기준. 

class Experiment{
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateFiled); // undefined

// constructor, 생성자를 사용하지않고 필드를 정의할 수가 있는데 그냥 정의하게 되면 public이 되고 , 즉 외부에서 접근이 가능하고. # 해시기호를 붙이게 되면 private, 클래스 내부에서만 값이 보여지고 접근이 가능하다. 

// 4. Static properties and methods
// Too soon as well!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

// 클래스안에 있는 필드와 메소드들은 새로운 오브젝을 만들때 마다 고대로 복제되어서 그 값만, 우리가 지정한 값으로 변경이 되어서 만들어진다. 
// 근데 간혹 이런 오브젝트에 상관없이, 데이터와 상관없이 클래스가 가지고 있는 고유의 값과, 이런 데이터와 상관없이 동일하게 반복적으로 사용되어지는 메소드가 있을수 있다. 바로 그런것들을 위처럼 static이라는 키워드를 이용해서 붙이면 오브젝트에 상관없이 클래스 자체에 연결되어 있다. 

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher); // undefined
// 원래 위 처럼 사용하면 잘 나오는데 위에 static을 이용해서 publisher를 정의해서 undefined가 뜨는것. 

console.log(Article.publisher); // Dream Coding
// 이렇게 하면 된다. 왜냐, 스태틱은 오브젝트마다 할당되어 지는 것이 아니고 클래스 자체, 즉 Article라는 클래스 자체에 붙어있기 때문에 그렇다. 위처럼 하면 Dream Coding 이라고 값이 잘 나온다.

Article.printPublisher(); // Dream Coding
// 그래서 스태틱 함수를 호출할 때도 클래스 이름을 이용해서 호출하면 잘 출력된다. 

// 이건 나중에 타입스크립트 할 때도 많이 쓰인다. 
// 언제 쓰이냐, 오브젝트에 상관없이, 들어오는 데이터에 상관없이 공통적으로 클래스에서 쓸수 있는 거라면 스태틱과 스태틱 메소드를 이용해서 작성하는것이 메모리의 사용을 조금 더 줄여줄 수 있다.  



// 상속과 다형성
// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

// 도형을 만들 때, 똑같은 코드를 반복해서 사용하는 것보다 클래스로 하나 만들어놓고 가져다가 쓰는게 훨씬 효율성 있지? 그래서 Shape라는 클래스를 만들어서 draw(), getArea()라는 메소드를 정의.

// 그리고 사각형을 만들고 싶으면 Rectangle이라는 클래스를 만들면서 Shape을 extends 해!! 이렇게 연장(상속?)만 해도 Shape에서 정의한 fields와 method가 자동적으로 Rectangle에 포함이 된다!

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('🔺');
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
}
// 필요한 함수만 재.정.의.해서 사용할 수가 있는데 이게 바로 오버라이딩!!!!이다. 클래스를 상속받아서 사용하는데 내가 재정의해서 메소드를 사용하고 싶으면 다시 그 메소드를 써서 재정의 할수 있어.
// 그리고 자식클래스에서 재정의한것도 쓰면서 부모클래스에서 사용한것도 쓰고 싶으면 super!!!!라는 것을 쓰면서 뒤에 메소드를 불러줘. super.draw(); 이렇게 그러면 부모클래스에 있는 메소드를 부르는것임.


const rectangle = new Rectangle(20, 20, 'blue');
const triangle = new Triangle(20, 20, 'red');

rectangle.draw();
console.log(rectangle.getArea());

triangle.draw();
console.log(triangle.getArea());



// 6. Class checking instanceOf

// instanceOf operator - 이 오브젝트는 클래스를 이용해서 만들어진 새로운 인스턴스이다. 
// instanceOf는 왼쪽에 있는 오브젝트가 오른쪽에 있는 클래스의 인스턴스인지 아닌지, 즉 이 오브젝트가 이 클래스를 이용해서 만들어진 아이인지 아닌지를 확인해주는 것이다. true/false로 리턴이 됨. 

console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true - Shape을 상속했으니까
console.log(triangle instanceof Object); // true - 우리가 자바스크립트에서 만든 모-든 오브젝트 클래스들은 자바스크립트에 있는 Object를 상속한것이다.

// Object 설명을 alt누르고 들어가서 보면 정의된 부분을 볼수 있는데, 자바스크립트의 모든 오브젝트는 Object를 상속한것이다. 보면, constructor()도 있고 toString()..등등 다양한 메소드들이 있다. 그 말은, 우리가 어떤 오브젝트든지 공통적으로 존재하는 메소드를 쓸 수가 있다는 것이다. 
console.log(triangle.toString()); // [object Object]
// 위처럼 쓸데없이 해도 되고
// Triangle 같은 클래스 안에서 toString()을 새롭게 오버라이딩 할 수도 있다. 


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
// 자바스크립트의 내부에 포함되어 있는 오브젝트에는 어떤 것들이 있는지 카테고리화 되어 묶여져있는 아이들을 살펴볼수가 있다. 