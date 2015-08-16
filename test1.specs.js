var expect = require("chai").expect;
var sinon = require("sinon");
require("sinon-as-promised");

var Controller = require("./controller");

describe("Controller Tests", function () {
    it("should fail assert in the then", function () {

        // Mock the dependency
        var logService = {
            get: sinon.stub().resolves(111)
        };
        var result = Controller(logService);

        /* This DOES get asserted */
        expect(1).to.equal(1);

        result.then(function () {
            /* This is executed */
            console.log(".then() is executed");

            /* This does NOT get asserted */
            expect(1).to.equal(2);
        });
    });
});