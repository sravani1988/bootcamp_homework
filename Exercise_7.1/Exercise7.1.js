let people = ["Greg", "Mary", "Devon", "James"];



// iterate through the array and log all people

for (let i = 0; i < people.length; i++) {

  console.log(people[i]);

}



// remove "Greg" from the array

people.splice(0, 1);



// remove "James" from the array

people.pop();


// add "Matt" to the front of the array

people.unshift("Matt");




// add your name to the end of the array

people.push("Sravani");
console.log(people);




// iterate through the array, log "Mary", and then exit the loop

for (let i = 0; i < people.length; i++) {

  console.log(people[i]);

  if (people[i] === "Mary") {

    break;

  }

}



// make a copy of the array without "Mary" or "Matt"

let peopleCopy = people.slice(2);
console.log(people.slice(2));


// get the indexOf where "Mary" is located

let maryIndex = people.indexOf("Mary");
console.log(people.indexOf("Mary"));


// get the indexOf where "Foo" is located (should be -1)

let fooIndex = people.indexOf("Foo");

console.log(people.indexOf("Foo"));

// redefine the people array and remove "Devon", add "Elizabeth" and "Artie"

people = ["Greg", "Mary", "Devon", "James"];

people.splice(2, 1, "Elizabeth", "Artie");



// create a new variable called withBob that concatenates the people array with "Bob"

let withBob = people.concat("Bob");
