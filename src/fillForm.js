const fs = require('fs');
process.stdin.setEncoding('utf8');

const { createForm } = require("./createForm.js");
const { registerResponse } = require("./registerResponse.js");

const readInput = (form, logger, callBack) => {
  logger(form.getCurrentField().getPrompt());

  let input = '';
  process.stdin.on('data', (chunk) => {
    input += chunk;
    const responses = input.split('\n');
    responses.slice(0, -1).forEach((response) =>
      registerResponse(form, response.trim(), logger, callBack));
    input = responses.slice(-1);
  });
};

const writeInto = (content) => {
  fs.writeFileSync('./responses.json', JSON.stringify(content), 'utf-8');
  process.stdin.destroy();
};

const main = function () {
  const form = createForm();
  readInput(form, console.log, writeInto);
};

main();
