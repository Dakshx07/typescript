
// function getMax(num: number[]): number {
//     let maxVal = -100000000;

//     for (let i = 0; i < num.length; i++) {
//         if (num[i] > maxVal) {
//             maxVal = num[i];
//         }
//     }
//     return maxVal;
// }

// console.log(getMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



interface User {
    Name: string;
    lName: string;
    age: number;
}

function isLegal(users: User[]) {
    // return users.filter((u) => u.age >= 18);
    let ans= []
    for(let i=0;i<users.length;i++){
        if(users[i].age >= 18){
            ans.push(users[i])
        }
    }
    return ans;
}


const ans = isLegal([
    { Name: "Daksh", lName: "Shah", age: 21 },
]);


console.log("Legal users (18+):", ans);