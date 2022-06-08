const fs = require('fs');
process.stdin.setEncoding('utf8');

const { Form } = require("./form.js");
const { Field } = require("./field.js");
const { registerResponse } = require("./registerResponse.js");

const readInput = (form, logger, callBack) => {
  logger(form.getCurrentField().getPrompt());

  let input = '';
  process.stdin.on('data', (chunk) => {
    input += chunk;
    const responses = input.split('\n');
    responses.slice(0, -1).forEach((response) =>
      registerResponse(form, response, logger, callBack));
    input = responses.slice(-1);
  });
};

const writeInto = (content) => {
  fs.writeFileSync('./responses.json', JSON.stringify(content), 'utf-8');
  process.stdin.destroy();
};

const identity = (arg) => arg;

const isLongEnough = (arg) => arg.length >= 5;

const isFormatted = (arg) => arg.match(/^\d{4}-\d{2}-\d{2}$/);

const is10Digits = (arg) => arg.match(/^\d{10}$/);

const isEmpty = (arg) => arg.length !== 0;

const splitByComma = (arg) => arg.split(',');

const createForm = () => {
  const nameField = new Field(
    'name', 'Please enter name', isLongEnough, identity);
  const dobField = new Field(
    'dob', 'Please enter dob', isFormatted, identity);
  const hobbiesField = new Field(
    'hobbies', 'Please enter hobbies', isEmpty, splitByComma);
  const phNumberField = new Field(
    'ph-number', 'Please enter ph number', is10Digits, identity);

  return new Form(nameField, dobField, hobbiesField, phNumberField);;
}

const main = function () {
  const form = createForm();
  readInput(form, console.log, writeInto);
};

main();
