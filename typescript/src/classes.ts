class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}

let person = new Person('John Doe', 25);
person.sayHello();

class Employee extends Person {
    department: string;

    constructor(name: string, age: number, department: string) {
        super(name, age);
        this.department = department;
    }

    introduce() {
        console.log(`Hello, my name is ${this.name} and I work in the ${this.department} department.`);
    }
}

let employee = new Employee('Jane Smith', 30, 'Sales');
employee.sayHello();
employee.introduce();
  