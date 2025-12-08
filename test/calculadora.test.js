import { expect } from 'chai';
import { sumar, restar } from '../src/calculadora.js';
import { describe, beforeEach, it } from 'mocha';

describe('Calculadora',() => {

    it('Funcion sumar 2 + 2 ', () => {
        expect(sumar(2, 2)).to.equal(4);
    });

    it('Funcion restar 4 - 2 ', () => {
        expect(restar(4, 2)).to.equal(2);
    });

})