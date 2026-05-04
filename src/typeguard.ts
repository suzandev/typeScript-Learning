//? Type Guard
type Alphanumeric = string | number;

const add = (num1: Alphanumeric, num2: Alphanumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + " " + num2;
  } else {
    throw new Error(
      "Invalid input: Both parameters must be of the same type (either number or string).",
    );
  }
};

console.log(add(5, 10));
console.log(add("Hello", "world"));

//? example - 2 :

type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    return `Admin User: ${user.name}`;
  } else {
    return `Normal User: ${user.name}`;
  }
};

console.log(getUserInfo({ name: "Normal", role: "Admin" }));
