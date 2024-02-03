"use strict";
let product = {
    id: "c001",
    name: "코드잇 블랙 후디",
    price: 129000,
    sizes: ["M", "L", "XL"],
};
if (product.membersOnly) {
    console.log("회원 전용 상품");
}
else {
    console.log("일반 상품");
}
