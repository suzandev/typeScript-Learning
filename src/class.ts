//? oop - class - object

class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound(): string {
    return `${this.name} says ${this.sound}`;
  }
}

const dog = new Animal("Buddy", "Dog", "Woof");
console.log(dog.name);
console.log(dog.species);
console.log(dog.sound);
console.log(dog.makeSound());

const cat = new Animal("Cat Bhai", "Cat", "Meow Meow");
console.log(cat.name);
console.log(cat.makeSound());

//? example - 2 :  parameter properties

class Animal2 {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}

  makeSound2(): string {
    return `${this.name} says ${this.sound}`;
  }
}

const dog2 = new Animal2("Dog Bhai2", "Dog", "Ghew Ghew");
console.log(dog2.makeSound2());
