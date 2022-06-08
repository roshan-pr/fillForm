class Form {
  #fields;
  #currentField;

  constructor(...fields) {
    this.#fields = fields;
    this.#currentField = 0;
  }

  getCurrentField() {
    return this.#fields[this.#currentField];
  }

  fillField(response) {
    this.#fields[this.#currentField].fill(response);
    this.#currentField++;
  }

  isFilled() {
    return this.#currentField >= this.#fields.length
  }

  getEntries() {
    const responses = {};
    this.#fields.forEach((field) => {
      const { name, response } = field.getEntry();
      responses[name] = response;
    });
    return responses;
  }
}

module.exports = { Form };
