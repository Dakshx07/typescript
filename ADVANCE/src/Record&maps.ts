// type User ={ 
//     age:number,
//     username:string
// }

// type Users = {
//     [key : string]: User
// }

// const users : Users ={ 
//     "1":{
//         id:"1",
//         username:"daksh",
//     },
//     "2":{
//         id:"2",
//         username:"hiran",
//     }
// }

// type UserType=Record<string,User>

// const user : UserType ={
//     "1":{
//         age:22,
//         username:"daksh",
//     },
//     "2":{
//         age:21,
//         username:"hiran",
//     }
// }



//Maps
interface User {
    username:string,
    age:number
}

const users=new Map<string,User>()                                                                                                                  
users.set("1",{age:22,username:"daksh",})
users.set("2",{age:21,username:"hiran",})

const user=users.get("1")
console.log(user);