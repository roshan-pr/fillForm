const fs = require('fs');
process.stdin.setEncoding('utf8');

class PersonalDetails {
  #name;
  #dob;
  #hobbies;
  constructor() {
    this.#name = '';
    this.#dob = '';
    this.#hobbies = '';
  }

  addName(name) {
    this.#name = name;
    return true;
  }

  addDOB(dob) {
    this.#dob = dob;
    return true;
  }

  addHobbies(hobbies) {
    this.#hobbies = hobbies.split(',');
    return true;
  }

  writeInto(fileName, writeFile) {
    const name = this.#name;
    const dob = this.#dob;
    const hobbies = this.#hobbies;
    const content = JSON.stringify({ name, dob, hobbies });

    writeFile(fileName, content, 'utf8');
  }

  toString() {
    return `Name: ${this.#name}\nDOB: ${this.#dob}\nHobbies: ${this.#hobbies}`;
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
    personDetails.writeInto('./records.json', fs.writeFileSync)
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
    },
    {
      msg: 'Please enter your Hobbies :',
      action: (hobbies) => personDetails.addHobbies(hobbies)
    }
  ];
  readLines(personDetails, messages);
};

details();
