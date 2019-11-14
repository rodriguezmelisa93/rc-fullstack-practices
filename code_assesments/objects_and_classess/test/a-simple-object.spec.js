import { expect } from "chai";
import { aSimpleObject } from "../src";

describe('A Simple Object', () => {
  
  it('should have a property "saldo" with value 0', () => {
    expect(aSimpleObject).to.have.property('saldo', 0);
  });

  it('with ingresar() should increase property "saldo"', () => {
    aSimpleObject.saldo = 0;
    aSimpleObject.ingresar(100);
    expect(aSimpleObject).to.have.property('saldo', 100);
  });

  it('with extraer() should decrease property "saldo"', () => {
    aSimpleObject.saldo = 100;
    aSimpleObject.extraer(100);
    expect(aSimpleObject).to.have.property('saldo', 0);
  });

  it('with informar() should return value of property "saldo"', () => {
    aSimpleObject.saldo = 100;
    const saldo = aSimpleObject.informar();
    expect(saldo).to.equal(100);
  });

});
