// ! OOP
class Human {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }
  sayMyName() {
    console.log(this.name);
  }
}

// let askat = new Human("Askat", "black", 19);
// console.log(askat);
// askat.sayMyName()

class Mentor extends Human {
  constructor(name, surname, age, id) {
    super(name, surname, age);
    this.id = id;
  }
}

// let tilek = new Mentor("tilek", "brown", 22, 123);

// class Student extends Human {
//     constructor(name,surname,age,studyArea)
//     super(name,surname,age);
//     this.studyArea=studyArea
// // }
// let sezim = new s

class Person {
  constructor(account, pin) {
    this.account = account;
    this.#pin = pin;
  }
  #pin;
  getPin() {
    console.log(this.#pin);
  }
  setPin(newPin) {
    this.#pin = newPin;
  }
  #sayAccountPin() {
    console.log(this.account, this.#pin);
  }
  callPrivateMethod() {
    this.#sayAccountPin();
  }
}

let person1 = new Person("person one", 12333245432);
// console.log(person1.#pin);

// person1.getPin();
person1.setPin(5555555555);
// person1.getPin();
// person1.callPrivateMethod();
// //
// class Task {
//   constructor(number, anwer) {
//     this.answer = anwer;
//     this.number = number;
//   }
//   giveAnswer() {
//     console.log(`${this.answer} for the task ${this.number}`);
//   }
// }
// class EngTask extends Task {
//   constructor(number, answer) {
//     super(number, answer);
//   }
// }

// class RusTask extends Task {
//   constructor(number, answer) {
//     super(number, answer);
//   }
//   giveAnswer() {
//     console.log(`${this.answer} for the task ${this.number}`);
//   }
// }
