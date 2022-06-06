process.stdin.setEncoding('utf8');

class PersonalDetails {
  #name;
  constructor() {
    this.#name = '';
  }

  addName(name) {
    this.#name = name;
    return true;
  }

  toString() {
    return `${this.#name}`
  }
}

const readLines = (personDetails, messages) => {
  let messageIndex = 0;
  console.log(messages[messageIndex].msg);

  process.stdin.on('data', (detail) => {
    if (messages[messageIndex].action(detail)) {
      console.log('Added ', personDetails + '');
      messageIndex++;
    } else {
      console.log('Wrong input');
    }
  });

  process.stdin.on('end', () => {
    console.log(Thanks);
  })
};

const details = function () {
  const personDetails = new PersonalDetails();

  let messages = [
    { msg: 'Please enter your name :', action: (name) => personDetails.addName(name) }];
  readLines(personDetails, messages);
};

details();
