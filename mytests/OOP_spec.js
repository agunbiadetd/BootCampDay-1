(function(){
  'use strict';

var pet = require('../app/module3.js').pet;
var domesticAnimal = require('../app/module3.js').domesticAnimal
var wildAnimal = require('../app/module3.js').wildAnimal

  describe("Pet Class: Create a Pet, make it sleep", function() {
    it("The pet should be a type of `object`, and an instance of the `Cat` class", function() {
      var Cat = new Pet('Cat');
      expect(typeof Cat).toEqual(typeof {});
      expect(Cat instanceof animal).toBeTruthy();
    });
    it("The Pet should be called 'Lucky' if no name is passed as a parameter", function() {
      var Dog = new Pet();
      expect(Dog.name).toEqual('Lucky');
      expect(dog.amimal).toBe('Dog');
    });
    it("The Pet name and animal should be a property of the Pet", function() {
      var Lion  = new Pet('Lion', 'king');
      expect(lion.name).toBe('King');
      expect(lion.animal).toBe('king');
    });
    it("The Pet shoud have four (4) legs and fur on it body", function() {
      var tiger  = new Tiger('Tiger', 'Queen');
      expect(tiger.numOflegss).toBe(4);
      
    it("The Animal shoud have four (4) legs except its a type of Bird", function() {
      var Eagle  = new Eagle('EAGLE', 'Hen', 'Vulture');
      expect(eagle.numOflegs).toBe(2);
      expect(eagle.isPerson).toBe(false);
      var Sheep = new Pet('Sheep');
      expect(sheep.numOfLegs).toBe(4);
      expect(sheep.isAnimal).toBeTruthy();
    });
  });
  });
})();