class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  study(numOfHours: number) {
    return `${this.name} is studying for ${numOfHours} hours.`;
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  teach(numOfHours: number) {
    return `${this.name} is teaching for ${numOfHours} hours.`;
  }
}

// function guard

const isStudent = (user: Person) => {
  return user instanceof Student;
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher;
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    return user.study(5);
  } else if (isTeacher(user)) {
    return user.teach(3);
  } else {
    return "Unknown user type.";
  }
};

const student1 = new Student("Mr. Student");
const teacher1 = new Teacher("Mr. Teacher");

console.log(getUserInfo(student1));
console.log(getUserInfo(teacher1));
