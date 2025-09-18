//node Day04.ts
// let a=1;
let a: number = 1;
let b: string = "2";
let sum: number = 0;

//sum=a+b;
/*
let a=1; 
이건 들어오는 값에 따라서 타입이 자동으로 지정이 되요.

let a:number=1;
이건 내가 직접 타입을 정한 거에요.

let sum:number = 1+"2";
이런걸 막아줘요
 */

//              0  1  2
//let array1 = [1, 2, 3];
let array1: number[] = [1, 2, 3];

// 서랍번호 0번의 값을 5로 바꿔주세요
// 힌트: =
array1[0] = 5;
array1 = [5];
console.log(`array1: ${array1}`);
console.log(`array1[0]: ${array1[0]}`);

let jsObject = { a: 1, b: 2 };
console.log(`jsObject: `, jsObject);
console.log(`jsObject a: `, jsObject.a);
console.log(`jsObject b: `, jsObject.b);

// 지금 이거 해독하지 마세요
let 내쇼핑몰 = [{ "제품": "멍멍이", "가격": "500" }
    , { "제품": "타이거", "가격": "5000" }
]


let js1: any;
js1 = 1;
js1 = "dfsdfs";
js1 = {}
js1 = []
/*
any 라는 타입은, javascript, python같이
아무거나 다 담을수 있어요.
쇼핑몰 상품 올리기하기전 이미지 미리보기같은 어려운 기능,
혹은 gpt한테 어려운 기능을 대리 맡길때 쓰는 타입이다 라고 생각 하세요
 */
