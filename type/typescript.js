var sum = function (a, b) {
    return a + b;
};
sum(4, 5);
/** TYPES */
var isCool = true;
var age = 56;
var eyeColor = "brown";
var favouriteQuote = "I'm not old, i'm only " + age;
// arrays
var pets = ['cat', 'dog', 'pig'];
var pets2 = ['lion', 'dragon', 'lizard'];
// object
var wizard = {
    a: "John"
};
// null and undefined
var meh = undefined;
var nah = null;
// Tuple
var basket;
basket = ["basket", 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
var sizeNum = Size.Small;
// Any - !!!!! Be careful
var whatever = "agggh noo!!!";
whatever = basket;
// void
var sing = function () { return console.log('lalalala'); };
// never (function that never returns)
var error = function () {
    throw Error("oops");
};
var fightRobotArmy = function (robots) {
    console.log("FIGHT");
};
fightRobotArmy({ count: 1, type: "dragon" });
var fightRobotArmy2 = function (robots) {
    console.log("FIGHT");
};
var dog = {};
dog.count;
var fightRobotArmy3 = function (robots) {
    console.log("FIGHT");
};
// class
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "Hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("RAAAWR!");
// union
var confused = 5;
