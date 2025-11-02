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
function Legal(users) {
    // return users.filter((u) => u.age >= 18);
    let ans = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            ans.push(users[i]);
        }
    }
    return ans;
}
const result = Legal([
    { Name: "Daksh", lName: "Shah", age: 21 },
]);
console.log("Legal users (18+):", result);
