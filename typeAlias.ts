type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: number;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 1,
  name: {
    firstName: "John",
    lastName: "Smith",
  },
  gender: "male",
  contactNo: 1234567890,
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};
const user2: User = {
  id: 2,
  name: {
    firstName: "John",
    lastName: "Smith",
  },
  gender: "male",
  contactNo: 1234567890,
  address: {
    division: "Dhaka",
    city: "Dhaka",
  },
};
