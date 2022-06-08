const fs = require("fs");
const { Form } = require("./form.js");

const display = (message) => console.log(message);

const registerResponse = (form, response) => {
  form.fillField(response);

  if (!form.isFilled()) {
    display(form.getCurrentField().getPrompt());
    return;
  }
  console.log('\nThanks');
  const content = form.getEntries();
  fs.writeFileSync('./responses.json', JSON.stringify(content), 'utf-8');
  process.stdin.destroy();
};

const readInput = (form) => {
  display(form.getCurrentField().getPrompt());

  let input = '';
  process.stdin.on('data', (chunk) => {
    input += chunk;
    const responses = input.split('\n');
    responses.slice(0, -1).forEach((response) => registerResponse(form, response));
    input = responses.slice(-1);
  });
};

module.exports = { readInput };
