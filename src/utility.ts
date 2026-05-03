//* utility types */

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color: string;
};

//! Pick type use kore amra kono type er specific property gula ke select korte pari
type ProductPreview = Pick<Product, "id" | "name" | "price">;

//! Omit type use kore amra kono type er specific property gula ke exclude korte pari
type ProductWithoutStock = Omit<Product, "stock" | "color">;

//! Required type use kore amra kono type er sob property ke required korte pari
type productWithColor = Required<Product>;

//! Partial type use kore amra kono type er sob property ke optional korte pari
type OptionalProduct = Partial<Product>;

//! Readonly type use kore amra kono type er sob property ke readonly korte pari
type ReadonlyProduct = Readonly<Product>;

//! Jodi kono somoy empty object create korte hoy tahole Record type use kora jay
type EmptyObject = Record<string, unknown>;

const product1: ProductPreview = {
  id: 1,
  name: "Product 1",
  price: "$10",
};
