// Write 5 object literals, naming them 'person1', 'person2', 'person3', etc.
    // Give each a property called 'name'
    // Give each a function called 'sayHello', which will log a string to the console, like this:
    // "Hello my name is ___."
    const person1 = {
        name: `Basil`,
        sayHello: function() {
            console.log(`   Hello! My name is ${this.name}.`, `color: red;`)
        }
    }
    
    const person2 = {
        name: `Rachel`,
        sayHello: function() {
            console.log(`   Hello! My name is ${this.name}.`)
        }
    }
    
    const person3 = {
        name: `Judy`,
        sayHello: function() {
            console.log(`   Hello! My name is ${this.name}.`)
        }
    }
    
    const person4 = {
        name: `Sam`,
        sayHello: function() {
            console.log(`   Hello! My name is ${this.name}.`)
        }
    }
    
    const person5 = {
        name: `Kathy`,
        sayHello: function() {
            console.log(`   Hello! My name is ${this.name}.`)
        }
    }
    
    // Call the sayHello() function on each object
person1.sayHello(); // Should log: Hello! My name is Basil.
person2.sayHello(); // Should log: Hello! My name is Rachel.
person3.sayHello(); // Should log: Hello! My name is Judy.
person4.sayHello(); // Should log: Hello! My name is Sam.
person5.sayHello(); // Should log: Hello! My name is Kathy.

// Create a constructor function that will take a name, age and city
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}

// Write a method that will log a string a string to the console like this:
// "Hey! My name is ___. I am ___ years old and I live in ___."
Person.prototype.sayHello = function() {
    console.log('   Hey! My name is ' + this.name + '. I am ' + this.age + ' and I live in ' + this.city + '.');
}

// Create 5 instances of the same friends from before, using the pseudo-class and method created above
const person1Again = new Person(`Basil`, 58, `Anniston`);
const person2Again = new Person(`Rachel`, 45, `Hoover`);
const person3Again = new Person(`Judy`, 49, `Southside`);
const person4Again = new Person(`Sam`, 70, `Leesburg`);
const person5Again = new Person(`Kathy`, 66, `Leesburg`);

// Call the sayHello() function on each object, and check the console 
person1Again.sayHello(); // Should log: Hey! My name is Basil. I am 58 years old and I live in Anniston.
person2Again.sayHello(); // Should log: Hey! My name is Rachel. I am 45 years old and I live in Hoover.
person3Again.sayHello(); // Should log: Hey! My name is Judy. I am 49 years old and I live in Southside.
person4Again.sayHello(); // Should log: Hey! My name is Sam. I am 28 years old and I live in Leesburg.
person5Again.sayHello(); // Should log: Hey! My name is Kathy. I am 30 years old and I live in Leesburg.

// Using the ES6/ES2015 syntax, recreate the constructor function above
class PersonAgain {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }

    sayHelloAgain() {
        console.log(`   Hey! My name is ${this.name}. I am ${this.age} and I live in ${this.city}.`)
    }
}
// Create 5 instances of the same friends from before, using ES6/ES2015 syntax
const person1ES6 = new PersonAgain(`Basil`, 58, `Anniston`);
const person2ES6 = new PersonAgain(`Rachel`, 45, `Hoover`);
const person3ES6 = new PersonAgain(`Judy`, 49, `Southside`);
const person4ES6 = new PersonAgain(`Sam`, 70, `Leesburg`);
const person5ES6 = new PersonAgain(`Kathy`, 66, `Leesburg`);

console.log(`%cVia %cES6%c Syntax:`, `font-weight: 600; color: black;`, `font-weight: 900; text-decoration: underline; color: green;`, `font-weight: 600; color: black;`);

// Call the sayHello() function on each object, and check the console 
person1ES6.sayHelloAgain(); // Should log: Hey! My name is Basil. I am 58 years old and I live in Anniston.
person2ES6.sayHelloAgain(); // Should log: Hey! My name is Rachel. I am 45 years old and I live in Hoover.
person3ES6.sayHelloAgain(); // Should log: Hey! My name is Judy. I am 49 years old and I live in Southside.
person4ES6.sayHelloAgain(); // Should log: Hey! My name is Sam. I am 70 years old and I live in Leesburg.
person5ES6.sayHelloAgain(); // Should log: Hey! My name is Kathy. I am 65 years old and I live in Leesburg.

// Create a parent class called 'Vehicle', with properties for the type (String - 'Truck, 'Sedan', 'Motorcycle', 'Coupe', etc.), manufacturer (String) and the number of wheels (Number)
class Vehicle {
    constructor(type, manufact, wheels){
        this.type = type;
        this.manufact = manufact;
        this.wheels = wheels;
    }

    aboutVehicle() {
        console.log(`A ${this.type} is made by ${this.manufact} and has ${this.wheels} wheels.`);
    }
}

// Create a child class called 'Truck' with additional properties for number of doors (Number) and truck bed
class Truck extends Vehicle {
    constructor(type, manufact, wheels, doors, truckBed=true){
        super(type, manufact, wheels);
        this.doors = doors;
        this.truckBed = truckBed;
    }

    aboutVehicle(){
        console.log(`A ${this.type} is made by ${this.manufact} and has ${this.wheels} wheels. It also has ${this.doors} doors.`);
        if (this.truckBed){
            console.log(`A ${this.type} also has a truck bed.`);
        }
    }
}

// Create a child class called 'Sedan' with additional properties for size (String - 'Small' or 'Medium'), and miles per gallon (Number)
class Sedan extends Vehicle {
    constructor(type, manufact, wheels, doors, size, mpg){
        super(type, manufact, wheels);
        this.doors = doors;
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle(){
        console.log(`A ${this.type} is a ${this.size} vehicle made by ${this.manufact} and has ${this.wheels} wheels, ${this.doors} doors, and gets ${this.mpg} miles per gallon.`);
    }
}

class Motorcycle extends Vehicle {
    constructor(type, manufact, wheels, steering, purpose){
        super(type, manufact, wheels);
        this.steering = steering;
        this.purpose =purpose;
    }

    aboutVehicle(){
        console.log(`A ${this.type} is made by ${this.manufact} and has ${this.wheels} wheels. This motorcyle is steered with a ${this.steering} for ${this.purpose}.`);
    }
}

let civic = new Vehicle("Civic", "Honda", 4)
civic.aboutVehicle();

let ridgeline = new Truck("Ridgeline", "Honda", 4, 2);
ridgeline.aboutVehicle();

let accord = new Sedan("Accord", "Honda", 4, 4, "mid size");
accord.aboutVehicle();

let cbr = new Motorcycle("CBR", "Honda", 2, "handlebar", "speed cruising");
cbr.aboutVehicle();

