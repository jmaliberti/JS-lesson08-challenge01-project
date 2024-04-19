var hobbies = ["reading", "writing", "drawing", "swimming", "watching anime", "playing video games"];
console.log(hobbies.length);

hobbies.push("lifting weights");

console.log(hobbies[2]);

hobbies.pop();

hobbies.splice(2,0, "running", "coding");

hobbies.shift();

hobbies.unshift("reading manga");

console.log(hobbies);