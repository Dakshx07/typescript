"use strict";
class user {
    constructor(name) {
        this.name = name;
    }
    hello() {
        console.log("hi there");
    }
}
class Employee extends user {
    constructor(name) {
        super(name);
        this.greet = () => {
            return "hi" + this.name;
        };
        this.name = name;
    }
}
let emp = new Employee("ramam");
console.log(emp.name);
console.log(emp.greet());
