//* mapped types */

type AreaNumber = {
  width: number;
  height: number;
};

type Area<T> = {
  [K in keyof T]: T[K];
};

const area1: Area<{ height: number; width: string }> = {
  width: "10",
  height: 20,
};

//? Example - 2;

const numbers: number[] = [1, 2, 3, 4, 5];

const doubleNumbers: number[] = numbers.map((num) => num * 2);

console.log(doubleNumbers);

//? Example - 3;

//todo : Converting numbers to strings using mapped types

const numberToString = numbers.map((num) => num.toString());

console.log(numberToString);
