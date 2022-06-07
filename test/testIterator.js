const assert = require('assert');
const { Iterator } = require("../src/Iterator.js");

describe('Iterator', () => {
  it('Should give the current element', () => {
    const iterator = new Iterator([1, 2, 3]);
    assert.deepStrictEqual(iterator.current(), 1);
  });

  it('Should give the current element, in between', () => {
    const iterator = new Iterator([1, 2, 3]);
    iterator.next();
    assert.deepStrictEqual(iterator.current(), 2);
  });

  it('Should give the next element', () => {
    const iterator = new Iterator([1, 2, 3]);
    assert.deepStrictEqual(iterator.next(), 2);
  });

  it('Should give undefined, for next at last', () => {
    const iterator = new Iterator([1]);
    assert.deepStrictEqual(iterator.next(), undefined);
  });
});
