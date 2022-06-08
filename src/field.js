class Field {
  #name;
  #prompt;
  #response;

  constructor(name, prompt) {
    this.#name = name;
    this.#prompt = prompt;
    this.#response = null;
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
}

module.exports = { Field };
