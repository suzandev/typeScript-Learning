//!Task 1: The "Optional" Shopping Cart EASY
//Concepts: Destructuring, Optional Properties, Default Values
//Scenario: You are building a checkout system. Users might buy one item by default,or specify a bulk quantity.

// Instructions:Write a function calculateTotal that takes a CartItem object.Use Destructuring to extract properties.If quantity is missing, ensure the calculation treats it as 1.Return the total cost (price * quantity).
// Hint: Set a default value during destructuring: { quantity = 1 } = item.

type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

const calculateTotal = (item: CartItem): number => {
  const { price, quantity = 1 } = item;
  if (price < 0 || quantity < 0) {
    throw new Error("Price and quantity must be non-negative.");
  }
  return price * quantity;
};

// Example usage:
const item1: CartItem = { name: "Book", price: 10 };
const item2: CartItem = { name: "Pen", price: 2, quantity: 5 };

console.log(calculateTotal(item1));
console.log(calculateTotal(item2));

//? Task 2: Merging User Profiles
// Concepts: Intersection Types (&)
//Scenario: A user signs up as a basic Person, but when hired, they gain JobDetails. An Employee is a union of both.

//Instructions: Create a new type Employee that combines Person and JobDetails. Write a function getProfile that accepts an Employee. Return a string: "Name: [name], Role: [role]".
// Hint: Use the & operator to merge the two types.

type Person = {
  name: string;
  age: number;
};
type JobDetails = {
  role: string;
  salary: number;
};

type Employee = Person & JobDetails;

const getProfile = (employee: Employee): string => {
  const { name, role } = employee;
  return `Name: ${name}, Role: ${role}`;
};

// Example usage:
const employee1: Employee = {
  name: "Suzan Chandra",
  age: 30,
  role: "Software Engineer",
  salary: 45000,
};
console.log(getProfile(employee1));

//? Task 3: The "Safe" Data Fetcher
// Concepts: Optional Chaining (?.), Nullish Coalescing (??)
// Scenario: API responses can be unpredictable. You need to safely access a deep property without causing a crash.
// Instructions: Write a function getZipCode that reaches deep into the object. If any part of the path is missing, or if the zipCode is null/undefined, return "00000".
// Hint: Chain ?. for every level and end with ?? "00000".

type UserResponse = {
  info?: {
    address?: {
      zipCode?: string;
    };
  };
};

const getZipCode = (response: UserResponse): string => {
  return response.info?.address?.zipCode ?? "00000";
};

// Example usage:

const response1: UserResponse = {
  info: {
    address: {
      zipCode: "12345",
    },
  },
};

const response2: UserResponse = {
  info: {
    address: {
      // zipCode is missing
    },
  },
};

console.log(getZipCode(response1));
console.log(getZipCode(response2));

//? Task 4: Type Assertion
// Concepts: Type Assertion (as), unknown type
//Scenario: You receive a value from a 3rd-party library typed as unknown. You are certain it's a string and need to manipulate it.
// Instructions: Create a variable upperValue. Assign secretValue to it using Type Assertion. Call .toUpperCase() on the resulting value.
// Hint: Use the value as string syntax.

let secretValue: unknown = "typescript is awesome";
let upperValue: string = secretValue as string;
console.log(upperValue.toUpperCase());

//? Task 5: Generic Constraints
// Concepts: Generics, Extends Constraint
// Scenario: You want a function that logs the length of various inputs (strings, arrays) but rejects types that don't have a .length.
// Instructions: Write a generic function logLength<T>(input: T). Constrain T to ensure it must have a length property of type number. Return the length value.
// Hint: Use <T extends { length: number }>.

//! ======== solve : 1 =======

function logLength<T extends { length: number }>(input: T): number {
  return input.length;
}

// Example usage:
console.log(logLength("Hello, world!"));
console.log(logLength([1, 2, 3, 4, 5]));

//! ======== solve : 2 =======

type HasLength = {
  length: number;
};

function logLength2<T extends HasLength>(input: T): number {
  return input.length;
}

// Example usage2:
console.log(logLength2("Hello, TypeScript!"));
console.log(logLength2([10, 20, 30]));

//? Task 6: The Property Guard
// Concepts: keyof, Generics
// Scenario: Create a utility that gets a property from an object while preventing typos at compile-time.
// Instructions: Create a function getProductProp<T, K>(obj: T, key: K). Constraint K to be a valid key of T. Return obj[key].
// Hint: Use <T, K extends keyof T>.

function getProductProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

// Example usage:
const product = {
  id: 1,
  name: "Apple Mini",
  price: 50000,
};

console.log(getProductProp(product, "name"));
console.log(getProductProp(product, "price"));
