"use strict";
// function getMax(num: number[]): number {
//     let maxVal = -100000000;
function isLegal(users) {
    // return users.filter((u) => u.age >= 18);
    let ans = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].age >= 18) {
            ans.push(users[i]);
        }
    }
    return ans;
}
const ans = isLegal([
    { Name: "Daksh", lName: "Shah", age: 21 },
]);
console.log("Legal users (18+):", ans);
