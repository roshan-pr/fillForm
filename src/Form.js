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
    return this.#fields.every(field => field.isFilled());
  }

  getPrompt() {
    return this.getCurrentField().getPrompt();
  }

  getEntries() {
    return this.#fields.reduce((responses, field) => {
      const { name, response } = field.getEntry();
      responses[name] = response;
      return responses;
    }, {});
  }
}

module.exports = { Form };
