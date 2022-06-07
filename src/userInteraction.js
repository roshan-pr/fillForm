
const display = (message) => console.log(message);

const handleEvent = (userInput, queryIterator) => {
  const action = queryIterator.current().action;

  if (action(userInput)) {
    if (!queryIterator.next()) {
      process.stdin.emit('end');
      process.exit(0);
    }
    display(queryIterator.current().query);
  };
};

const readInput = (form, queryIterator) => {
  display(queryIterator.current().query);

  let input = '';
  process.stdin.on('data', (chunk) => {
    input += chunk;
    const responses = input.split('\n');

    responses.slice(0, -1).forEach((userInput) => handleEvent(userInput, queryIterator));

    input = responses.slice(-1);
  });

  process.stdin.on('end', () => {
    // personDetails.writeInto('./records.json', fs.writeFileSync)
    console.log('\nThanks');
    console.log(form + '');
  });
};

exports.readInput = readInput;
