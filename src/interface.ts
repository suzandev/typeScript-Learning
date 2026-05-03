//! interface only use to define the structure of an object.

//* Example - 1 */

interface User {
  name: string;
  age: number;
}

interface Role {
  role: "admin" | "user" | "guest";
}

interface UserWithRole extends User, Role {}

const user1: UserWithRole = {
  name: "John Doe",
  age: 50,
  role: "admin",
};

console.log(user1);

//* Example - 2 */

interface Add {
  (num: number, num2: number): number;
}

const add: Add = (num, num2) => num + num2;

console.log(add(5, 10));
