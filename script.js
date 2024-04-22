var hobbies = ["reading", "writing", "drawing", "swimming", "watching anime", "playing video games"];
console.log(hobbies.length);

hobbies.push("lifting weights");

console.log(hobbies[2]);

hobbies.pop();

hobbies.splice(2,0, "running", "coding");

hobbies.shift();

hobbies.unshift("reading manga");

console.log(hobbies);

var goals = ["learning JavaScript", "learning Python", "increasing income significantly"];
var allTheThings = hobbies.concat(goals);

console.log(allTheThings.indexOf("coding"));

allTheThings.splice(3, 1);

console.log(allTheThings);

var plans = allTheThings.map(function (item) {
    return `I can't wat to start ${item}.`
});

console.log(plans);