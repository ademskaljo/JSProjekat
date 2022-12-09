let broj = 23;
console.log(typeof broj)
broj = "Adem" ;
console.log(typeof broj)
broj = null;
console.log(typeof broj);

let person = {
    name: "Adem", // key:value
    surname: "Škaljo", // key:value
    age: 18 // key:value
};
console.log(person);

//age
let personAge = person.age;
console.log("Age: " + person.age);
//name
console.log("Ime: " + person.name);
//surname
let prezime = person["surname"];
console.log(prezime);

