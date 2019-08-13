const utils = require("../../src/utils/MathUtils");

describe("A MathUtilities toolbox", () => {
  beforeEach(() => {
    jasmine.addMatchers({
      toBeInstanceOf: (util, customEqualityTesters) => {
        return {
          compare: (actual, expected) => {
            const pass = actual instanceof expected;
            return {
              pass,
              message: `Expected ${actual} to ${pass ? "not" : ""} be instance of ${expected}`
            };
          }
        };
      }
    });
  });

  describe("containing a random integer generator", () => {
    it("should be a function", () => {
      expect(utils.randomIntegerInRange).toBeInstanceOf(Function);
    });

    const lowerLimit = Math.floor(Math.random() * 24);
    const upperLimit = Math.floor(lowerLimit + Math.random() * 10);

    it("should generate an integer", () => {
      expect(Number.isInteger(utils.randomIntegerInRange(lowerLimit, upperLimit))).toBeTruthy();
    });

    const result = utils.randomIntegerInRange(lowerLimit, upperLimit);

    it("should generate a value between lower and upper limit (both inclusive)", () => {
      expect(result >= lowerLimit && result <= upperLimit).toBeTruthy();
    });
  });
});
