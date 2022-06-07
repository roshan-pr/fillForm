const fs = require('fs');
process.stdin.setEncoding('utf8');

const { Form } = require("./Form.js");
const { Iterator } = require("./Iterator.js");

const handleEvent = (userInput, queryIterator) => {
  const action = queryIterator.current().action;

  if (action(userInput)) {
    if (!queryIterator.next()) {
      process.stdin.emit('end');
      process.exit(0);
    }
    askUser(queryIterator.current().query);
  };
};

const askUser = (query) => console.log(query);

const readInput = (form, queryIterator) => {
  askUser(queryIterator.current().query);

  let input = '';
  process.stdin.on('data', (chunk) => {
    input += chunk;
    const responses = input.split('\n');

    responses.slice(0, -1).forEach((userInput) =>
      handleEvent(userInput, queryIterator));

    input = responses.slice(-1);
  });

  process.stdin.on('end', () => {
    // personDetails.writeInto('./records.json', fs.writeFileSync)
    console.log('\nThanks');
    console.log(form + '');
  })
};

const details = function () {
  const form = new Form();

  const queries = [
    {
      query: 'Please enter your name :',
      action: (name) => form.addName(name)
    },
    {
      query: 'Please enter your DOB (yyyy-mm-dd):',
      action: (dob) => form.addDOB(dob)
    },
    {
      query: 'Please enter your Hobbies :',
      action: (hobbies) => form.addHobbies(hobbies)
    },
    {
      query: 'Please enter your Phone Number :',
      action: (phNumber) => form.addPhNumber(phNumber)
    }
  ];

  const queryIterator = new Iterator(queries);
  readInput(form, queryIterator);
};

details();
