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

// idx * idy 만큼 실행하죠
for (let idx = 2; idx <= 9; idx++) { // idx= idx+1
    for (let idy = 1; idy <= 9; idy++) { // idx= idx+1
        //console.log(`idx: ${idx} * idy: ${idy} = ${idx * idy}`);
    }
}
/*
{ } 이걸 영어로 bracket, 한국말론 바구니, 어려운 이론으로는 scope
각 scope(영역, 바구니, 방...) 마다 메모리 영역이 달라요
그래서 scope 가 다르면, 소스코드에 동일한 변수 이름이 보여도, 아예
다른놈으로 취급되요
 */

for (let item of array1) {
    //console.log(`item: ${item}`);
}



/*
제어문 -
if
loop

함수 - 모듈, 기계, 블랙박스 & 화이트박스
블랙박스 기준 : 함수는 사용법이 있어요
 */
/** sum() 함수를 호출하세요. 그러면 흑백 화면에 1+2을 보여줄 거에요 */
function sum() {
    console.log("1+2=3");
}

/*
function : 함수를 선언 하겠다
sum 함수 이름 짓겠다. 내가 지으고 싶은걸로 지으면 되요
() 이건 함수 이름 오른쪽에 꼭 있어야 되요
{} 이건 () 오른쪽에 꼭 있어야 되요
{} 안에 내가 하고싶은 내용물 채우면 되요
 */

//sum();

/*
subtract 라는 함수를 선언하고,
흑백 화면에 2-1=1 이라는 내용물을 채워 주세요
 */


/** 
 * 함수의 모범 
 * @param a 첫 번째 숫자
 * @param b 두 번째 숫자
 * @returns a + b 의 결과값
 */
function sum2(a: number, b: number) {
    return a + b;
}

sum2(1, 2);
