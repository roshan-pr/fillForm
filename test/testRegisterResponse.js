const assert = require('assert');
const { Form } = require("../src/Form.js");
const { Field } = require("../src/field.js");
const { registerResponse } = require("../src/registerResponse.js");

const identity = arg => arg;

describe('Form', () => {
  it('Should log the next prompt', () => {
    const nameField = new Field('name', 'Enter name');
    const dobField = new Field('dob', 'Enter dob');

    const form = new Form(nameField, dobField);

    const log = [];
    const logger = (arg) => log.push(arg);

    const actual = registerResponse(form, 'ram', logger, identity);
    const expected = ['Enter dob'];
    assert.deepStrictEqual(log, expected);
  });

  it('Should invoke the call back', () => {
    const nameField = new Field('name', 'Enter name');

    const form = new Form(nameField);

    let actual;
    const cb = (arg) => actual = arg;

    const response = 'Ram';
    registerResponse(form, response, identity, cb);
    const expected = { name: 'Ram' };
    assert.deepStrictEqual(actual, expected);
  });

});
