const assert = require('assert');
const { Field } = require("../src/field.js");

const identity = arg => arg;

describe('Field', () => {
  it('Should give the prompt', () => {
    const nameField = new Field('name', 'Enter name');

    assert.strictEqual(nameField.getPrompt(), 'Enter name');
  });

  it('Should give the entry of the field', () => {
    const nameField = new Field('name', 'Enter name');
    nameField.fill('ram');

    const expected = { name: 'name', response: 'ram' };
    assert.deepStrictEqual(nameField.getEntry(), expected);
  });

  it('Should parse the entry of the field', () => {
    const splitByComma = (arg) => arg.split(',');
    const nameField = new Field(
      'hobbies', 'Enter hobbies', identity, splitByComma);
    nameField.fill('swimming,running');

    const expected = { name: 'hobbies', response: ['swimming', 'running'] };
    assert.deepStrictEqual(nameField.getEntry(), expected);
  });
});
