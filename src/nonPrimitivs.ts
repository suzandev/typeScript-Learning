// let bazarList: string[] = ["rice", "dal", "oil", "salt"];

// bazarList.push("sugar");

// console.log(bazarList);

// let mixedList: (string | number)[] = ["rice", 100, "dar", 50];

// mixedList.push("oil");
// mixedList.push(200);

// console.log(mixedList);

//* ts - topple

// const couple: [string, string] = ["Husband", "wife"];

// console.log(couple);

//* Reference type : object

const user: {
  organization: string;
  firstName: string;
  middleName?: string; //? optional property
  lastName: string;
  isMarried: boolean;
} = {
  organization: "Programming Hero",
  firstName: "John",
  middleName: "Doe",
  lastName: "Smith",
  isMarried: true,
};

user.organization = "Microsoft";

console.log(user);
