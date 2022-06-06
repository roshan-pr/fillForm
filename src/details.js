process.stdin.setEncoding('utf8');

class PersonalDetails {
  #name;
  #dob;
  constructor() {
    this.#name = '';
    this.#dob = '';
  }

  addName(name) {
    this.#name = name;
    return true;
  }

  addDOB(dob) {
    this.#dob = dob;
    return true;
  }

  toString() {
    return `Name: ${this.#name} DOB: ${this.#dob}`
  }
}

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
    console.log('\nThanks');
    console.log(personDetails + '');
  })
};

const details = function () {
  const personDetails = new PersonalDetails();

  const messages = [
    {
      msg: 'Please enter your name :',
      action: (name) => personDetails.addName(name)
    },
    {
      msg: 'Please enter your DOB :',
      action: (dob) => personDetails.addDOB(dob)
    }
  ];
  readLines(personDetails, messages);
};

details();
