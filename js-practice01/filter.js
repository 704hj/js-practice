const users = [
    { name: "효주", age: 24 },
    { name: "지민", age: 30 },
    { name: "하늘", age: 27 },
    { name: "태호", age: 20 }
  ];

  // 25세 이상인 사람만 뽑기
  const adults = users.filter((user) => user.age >= 25);

  console.log(adults);

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

  // filter를 사용해서 [2, 4, 6, 8] 만들기
  const evens = numbers.filter((n) => n % 2 === 0);
  //자바스크립트에서 =이란건 없는거지?
  //그럼 == 이거랑 === 두개의 차이는?
  //== : 값만 느슨하게 비교함
  //자료형이 달라도 자동으로 형 변환해서 비교
  //=== : 값도 같고 자료형도 같아야 true
  console.log(evens);

  const words = ["apple", "kiwi", "banana", "pear", "cherry"];

  // 글자 수가 5글자 이상인 단어만 추리기
// 기대 결과: ["apple", "banana", "cherry"]
const longwords = words.filter((longword) => longword.length >= 5);
//항상 .length는 어떤 값(문자열, 배열 등)에 붙는 것것
console.log(longwords);

const userss = [
    { name: "민수", isOnline: true },
    { name: "영희", isOnline: false },
    { name: "철수", isOnline: true },
    { name: "하늘", isOnline: false }
  ];
  
  // 온라인 상태인 유저만 추리기
  // 기대 결과: [{name: "민수", isOnline: true}, {name: "철수", isOnline: true}]
  const userr = userss.filter((userrr) => userrr.isOnline === true);
  //=== true는 생략 가능
  console.log(userr);

  const scores = [85, 92, 58, 77, 99, 61 ];

// 80점 이상인 점수만 추리기
// 기대 결과: [85, 92, 99]
const score = scores.filter((highscore) => highscore >= 80);

console.log(score);

const products = [
    { name: "모자", price: 15000 },
    { name: "티셔츠", price: 25000 },
    { name: "신발", price: 50000 },
    { name: "양말", price: 3000 }
  ];
  // 가격이 20000원 이상인 상품만 추리기
// 기대 결과: [{ name: "티셔츠", price: 25000 }, { name: "신발", price: 50000 }]
const expensive = products.filter((product) => product.price >= 20000);
console.log(expensive);