"use strict";
function delayedCall(fn, name) {
    setTimeout(() => {
        const result = fn(name);
        console.log(result);
    }, 2000);
}
function greet(name) {
    return ("hello" + name);
}
delayedCall(greet, "dakhs");
