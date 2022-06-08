const fs = require('fs');
process.stdin.setEncoding('utf8');

const { Form } = require("./form.js");
const { Field } = require("./field.js");
const { readInput } = require("./userInteraction.js");

const main = function () {
  const nameField = new Field('name', 'Enter name');
  const dobField = new Field('dob', 'Enter dob');
  const hobbiesField = new Field('hobbies', 'Enter hobbies');

  const form = new Form(nameField, dobField, hobbiesField);
  readInput(form);
};

main();
