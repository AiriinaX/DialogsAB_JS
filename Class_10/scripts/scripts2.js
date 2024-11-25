// https://www.w3schools.com/js/js_object_constructors.asp

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Latvian"
  }

// const myFather = {firstName: "John", lastName: "Doe", age: 50, eye: "blue"};
const myFather = new Person("John", "Doe", 50, "blue");

// const myMother = {firstName: "Anna", lastName: "Hill", age: 48, eye: "green"};
const myMother = new Person("Anna", "Hill", 48, "green");