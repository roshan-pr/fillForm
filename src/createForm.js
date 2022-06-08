const { Form } = require("./form.js");
const { Field } = require("./field.js");
const { MultiLineField } = require("./multiLineField.js");

const identity = (arg) => arg;
const isNameValid = (name) => name.length >= 5;
const isDateFormatted = (dob) => dob.match(/^\d{4}-\d{2}-\d{2}$/);
const has10Digits = (phNumber) => phNumber.match(/^\d{10}$/);
const isNotEmpty = (arg) => arg.length !== 0;
const splitByComma = (hobbies) => hobbies.split(',');
const joinResponses = (responses) => responses.join('\n');

const createForm = () => {
  const nameField = new Field(
    'name', 'Please enter name', isNameValid, identity);

  const dobField = new Field(
    'dob', 'Please enter dob', isDateFormatted, identity);

  const hobbiesField = new Field(
    'hobbies', 'Please enter hobbies', isNotEmpty, splitByComma);

  const phNumberField = new Field(
    'ph-number', 'Please enter ph number', has10Digits, identity);

  const address = new MultiLineField(
    'address', ['Please enter address line 1', 'Please enter address line 2'],
    isNotEmpty, joinResponses);

  return new Form(nameField, dobField, hobbiesField, phNumberField, address);
};

module.exports = {
  identity, createForm, isNameValid,
  isDateFormatted, has10Digits, isNotEmpty
};
