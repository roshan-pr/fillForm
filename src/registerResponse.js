const fs = require("fs");
const { Form } = require("./form.js");

const registerResponse = (form, response, logger, callBack) => {
  form.fillField(response);

  if (!form.isFilled()) {
    logger(form.getCurrentField().getPrompt());
    return;
  }

  callBack(form.getEntries());
  process.stdin.destroy();
};

module.exports = { registerResponse };
