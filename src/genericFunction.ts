const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const stringArray = createArrayWithGeneric("Apple");
const numberArray = createArrayWithGeneric(222);
const objectArray = createArrayWithGeneric({ name: "John", age: 50 });

console.log(stringArray);
console.log(numberArray);
console.log(objectArray);

//* Example -2 */
//? Tuple with generic

const createTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2];

const tuple1 = createTupleWithGeneric("Hello", 1223);
const tuple2 = createTupleWithGeneric(true, { name: "Alice", age: 30 });

console.log(tuple1);
console.log(tuple2);

//* Example - 3 */

const addStudentToCourse = <T>(studentInfo: T) => {
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

const result1 = addStudentToCourse(student1);
console.log(result1);
const result2 = addStudentToCourse(student2);
console.log(result2);
