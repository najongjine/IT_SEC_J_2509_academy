let user_input = 1234;
let door_password = 1234;
/*
if (user_input == door_password) {
    console.log(`문을 열겠습니다`);
} else {
    console.log(`비밀번호가 틀렸습니다`);
}
     */
if (user_input == door_password) {
    console.log(`비밀번호 ok`);
}
if (user_input != door_password) {
    console.log(`비밀번호 틀림`);
}


//if 문을 쉬운 형태로
if (false) {
    console.log("조건이 true 일때만 여기가 실행")
}
else if (true) {
    console.log("if 가 조건이 안맞아서 else if가 실행 됬어요")
} else {
    console.log("if도, elseif 도 조건이 안맞아서 else가 실행됬어요")
}

/*
if() 키워드가 나오면 조건검사는 무조건 해요.
if, else if, else 요거는 한 세트에요.
하나가 조건이 맞아서 선택 되면, 나머지 세트는 선택 못해요
 */

let score = 60;
/*
점수가 90점 이상이면 A   score >=90
80점~89 면 B           score >=80 && score <=89
70~79면 C
60~69면 D
60점도 안되면 F
 */
