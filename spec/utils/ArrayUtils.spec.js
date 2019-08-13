const utils = require("../../src/utils/ArrayUtils");

describe("An ArrayUtils toolbox", () => {
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

  describe("containing a method to shuffle arrays", () => {
    it("should be a function", () => {
      expect(utils.shuffle).toBeInstanceOf(Function);
    });

    const array = [1, 2, 3, 4, 5, 6];
    it("should shuffle the array", () => {
      expect(utils.shuffle(array)).not.toEqual(array);
    });

    it("should contain all the original elements", () => {
      expect(utils.shuffle(array).every(x => array.includes(x))).toBeTruthy();
    });

    it("should be able to handle empty arrays", () => {
      expect(utils.shuffle([])).toEqual([]);
    });

    it("should e able to handle single-element arrays", () => {
      expect(utils.shuffle([2401])).toEqual([2401]);
    });
  });
});
