//* This is Looking like a require */

type Student = {
  id: number;
  name: string;
  dateOfBirth?: string;
  className: string;
};

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "Computer Science",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Alice",
  hasPen: true,
};

const student2 = {
  id: 456,
  name: "Bob",
  hasCar: true,
  isMarried: true,
};

const student3 = {
  id: 789,
  name: "Charlie",
  hasWatch: true,
  className: "10th Grade",
  dateOfBirth: "2005-05-15",
};

const result1 = addStudentToCourse(student3);
console.log(result1);
