class Iterator {
  #index;
  #elements;
  constructor(elements) {
    this.#index = 0;
    this.#elements = elements;
  }

  current() {
    return this.#elements[this.#index];
  }

  next() {
    return this.#elements[++this.#index];
  }
}

exports.Iterator = Iterator;
