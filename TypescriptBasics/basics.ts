// primitives: number, string, boolean
// more complex types: arrays, objects
// function types, parameters

// primitives

let age: number;

age = 26;

let username: string | string[];

username = 'max';

let isInstructor: boolean;

isInstructor = true;

// more complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

// type alias

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: 'max',
  age: 26
};

let people: Person[];

// type inference

let course: string | number ='React - The Complete Guide'; // union type

course = 1234;


// fucntions and types

function add(a: number, b: number) {
  return a + b;
}

function printLog(value: any) {
  console.log(value);
}

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('');

