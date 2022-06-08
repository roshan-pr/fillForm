class MultiLineField {
  #name;
  #prompts;
  #promptIndex;
  #responses;
  #validator;
  #parser;

  constructor(name, prompts, validator = _ => true, parser = x => x) {
    this.#name = name;
    this.#prompts = prompts;
    this.#promptIndex = 0;
    this.#responses = [];
    this.#validator = validator;
    this.#parser = parser;
  }

  getPrompt() {
    return this.#prompts[this.#promptIndex];
  }

  fill(response) {
    this.#responses.push(response);
    this.#promptIndex++;
  }

  getEntry() {
    return { name: this.#name, response: this.#parser(this.#responses) };
  }

  isValid(response) {
    return this.#validator(response);
  }

  isFilled() {
    return this.#promptIndex >= this.#prompts.length;
  }
}

module.exports = { MultiLineField };
