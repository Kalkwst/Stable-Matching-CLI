class Person {
  constructor(name) {
    this.name = name;
  }

  get isEngaged() {
    return !!this.fiance;
  }

  prefers(person) {
    return this.preferences.indexOf(person) < this.preferences.indexOf(this.fiance);
  }

  engageTo(person) {
      if(person.hasFiance) {
          person.fiance.fiance = undefined;
      }

      this.fiance = person;
      person.fiance = this;
  }
}

module.exports = Person;