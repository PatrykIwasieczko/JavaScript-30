const dogs = [{ name: "Snickers", age: 2 }, { name: "hugo", age: 8 }];

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated
const good = "good";
console.log(`Hello I am a ${good} string`);

// Styled
console.log("%c I am some text", "font-size:20px");

// warning!
console.warn("Warning");

// Error :|
console.error("Oh shit. Here we go again");

// Info
console.info("Fun fact");

// Testing
console.assert(1 === 2, "That is wrong");

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
console.dir("p");

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// counting
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Wes");
console.count("Steve");
console.count("Wes");
console.count("Wes");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/wesbos")
    .then(data => data.json())
    .then(data => {
        console.timeEnd("fetching data");
        console.log(data);
    });

// table
console.table(dogs);
