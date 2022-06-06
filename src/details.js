class Details {
  constructor() {
    this.info = [];
  }

  addInfo(detail) {
    this.info.push(detail);
  }

  print() {
    console.log(this.info);
  }
}

const readLines = (personDetails) => {
  let messages = ['Name :', 'Dob :', 'Hobbies :'];
  let messageIndex = 0;
  console.log(messages[messageIndex]);

  process.stdin.setEncoding('utf8');
  process.stdin.on('data', (detail) => {
    if (messageIndex >= messages.length) {
      personDetails.print();
      process.exit(0);
    }
    messageIndex++;
    console.log(messages[messageIndex]);
    personDetails.addInfo(detail);
  });

  process.stdin.on('end', () => {

  })
};

const details = function () {

  const personDetails = new Details();
  readLines(personDetails);
};

details();
