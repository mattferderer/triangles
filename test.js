var chai = require("chai");
var triangle = require("./triangle");
const assert = chai.assert;

describe("Triangles", function () {
    it("should find the function", () => {
        assert.exists(triangle);
    });

    it("should return equilateral when all sides are equal", () => {
        assert.equal(triangle("1","1","1"), "equilateral");
    });

    it("should return isosceles when only two sides are equal", () => {
        assert.equal(triangle("3","3","4"), "isosceles");
        assert.equal(triangle("4","3","3"), "isosceles");
        assert.equal(triangle("3","4","3"), "isosceles");
    });

    it("should return scalene when no sides are equal", () => {
        assert.equal(triangle("4.4234", "7.3124", "9.13123"), "scalene");
    });

    it("should return 'not a triangle' when the shape doesn't form a triangle", () => {
        assert.equal(triangle("4", "6", "11"), "not a triangle")
    })

    it("should return 'not a triangle' when no values are entered", () => {
        assert.equal(triangle(), "not a triangle")
    })
});