//Interface x Type
//Interface
interface IBase {
  price: number;
}

interface IProduct extends IBase {
  id: number;
  name: string;
}

interface IProduct {
  quantity: number;
}

//Type

type TBaseProduct = {
  price: number;
};

type TProduct2 = TBaseProduct & {
  id: number;
  name: string;
};

type TProduct2 //não deixa

let product01: IProduct = { id: 1, name: "Product 01", price: 1000, quantity:12 };

let product02: TProduct2 = { id: 2, name: "Product 02", price: 2000 };


type TTypeString = string
type TTypeNumber = number

interface X extends string {} //não pode

//Quando utilizar? No mercado usa mais interface mais o type tem as regras acima que evita erros mas a escolha via muito do time