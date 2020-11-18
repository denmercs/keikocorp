const sum = function (a: number, b: number) {
    return a + b;
}


sum(4, 5);

/** TYPES */

let isCool: boolean = true;
let age: number = 56;
let eyeColor: string = "brown";
let favouriteQuote: string = `I'm not old, i'm only ${age}`;
// arrays
let pets: string[] = ['cat', 'dog', 'pig'];
let pets2: Array<string> = ['lion', 'dragon', 'lizard'];

// object
let wizard: object = {
    a: "John"
}

// null and undefined
let meh: undefined = undefined;
let nah: null = null;

// Tuple
let basket: [string, number];
basket = ["basket", 5]

// Enum
enum Size { Small = 1, Medium = 2, Large = 3}
let sizeName: string = Size[2];
let sizeNum: number = Size.Small;

// Any - !!!!! Be careful
let whatever: any = "agggh noo!!!";
whatever = basket;

// void
let sing = ():void => console.log('lalalala')

// never (function that never returns)
let error = (): never => {
    throw Error("oops")
}

// interface
interface RobotArmy {
    count: number,
    type: string,
    magic?: string
}

let fightRobotArmy = (robots: RobotArmy) => {
    console.log("FIGHT");
}
fightRobotArmy({count: 1, type: "dragon"})

let fightRobotArmy2 = (robots: {count: number, type: string, magic: string}) => {
    console.log("FIGHT");
}

// type assertion
interface CatArmy {
    count: number,
    type: string,
    magic: string
}

let dog = {} as CatArmy;
dog.count;

let fightRobotArmy3 = (robots: {count: number, type: string, magic: string}): void => {
    console.log("FIGHT");
}

// class
class Animal {
    public sing: string;
    constructor(sound: string) {
        this.sing = sound;
    }

    greet() {
        return `Hello ${this.sing}`
    }
}

let lion = new Animal("RAAAWR!")

// union
let confused: string | number | boolean = 5;