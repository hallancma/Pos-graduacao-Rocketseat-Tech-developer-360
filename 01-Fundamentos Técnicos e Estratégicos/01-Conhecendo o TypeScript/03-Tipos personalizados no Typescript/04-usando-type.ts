type TProduct = {
  id: number;
  name: string;
};
function newProduct(product: TProduct) {}

newProduct({ id: 1, name: "fogão" });

type TSelectResponse = TProduct[] | null;

function selectProducts(): TSelectResponse {
  return null;
}
