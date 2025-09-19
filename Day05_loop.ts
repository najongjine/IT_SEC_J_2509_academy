// 반복문
/*
컴퓨터 기계한데 1,2 번 일시키고 끝내는게 아니라,
계속 일시키고 싶어요
 */

for (let idx = 0; idx < 3; idx++) { // idx= idx+1
    //console.log(`idx: ${idx}`);
}
/*
let idx=0 요건 딱 한번만 실행되요.
idx <3 요 조건체크가 실행되요
그다음 {} 안에있는 내용물을 실행해요
그다음 idx++ 을 실행해요

그다음 idx < 3 조건체크를 실행해요
그다음 {} 안에있는 내용물을 실행해요
그다음 idx++ 을 실행해요
....

언제 끝나요? 
idx < 3
요 조건이 false면 빠져 나와요
 */

let array1 = ["고양이", "멧돼지", "뱀"];
for (let item of array1) {
    //console.log(`item: ${item}`);
}
array1.forEach((item) => {
    //console.log(`item: ${item}`);
});

for (let idx = 2; idx <= 9; idx++) { // idx= idx+1
    console.log(`idx: ${idx}`);
}