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

const isValidName = (name) => name.length >= 5;

const isValidDOB = (dob) => {
  const [year, month, day] = dob.split('-');
  return [year, month, day].every((number) => isFinite(number));
};

const hasHobbies = (hobbies) => hobbies.every((hobby) => hobby.length > 0);

exports.PersonalDetails = PersonalDetails;
