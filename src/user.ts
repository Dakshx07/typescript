abstract class user {
    name : string
    constructor(name : string){
        this.name=name
    }

    abstract greet(): string
    hello(){
        console.log("hi there");
        
    }
}

class Employee extends user {
     name: string
     constructor(name : string){
        super(name)
        this.name=name
     }

     greet() {
        return "hi" + this.name
     }
}

let emp=new Employee("ramam")
console.log(emp.name);
console.log(emp.greet());
