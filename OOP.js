class Person {
    constructor (firstName, lastName) {
        console.log("Initializing person fields");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    toString() {
        return `name: ${this.firstName} ${this.lastName}`;
    }

    get fullName() { return `${this.firstName} ${this.lastName}`;}

    get surname() {return this.lastName;}
}


class ReputablePerson extends Person {
    constructor(firstName, lastName, rating) {
        console.log("Creating a reputable person");
        super(firstName, lastName);
        this.rating = rating;
    }

    toString() {
        return `${super.toString()}, Rating: ${this.rating}}`;
    }

    get fullName() {
        return `Reputed ${this.surname} ${super.fullName}`;
    }
}







// 28th Sep 2021

const names = new Set(["James", "Harry", "Harry", "Phyllis", "Mugo", "Isaac"])

const MAX = 10000000;

const mapa = new Map();

for(let i = 0; i <= MAX; i++) {
    const key = {index: i};
    mapa.set(key, i);
}

// console.log("Done");

function addScores(names) {
    const scores = new Map();

    // Assign each player a score
    names.forEach((name) => {
        scores.set(name, Math.random())
    });

    for(const [name, score] of scores.entries()) {
        console.log(`${name}: ${score}`)
    }
}

// addScores(names);




names.add("Hermione").add("Kamau");
// names.forEach(name => console.log(name));

// [...names].filter(name => name.startsWith("J"))
//     .map(name => name.toUpperCase())
//     .forEach(name => console.log(name));

const createClass = function (...fields) {
    return class {
        constructor (...values) {
            fields.forEach((field, index) => this[field] = values[index])
        }
    };
};

const Book = createClass("title", "subtitle", "pages");
const Actor = createClass("firstName", "lastName", "yearStarted");

const fisher = new Actor("Carrie", "Fisher", 1969);
// console.log(fisher);

class Car {
    constructor(year, brand) {
        this.year = year;
        this.brand = brand;
        this.mileage = 0;
    }

    drive(distance) {
        this.mileage += distance;
    }

    get age() {
        return new Date().getFullYear() - this.year;
    }

    get distanceTravelled() {
        return this.mileage;
    }

    set distanceTravelled(value) {
        if (value < this.mileage) {
            throw new Error("Sorry can set distance less than the current distance travelled.")
        }

        this.mileage += value;
    }

    static get ageFactor() {
        return 0.1;
    }

    static pickBetter(carA, carB) {
        const computerScore = (car) => {
            car.age * Car.ageFactor + car.distanceTravelled * Car.distanceFactor;
        }

        return computerScore(carA) < computerScore(carB) ? carB : carA;
    }

}
Car.distanceFactor = 0.01;



// const carA = new Car(2007, "Range Rover");
// carA.drive(150000);

// const carB = new Car(2010, "Mercedes");
// carB.drive(175000)


// console.log(Car.pickBetter(carA, carB));





const NYD = "New Years Day";



















class Holidays {
    constructor() {
        this[NYD] = "January 1";
        this["Valentines Day"] = "February 14";
    }

    ["List holidays"]() {
        return Object.keys(this);
    }
}

// const aHolidays = new Holidays();
// aHolidays["Mashujaa Day"] = "October 10th";
// aHolidays["Birth Day"] = "June 21st";

// const methodName = 'List holidays';

// console.log(aHolidays[methodName]());