'use strict';
   var getPrimes = require('../app/module2.js').getPrimes;


describe("Get Prime Numbers ", function() {

  it("should return `false` for '10'", function() {
    expect(getPrimes(10)).toEqual(false);
  });

  it("should return `true` for '2'", function() {
    expect(getPrimes(2)).toEqual(true);
  });

  it("should return `false` for '1'", function() {
    expect(getPrimes(1)).toEqual(false);
  });

  it("should return `not prime` for '-3'", function() {
    expect(getPrimes(-3)).toEqual('not prime');
  });

  it("should return `false` for '0'", function() {
    expect(getPrimes(0)).toEqual(false);
  });

  it("should return `true` for '7' ", function() {
    expect(getPrimes(7)).toEqual(true);
  });

});
    
