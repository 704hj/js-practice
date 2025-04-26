const products = [
    {id: 1, name: "모자"},
    {id: 2, name: "티셔츠"},
    {id: 3, name: "신발"}
];

// map을 사용해서 ["모자입니다", "티셔츠입니다", "신발입니다"] 만들기
const result = products.map((product) => (product.name + "입니다"));
//result 라는 변수 정의
//products 배열을 가공할건데, product 라는 변수에 저장
//product로 새로 만든 배열에 name들을 꺼내서 입니다를 붙히려고 함.
console.log(result);

const numbers = [1,2,3,4,5];

// map을 사용해서 [2, 4, 6, 8, 10] 만들기
const doubled = numbers.map((num) => num *2);
//numbers라는 변수로 배열 생성
//numbers 배열을 가공할건데, doubled라는 변수에 저장
//doubled로 새로 만든 배열에 num이라는 내가만든 새로운 변수에 저장해서 꺼낼거고 
//각 num에 2배를 해서 doubled에 저장 후 출력할 거임임
console.log(doubled);

const names = ["apple", "banana", "cherry"];

// map을 사용해서 ["APPLE", "BANANA", "CHERRY"] 만들기
const upperNames = names.map(name => name.toUpperCase());
//names라는 배열을 가공할건데, upperNames라는 변수에 저장
//upperNames로 새로 만든 배열을을 name이란 변수에 저장할거고 
//name의 문자열은 대문자로 변환해서 출력
console.log(upperNames);

const users = [
    {id:1, name:"민수"},
    {id:2, name:"영희"},
    {id:3, name:"철수"}
];

// map을 사용해서 ["민수님", "영희님", "철수님"] 만들기
const nim = users.map((user) => user.name + "님");

console.log(nim);

const numberss = [100,200,300];

// map을 사용해서 ["100원", "200원", "300원"] 만들기
const num = numberss.map((n) => n + "원");

console.log(num);

const productss = [
    { name: "모자", price: 15000 },
    { name: "티셔츠", price: 25000 },
    { name: "신발", price: 50000 }
];

// map을 사용해서 ["모자 - 15000원", "티셔츠 - 25000원", "신발 - 50000원"] 만들기
const pro = productss.map((p) => p.name + " - " + p.price +"원");

console.log(pro);