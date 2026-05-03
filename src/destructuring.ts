//* object destructuring */

const user = {
  id: 1,
  name: {
    firstName: "John",
    middleName: "Doe",
    lastName: "Smith",
  },
  gender: "Male",
  favoriteColors: ["Red", "Golden", "Blue"],
};

const {
  favoriteColors: myFavoriteColors,
  name: { middleName },
} = user;
console.log(myFavoriteColors);
console.log(middleName);
