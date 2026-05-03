type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ["Alice", "Bob", "Charlie"];
const rollNumbers: GenericArray<number> = [4, 5, 1];
const isEligibleList: GenericArray<boolean> = [true, false, true];

console.log(friends);
console.log(rollNumbers);
console.log(isEligibleList);

//* Example - 2 */

type Coordinates<X, Y> = [X, Y];

const coordinates1: Coordinates<number, number> = [10, 20];
const coordinates2: Coordinates<string, string> = ["10", "20"];

//* Example - 3 */
type User = { name: string; age: number };

const userList: GenericArray<User> = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

console.log(userList);
