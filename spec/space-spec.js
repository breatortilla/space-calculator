import { Person } from "./../src/space.js";
import { yearsToSeconds } from "./../src/space.js";
import { differenceInSeconds } from "./../src/space.js";

describe("yearsToSeconds", function () {
  it("should convert years to seconds", function() {
    expect(yearsToSeconds(35)).toEqual(1104493320);
  });
});

describe("differenceInSeconds", function () {
  it("should return difference between two dates in seconds", function() {
    expect(differenceInSeconds("1992, 08, 09", "2018, 4, 20")).toEqual(810864000);
  });
});


describe("Person", function () {

  let person;
  let olderPerson;

  beforeEach(function() {
    person = new Person("1992, 08, 09");
    person.now = new Date(2018, 4, 20, 9, 42, 30, 0);
    person.difference = person.now - person.birthdate;
    olderPerson = new Person("1901, 08, 09");
    olderPerson.now = new Date(2018, 4, 20, 9, 42, 30, 0);
    olderPerson.difference = olderPerson.now - olderPerson.birthdate;
  });


  // preliminary tests
  it("should be an instance of the person class", function() {
    expect(person).toEqual(jasmine.any(Person));
  });

  it("should store constructor input as a Date object", function() {
    expect(person.birthdate).toEqual(jasmine.any(Date));
  });

  // All these tests are operating off of the assumption that in the Person class this.now = new Date(2018, 4, 20, 9, 42, 30, 0)
  // earth time from birthday in seconds
  it("should return the number of seconds between birthdate and now in seconds", function() {
    expect(person.birthdateToNowSeconds()).toEqual(813490950);
  });


  // planet times from birthday in years
  it("should return the person's age in Mercury years", function() {
    expect(person.mercuryAge()).toBeGreaterThan(6.18);
    expect(person.mercuryAge()).toBeLessThan(6.19);
  });

  it("should return the person's age in Venus years", function() {
    expect(person.venusAge()).toBeGreaterThan(15.98);
    expect(person.venusAge()).toBeLessThan(15.99);
  });

  it("should return the person's age in Mars years", function() {
    expect(person.marsAge()).toBeGreaterThan(48.46);
    expect(person.marsAge()).toBeLessThan(48.47);
  });

  it("should return the person's age in Jupiter years", function() {
    expect(person.jupiterAge()).toBeGreaterThan(305.73);
    expect(person.jupiterAge()).toBeLessThan(305.74);
  });


  // planet times to expected death in years
  it("should return the person's expected years left in Mercury years", function() {
    expect(person.mercuryLifeLeft()).toBeGreaterThan(12.70);
    expect(person.mercuryLifeLeft()).toBeLessThan(12.71);
  });

  it("should return the person's expected years left in Venus years", function() {
    expect(person.venusLifeLeft()).toBeGreaterThan(32.81);
    expect(person.venusLifeLeft()).toBeLessThan(32.82);
  });

  it("should return the person's expected years left in Mars years", function() {
    expect(person.marsLifeLeft()).toBeGreaterThan(99.49);
    expect(person.marsLifeLeft()).toBeLessThan(99.50);
  });

  it("should return the person's expected years left in Jupiter years", function() {
    expect(person.jupiterLifeLeft()).toBeGreaterThan(627.64);
    expect(person.jupiterLifeLeft()).toBeLessThan(627.65);
  });


  // planet times past expected death in years
  it("should return the person's years past life expectancy in Mercury years", function() {
    expect(olderPerson.mercuryLifeLeft()).toBeGreaterThan(-9.14);
    expect(olderPerson.mercuryLifeLeft()).toBeLessThan(-9.13);
  });

  it("should return the person's years past life expectancy in Venus years", function() {
    expect(olderPerson.venusLifeLeft()).toBeGreaterThan(-23.62);
    expect(olderPerson.venusLifeLeft()).toBeLessThan(-23.61);
  });

  it("should return the person's years past life expectancy in Mars years", function() {
    expect(olderPerson.marsLifeLeft()).toBeGreaterThan(-71.60);
    expect(olderPerson.marsLifeLeft()).toBeLessThan(-71.59);
  });

  it("should return the person's years past life expectancy in Jupiter years", function() {
    expect(olderPerson.jupiterLifeLeft()).toBeGreaterThan(-451.65);
    expect(olderPerson.jupiterLifeLeft()).toBeLessThan(-451.64);
  });


});
