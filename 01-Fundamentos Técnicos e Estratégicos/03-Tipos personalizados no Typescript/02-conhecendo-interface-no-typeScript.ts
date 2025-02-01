interface IProduct {
  id: number;
  name: string;
  price: number;
}

function newProduct(product: IProduct) {
  console.log(product);
}
newProduct({ id: 1, name: "fogão", price: 1000 });
