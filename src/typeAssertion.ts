const kgToGMConverter = (input: string | number) => {
  if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted Output: ${Number(value) * 1000}`;
  } else if (typeof input === "number") {
    return input * 1000;
  }
};

const result1 = kgToGMConverter("5 kg");
const result2 = kgToGMConverter(5);

console.log(result1);
console.log(result2);
