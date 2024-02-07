const shoeSizes: number[] = [230, 250, 280];
shoeSizes.map((num) => {});

const clothingSizes: string[] = ["M", "L", "XL"];
clothingSizes.map((names) => {});

function printArray<T>(items: T[]) {
  for (const item of items) {
    console.log(item);
  }
}

printArray(shoeSizes);
printArray(clothingSizes);

type Pair<T> = [T, T];
const point: Pair<number> = [1, 2];
const fullname: Pair<string> = ["김", "코드잇"];

const stock = new Map<string, number>();
stock.set("g001", 1);
stock.set("g002", 2);
console.log(stock.get("g001"));
console.log(stock.get("g002"));

// Record
// 객체에 키와 밸류 타입을 정해놓고 싶을 때 사용.
const productMap: Record<string, string> = {};
productMap["c001"] = "11";
productMap["c002"] = "22";

console.log(productMap);
