var hobbies = ["reading", "writing", "drawing", "swimming", "watching anime", "playing video games"];
console.log(hobbies.length);

hobbies.push("lifting weights");

console.log(hobbies[2]);

hobbies.pop();

hobbies.splice(2,0, "running", "coding");

hobbies.shift();

hobbies.unshift("reading manga");

console.log(hobbies);


var goals = ["learn JavaScript", "learn Python", "increase income significantly"];
var allTheThings = hobbies.concat(goals);

console.log(allTheThings);