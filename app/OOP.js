'Option strict';

pet = function(name){
    this.name = name;
}
pet.prototype.totalNumberOfOffspring = 0;
pet.prototype.eat = function() { return 'I am munching.'};

domesticAnimal = function(name, colour){
    this.base = domesticAnimal;
    this.base(name);
    this.color = color;
    this.habitat = 'Home';
    this.eat = function () {
        return "I am enjoying a bowl of cereal my owner just served me."};
    }
pet.prototype = new Animal;
pet.prototype.friendlinessIndex = 0;

WildAnimal = function(name, colour, habitat){
    this.base = wildAnimal;
    this.base(name);
    this.color = color;
    this.habitat = habitat;
    this.eat = function () {
        return "I am tearing apart an antelop I just killed."};
    }
WildAnimal.prototype = new Dog;

module.exports = {pet, domesticAnimal, WildAnimal};