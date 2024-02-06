interface Weapon {
  attack: number;
}

interface Armor {
  defence: number;
}

type Equipment = Weapon &
  Armor & {
    id: string;
    name: string;
    price: number;
  };

function printEquipment(equipment: Equipment) {
  console.log(`이름: ${equipment.name}`);
  console.log(`이 장비는 공격력을 ${equipment.attack}, 방어력을 ${equipment.defence} 증가 시킵니다.`);
}

const item1: Equipment = {
  id: "g001",
  name: "서리불꽃 글러브",
  price: 100,
  attack: 5,
  defence: 42,
};

printEquipment(item1);

// 다른 답안

// interface Equipment {
//   id: string;
//   name: string;
//   price: number;
// }

// interface Weapon extends Equipment {
//   attack: number;
// }

// interface Armor extends Equipment {
//   defence: number;
// }

// 여기서 intersection 타입 사용
// function printEquipment(equipment: Weapon & Armor) {
//   console.log(`이름: ${equipment.name}`);
//   console.log(`이 장비는 공격력을 ${equipment.attack}, 방어력을 ${equipment.defence} 증가 시킵니다.`);
// }

// const item1: Equipment = {
//   id: "g001",
//   name: "서리불꽃 글러브",
//   price: 100,
//   attack: 5,
//   defence: 42,
// };

// printEquipment(item1);
