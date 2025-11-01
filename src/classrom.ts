//type vs interfaces


interface user {
    name:string,
    ahe:number
}

type emp = {
    name:string,
    age:number
}

function greet(user : emp){
    return user.age >= 18
}