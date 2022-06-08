const assert = require('assert');
const { isNameValid, isDateFormatted, has10Digits } = require("../src/createForm.js");

describe('CreateForm', () => {
  describe('isNameValid', () => {
    it('Should validate name, more than 5 letters', () => {
      assert.ok(isNameValid('premkumar'));
      assert.ok(!isNameValid('ram'));
    });
  });

  describe('isDateFormatted', () => {
    it('Should validate dob, formatted in yyyy-mm-dd', () => {
      assert.ok(isDateFormatted('2020-02-02'));
      assert.ok(!isDateFormatted('200-1-1'));
    });
  });

  describe('isDateFormatted', () => {
    it('Should validate dob, formatted in yyyy-mm-dd', () => {
      assert.ok(isDateFormatted('2020-02-02'));
      assert.ok(!isDateFormatted('200-1-1'));
    });
  });

  describe('has10Digits', () => {
    it('Should validate phNumber, holds 10 digits', () => {
      assert.ok(has10Digits('1234567890'));
      assert.ok(!has10Digits('123'));
    });
  });
});