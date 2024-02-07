"use strict";
const shoeSizes = [230, 250, 280];
shoeSizes.map((num) => { });
const clothingSizes = ["M", "L", "XL"];
clothingSizes.map((names) => { });
function printArray(items) {
    for (const item of items) {
        console.log(item);
    }
}
printArray(shoeSizes);
printArray(clothingSizes);
const point = [1, 2];
const fullname = ["김", "코드잇"];
const stock = new Map();
stock.set("g001", 1);
stock.set("g002", 2);
console.log(stock.get("g001"));
console.log(stock.get("g002"));
const productMap = {};
productMap["c001"] = "11";
productMap["c002"] = "22";
console.log(productMap);
