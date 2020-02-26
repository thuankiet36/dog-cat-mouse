var Dog = require("./Dog");
var Cat = require("./Cat");
var Mouse = require("./Mouse");

var dog = new Dog("Tom");
var tom = new Cat();
dog.eat(tom);
console.log(dog);

var cat = new Cat();
var mouse = new Mouse("Mickey");
var dog = new Dog();
try {
  cat.eat(dog);
} catch (error) {
  console.log("Error while cat eating a dog");
}

console.log(cat);
