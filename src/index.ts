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

// interface Office {
//    address?: Address
// }

// let user2: User ={
//     name:"raman",
//     age:21,
// }

// let user  ={
//     name:"daksh",
//     age:21,
//     address:{
//         city:"chnadi",
//         country:"India",
//         pincode:92763
//     }
// }

// function isLegal(user: User): boolean {
//     return user.age >= 18
// }

// const ans=isLegal(user)
// console.log(ans);


interface People {
    name:string,
    age: number,
}

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
    area(){
        console.log("hi there");
        
    }
}

class rectangle extends shape{
    width:number
    height:number

    constructor(width : number,height:number
    ){
        super()
        this.width= 1
        this.height=2
    }
}

const r=new rectangle(2,2)
r.area() 

interface userType {
    name:string,
    age:number,
    isLegal():boolean
}

class User implements userType {
    name:string
    age:number
    constructor(name:string, age:number){
        this.name=name
        this.age=age
    }

    isLegal(): boolean {
        return this.age>=18
    }
}

let m=new User("daksh",21)
console.log(m.name);
console.log(m.isLegal());

