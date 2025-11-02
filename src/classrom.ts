//type vs interfaces


// type GoodUser ={
//     name:string,
//     gifts:string
// }

// type BadUser ={
//     name:string,
//     ip : string
// }

// type UserType= GoodUser | BadUser

// let user : UserType ={
//     name:"daksh",
//     gifts:"cake",
//     ip:"127.0.0.1"
// }



interface Users  {
    name:string,
    age:number
}
interface Admin  {
    name:string,
    permissions:string
}

type UserOrAdmin = Users | Admin

function greet(user : UserOrAdmin){
    console.log("hello" + user.name);
}


