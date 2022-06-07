class Form {
  #name;
  #dob;
  #hobbies;
  #phNumber;
  constructor() {
    this.#name = '';
    this.#dob = '';
    this.#hobbies = '';
    this.#phNumber = '';
  }

  addName(name) {
    this.#name = name;
    return isValidName(name);
  }

  addDOB(dob) {
    this.#dob = dob;
    return isValidDOB(dob);
  }

  addHobbies(hobbies) {
    this.#hobbies = hobbies.split(',');
    return hasHobbies(this.#hobbies);
  }

  addPhNumber(phNumber) {
    this.#phNumber = phNumber;
    return isValidPhNumber(phNumber);
  }

  writeInto(fileName, writeFile) {
    const name = this.#name;
    const dob = this.#dob;
    const hobbies = this.#hobbies;
    const content = JSON.stringify({ name, dob, hobbies });

    writeFile(fileName, content, 'utf8');
  }

  toString() {
    return `Name: ${this.#name}\nDOB: ${this.#dob}` +
      `\nHobbies: ${this.#hobbies}\nPhone Number: ${this.#phNumber}`;
  }
}

const isValidName = (name) => name.length >= 5;

const isValidDOB = (dob) => {
  const [year, month, day] = dob.split('-');
  return [year, month, day].every((number) => isFinite(number));
};

const hasHobbies = (hobbies) => hobbies.every((hobby) => hobby.length > 0);

const isValidPhNumber = (phNumber) =>
  phNumber.length === 10 && isFinite(phNumber);

exports.Form = Form;
