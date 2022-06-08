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
    const field = this.getCurrentField();
    if (!field.isValid(response)) {
      return;
    }
    field.fill(response);

    if (field.isFilled()) {
      this.#currentField++;
    }
  }

  isFilled() {
    return this.#currentField >= this.#fields.length;
  }

  getPrompt() {
    return this.getCurrentField().getPrompt();
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
