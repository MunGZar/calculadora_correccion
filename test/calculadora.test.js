import { expect } from "chai";
import { sumar, restar } from "../src/calculadora";

describe("Calculadora", () => {
  it("sumar 2 + 2 = 4", () => {
    expect(sumar(2, 2)).to.equal(4);
  });

  it("restar 4 - 2 = 2", () => {
    expect(restar(4, 2)).to.equal(2);
  });
});
