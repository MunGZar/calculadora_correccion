const { expect } = require("chai");
const { sumar, restar } = require("../src/calculadora");

describe("Calculadora", () => {

    it("Debe sumar dos números", () => {
        expect(sumar(2, 3)).to.equal(5);
    });

    it("Debe restar dos números", () => {
        expect(restar(5, 3)).to.equal(2);
    });

});
