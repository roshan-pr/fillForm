const fs = require('fs');
process.stdin.setEncoding('utf8');

const { Form } = require("./Form.js");
const { Field } = require("./Field.js");
const { readInput } = require("./userInteraction.js");
const { Iterator } = require("./Iterator.js");

const main = function () {
  const nameField = new Field('name', 'Enter name');
  const dobField = new Field('dob', 'Enter dob');
  const hobbiesField = new Field('hobbies', 'Enter hobbies');

  const form = new Form(nameField, dobField, hobbiesField);
  readInput(form);
};

main();
