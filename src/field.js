class Field {
  #name;
  #prompt;
  #response;
  #validator;

  constructor(name, prompt, validator = _ => true) {
    this.#name = name;
    this.#prompt = prompt;
    this.#response = null;
    this.#validator = validator;
  }

  getPrompt() {
    return this.#prompt;
  }

  fill(response) {
    this.#response = response;
  }

  getEntry() {
    return { name: this.#name, response: this.#response };
  }

  isValid(response) {
    return this.#validator(response);
  }
}

module.exports = { Field };
