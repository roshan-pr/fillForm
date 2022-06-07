const { Form } = require("./Form");

const display = (message) => console.log(message);

const handleAction = (userInput, queryIterator, form) => {
  const input = queryIterator.current().parser(userInput);
  const validate = queryIterator.current().validate;

  if (validate(input)) {
    const field = queryIterator.current().field;
    form.addField(field, input);

    if (!queryIterator.next()) {
      process.stdin.emit('end');
      process.exit(0);
    }
    display(queryIterator.current().query);
  };
};

const readInput = (queryIterator) => {
  const form = new Form();
  display(queryIterator.current().query);

  let input = '';
  process.stdin.on('data', (chunk) => {
    input += chunk;
    const responses = input.split('\n');

    responses.slice(0, -1).forEach((userInput) => handleAction(userInput, queryIterator, form));

    input = responses.slice(-1);
  });

  process.stdin.on('end', () => {
    // personDetails.writeInto('./records.json', fs.writeFileSync)
    console.log('\nThanks');
    console.log(form + '');
  });
};

exports.readInput = readInput;
