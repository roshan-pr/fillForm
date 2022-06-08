class Field {
  #name;
  #prompt;
  #response;
  #validator;
  #parser;

  constructor(name, prompt, validator = _ => true, parser = x => x) {
    this.#name = name;
    this.#prompt = prompt;
    this.#response = null;
    this.#validator = validator;
    this.#parser = parser;
  }

  getPrompt() {
    return this.#prompt;
  }

  fill(response) {
    this.#response = response;
  }

  getEntry() {
    return { name: this.#name, response: this.#parser(this.#response) };
  }

  isFilled() {
    return this.#response !== null;
  }

  isValid(response) {
    return this.#validator(response);
  }

  isEqual(otherField) {
    return otherField instanceof Field &&
      this.#name === otherField.#name &&
      this.#prompt === otherField.#prompt &&
      this.#response === otherField.#response &&
      this.#validator === otherField.#validator &&
      this.#parser === otherField.#parser;
  }
}

module.exports = { Field };
