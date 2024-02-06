enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}

let product: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: Size[];
} = {
  id: "c001",
  name: "코드잇 블랙 후디",
  price: 129000,
  sizes: [Size.S, Size.L],
};
