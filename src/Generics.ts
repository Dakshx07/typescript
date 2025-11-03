// type Input=number | string
// function firstEl(arr : Input[]){
//     return arr[0];
// }

// const value=firstEl(["Daksh","Hiran"])
// console.log(value.toUpperCase());

// function Identity<T>(args : T){
//     return args
// }

// let op1=Identity<number>(10)
// let op2=Identity<string>("Daksh")

// op2.toUpperCase()

function getFeL<T>(arr : T[]){
    return arr[0]
}

let el=getFeL(["Daksh","Hiran"])
console.log(el.toUpperCase());

