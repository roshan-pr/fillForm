class Form {
  constructor() {
  }

  addField(field, value) {
    this[field] = value;
  }

  writeInto(fileName, writeFile) {
    const name = this.name;
    const dob = this.dob;
    const hobbies = this.hobbies;
    const content = JSON.stringify({ name, dob, hobbies });

    writeFile(fileName, content, 'utf8');
  }

  toString() {
    return `Name: ${this.name}\nDOB: ${this.dob}` +
      `\nHobbies: ${this.hobbies}\nPhone Number: ${this.phNumber}`;
  }
}

exports.Form = Form;
