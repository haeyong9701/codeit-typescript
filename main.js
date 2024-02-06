"use strict";
// Union 타입 |
// 다른 타입 둘다 허용 하고 싶을 때 활용
function printEquipment(equipment) {
    console.log(`이름: ${equipment.name}`);
    if ("attack" in equipment) {
        console.log(`이 장비는 공격력을 ${equipment.attack} 증가 시킵니다.`);
    }
    else if ("defence" in equipment) {
        console.log(`이 장비는 방어력을 ${equipment.defence} 증가 시킵니다.`);
    }
}
const item1 = {
    id: "w001",
    name: "전쟁 도끼",
    price: 100,
    attack: 15,
};
const item2 = {
    id: "a001",
    name: "사슬 갑옷",
    price: 200,
    defence: 52,
};
printEquipment(item1);
printEquipment(item2);
