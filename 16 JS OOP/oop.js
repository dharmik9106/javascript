

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("bob", 20);

class PersonDetail extends Person {
  constructor(name, age, job, city) {
    super(name, age);
    this.job = job;
    this.city = city;
  }
}

const personDetail1 = new PersonDetail(
  "alock",
  20,
  "menager",
  "chikago",
);

console.log("personDetail",personDetail1);