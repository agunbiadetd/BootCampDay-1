'Option strict';

Pet = function(Animal){
	this.sleep = sleep;
}
Pet.prototype.sleepingtime = 0;
Pet.prototype.sleep = function() { return 'i am sleeping'};

Cat = function(name, colour, habitat){
	this.base = Animal;
	this.base("Cat");
	this.name = name;
	this.color = color;
	this.habitat = habitat;
	this.move = function () {
		return "having a sound sleep"};

	}
Cat.prototype = new Cat;
Cat.prototype = sleepingHours = 0;

Dog = function(name, colour, habitat){
	this.base = Animal;
	this.base("Dog");
	this.name = name;
	this.color = color;
	this.habitat = habitat;
	this.move = function () {
		return "I can bark very well"};

	}
Dog.prototype = new Dog;
module.exports = {Pet, Cat, Dog};