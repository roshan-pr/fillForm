const assert = require('assert');
const { Form } = require("../src/Form.js");
const { Field } = require("../src/field.js");

describe('Form', () => {
  it('Should give the current field', () => {
    const nameField = new Field('name', 'Enter name');

    const form = new Form(nameField);
    const actual = form.getCurrentField();
    assert.ok(actual.isEqual(nameField));
  });

  it('Should give the entries', () => {
    const nameField = new Field('name', 'Enter name');
    const dobField = new Field('dob', 'Enter dob');

    const form = new Form(nameField, dobField);
    form.fillField('ram');
    form.fillField('1111-1-1');

    const expected = { name: 'ram', dob: '1111-1-1' };
    assert.deepStrictEqual(form.getEntries(), expected);
  });

  it('Is the form is filled or not', () => {
    const nameField = new Field('name', 'Enter name');

    const form = new Form(nameField);
    form.fillField('ram');

    assert.ok(form.isFilled());
  });

});
