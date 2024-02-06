enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

interface Product {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

interface ClothingProduct extends Product {
  sizes: Size[];
}

const product1: ClothingProduct = {
  id: "c001",
  name: "코드잇 블랙 후디",
  price: 129000,
  sizes: [Size.M, Size.L],
};

const product2: Product = {
  id: "c001",
  name: "코드잇 블랙 후디",
  price: 130000,
};

interface printProductFunctrin {
  (product: Product): void;
}

const printProduct: printProductFunctrin = (product) => {
  console.log(`${product.name}의 가격은 ${product.price}원 입니다.`);
};

printProduct(product1);
printProduct(product2);
