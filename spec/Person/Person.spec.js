const Person = require("../../src/Person/Person");
const utils = require("../../src/utils/ArrayUtils");

describe("A person", () => {
  const person = new Person("John Doe");
  const person2 = new Person("Jane Doe");
  const person3 = new Person("Person Doe");

  let preferences = [person2, person3];
  person.preferences = utils.shuffle(preferences);

  it("must be able to be created with a name", () => {
    expect(person.name).toEqual("John Doe");
  });

  it("must have a preference list", () => {
    expect(person.preferences).toBeDefined();
  });

  it("must be able to be engaged", () => {
    let fiance = person.preferences[1];
    person.engageTo(fiance);

    expect(person.fiance.name).toBe(fiance.name);
    expect(fiance.fiance.name).toBe(person.name);
  });

  it("must be able to check if the current proposing person is better than the fiance", ()=>{
    expect(person.prefers(person.preferences[0])).toBe(true);
  });
});
