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
  console.log('Thanks');
};

const main = function () {
  const nameField = new Field('name', 'Enter name');
  const dobField = new Field('dob', 'Enter dob');
  const hobbiesField = new Field('hobbies', 'Enter hobbies');

  const form = new Form(nameField, dobField, hobbiesField);
  readInput(form, console.log, writeInto);
};

main();
