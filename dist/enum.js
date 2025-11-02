"use strict";
var directions;
(function (directions) {
    directions[directions["Up"] = 1] = "Up";
    directions[directions["down"] = 2] = "down";
    directions[directions["left"] = 3] = "left";
    directions[directions["right"] = 4] = "right";
})(directions || (directions = {}));
function doSomething(keyPressed) {
    if (keyPressed == directions.Up) {
    }
}
doSomething(directions.Up);
doSomething(directions.down);
console.log(directions.Up);
console.log(directions.down);
