"use strict";
var Size;
(function (Size) {
    Size["S"] = "S";
    Size["M"] = "M";
    Size["L"] = "L";
    Size["XL"] = "XL";
})(Size || (Size = {}));
const product1 = {
    id: "c001",
    name: "코드잇 블랙 후디",
    price: 129000,
    sizes: [Size.M, Size.L],
};
const product2 = {
    id: "c001",
    name: "코드잇 블랙 후디",
    price: 130000,
};
const printProduct = (product) => {
    console.log(`${product.name}의 가격은 ${product.price}원 입니다.`);
};
printProduct(product1);
printProduct(product2);
