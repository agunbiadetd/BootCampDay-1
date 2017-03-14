'Option strict';

Pet = function(name){
    this.name = name;
}
Animal.prototype.totalNumberOfOffspring = 0;
Animal.prototype.eat = function() { return 'I am munching.'};

Pet = function(name, colour){
    this.base = Animal;
    this.base(name);
    this.color = color;
    this.habitat = 'Home';
    this.eat = function () {
        return "I am enjoying a bowl of cereal my owner just served me."};
    }
Pet.prototype = new Animal;
Pet.prototype.friendlinessIndex = 0;

WildAnimal = function(name, colour, habitat){
    this.base = Animal;
    this.base(name);
    this.color = color;
    this.habitat = habitat;
    this.eat = function () {
        return "I am tearing apart an antelop I just killed."};
    }
WildAnimal.prototype = new Dog;

module.exports = {Animal, Pet, WildAnimal};