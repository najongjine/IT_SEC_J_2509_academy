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
    for (let idx = 2; idx <= 9; idx++) { // idx= idx+1
        console.log(`idx: ${idx}`);
    }
}
/*
{ } 이걸 영어로 bracket, 한국말론 바구니, 어려운 이론으로는 scope
각 scope(영역, 바구니, 방...) 마다 메모리 영역이 달라요
그래서 scope 가 다르면, 소스코드에 동일한 변수 이름이 보여도, 아예
다른놈으로 취급되요
 */