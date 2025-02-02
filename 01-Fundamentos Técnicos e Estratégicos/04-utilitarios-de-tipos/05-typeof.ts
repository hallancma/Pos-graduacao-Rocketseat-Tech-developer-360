interface IProduct2 {
  id: number;
  name: string;
  quantity: number;
}

const product11: IProduct2 = { id: 1, name: "Produto 1", quantity: 1 };
const product22: typeof product11 = { id: 1, name: "Produto 1", quantity: 1 };
