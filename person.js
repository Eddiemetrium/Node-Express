console.log(__filename,__dirname)

class Person {
    constructor(name, age) {
        (this.name = "Sonya"), (this.age = 36);
    }
    greeting() {
        console.log(`Surp my name is ${this.name} I am ${this.age} years old.`);
    }
}
module.exports = Person;
