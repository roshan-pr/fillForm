const fs = require('fs');
process.stdin.setEncoding('utf8');

const { Form } = require("./Form.js");

const readLine = (messages) => {
  let messageIndex = 0;
  return (chunk) => {
    const detail = chunk.split('\n')[0];
    if (messages[messageIndex].action(detail)) {
      messageIndex++;
      if (messageIndex >= messages.length) {
        process.stdin.emit('end');
        process.exit(0);
      }
      console.log(messages[messageIndex].msg);
    } else {
      console.log('Wrong input');
    }
  }
};

const readLines = (personDetails, messages) => {
  let messageIndex = 0;
  console.log(messages[messageIndex].msg);

  process.stdin.on('data', readLine(messages));

  process.stdin.on('end', () => {
    // personDetails.writeInto('./records.json', fs.writeFileSync)
    console.log('\nThanks');
    console.log(personDetails + '');
  })
};

const details = function () {
  const form = new Form();

  const messages = [
    {
      msg: 'Please enter your name :',
      action: (name) => form.addName(name)
    },
    {
      msg: 'Please enter your DOB (yyyy-mm-dd):',
      action: (dob) => form.addDOB(dob)
    },
    {
      msg: 'Please enter your Hobbies :',
      action: (hobbies) => form.addHobbies(hobbies)
    },
    {
      msg: 'Please enter your Phone Number :',
      action: (phNumber) => form.addPhNumber(phNumber)
    }
  ];
  readLines(form, messages);
};

details();
