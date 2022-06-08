const fs = require("fs");
const { Form } = require("./form.js");

const registerResponse = (form, response, logger, callBack) => {
  form.fillField(response);

  if (!form.isFilled()) {
    logger(form.getPrompt());
    return;
  }

  callBack(form.getEntries());
  logger('Thanks');
};

module.exports = { registerResponse };
