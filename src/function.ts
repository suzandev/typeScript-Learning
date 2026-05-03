//* Normal function */
function addNormal(num1: number, num2: number): number {
  return num1 + num2;
}

addNormal(2, 3);

//* Arrow function */

const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

addArrow(5, 10);

//* object => function => method */

const user = {
  name: "john",
  balance: 5000,
  addBalance(money: number): number {
    const totalBalance = this.balance + money;
    return totalBalance;
  },
};

const newBalance = user.addBalance(5000);

console.log(newBalance);

const numArray: number[] = [1, 2, 3, 4, 5];

numArray.map((num: number): number => num * num);
