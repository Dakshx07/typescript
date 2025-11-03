// Pick, Partial,ReadOnly

interface User {
    id:string,
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpatedProps=Pick<User,"name" | "age" | "email">

type UpatedPropsOptional=Partial<UpatedProps>

function updateUser(upadteProps : UpatedPropsOptional){

}




// Readonly

type UserType= {
     name:string,
     age:number
}

const obj :Readonly<UserType>={
    name:"Daksh",
    age:21,
}

