"use strict";
// //interfaces
// interface Address {
//     city:string,
//     country:string,
//     pincode:number
// }
// interface User {
//     name:string,
//     age:number
//    address?: Address
// }
// let person : People = {
//     name:"Daksh",
//     age:21,
//     greet: () => {
//         return "hi"     
//     },
// }
// class Manager implements People {
//     name:string
//     age: number
//     number : string
//     constructor(name: string , age : number) {
//         this.name=name
//         this.age=age
//         this.number="92763"
//     }
// }
// let user=new Manager("Daksh",21)
// console.log(user.age);
class shape {
    area() {
        console.log("hi there");
    }
}
class rectangle extends shape {
    constructor(width, height) {
        super();
        this.width = 1;
        this.height = 2;
    }
}
const r = new rectangle(2, 2);
r.area();
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    isLegal() {
        return this.age >= 18;
    }
}
let m = new User("daksh", 21);
console.log(m.name);
console.log(m.isLegal());
