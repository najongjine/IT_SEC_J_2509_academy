//node test1.js

let a = 1;
let b = 2;
let c = a + b;

a + 3; //4 가 나오긴 했는데.. 저장을 안함
console.log(`a:${a}`); // 1
a = a + 3; // a 의 값과 3을 더한다음, 다시 a에 저장하라
console.log(`a:${a}`); // 4


