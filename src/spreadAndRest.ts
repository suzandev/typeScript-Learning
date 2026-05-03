//* Spread Operator */

const friends = ["Alice", "Bob", "Charlie"];
const schoolFriends = ["David", "Eve", "Frank"];
const collegeFriends = ["Grace", "Heidi", "Ivan"];

friends.push(...schoolFriends, ...collegeFriends);

console.log(friends);

//* Rest Operator */

const user = {
  name: "John",
  PhoneNumber: "1234567890",
};

const otherInfo = {
  hobby: "outing",
  favoriteColor: "Golden",
};

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

//* Rest Operator */

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Invitation sent to ${friend}`);
  });
};

sendInvite("Alice", "Bob", "Charlie", "ChulBul", "DulBul");
