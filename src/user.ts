// abstract class user {
//     name : string
//     constructor(name : string){
//         this.name=name
//     }

//     abstract greet(): string
//     hello(){
//         console.log("hi there");
        
//     }
// }

// class Employee extends user {
//      name: string
//      constructor(name : string){
//         super(name)
//         this.name=name
//      }

//      greet() {
//         return "hi" + this.name
//      }
// }

// let emp=new Employee("ramam")
// console.log(emp.name);
// console.log(emp.greet());



type Employee = {
    name:string,
    startDate:string
}

type Manager = {
    name:string,
    department:string,
}

type teamLead=Employee & Manager

let e : Employee ={
    name:"DAKSH",
    startDate:"2020-01-01",
}

let n : Manager ={
    name:"DAKSH",
    department:"electronics",
}

let t : teamLead = {
    name:"DAKSH",
    startDate:"2020-01-01",
    department:"electronics",
}
