const fs = require('fs');
process.stdin.setEncoding('utf8');

const { Form } = require("./Form.js");
const { readInput } = require("./userInteraction.js");
const { Iterator } = require("./Iterator.js");

const details = function () {
  const form = new Form();

  const queries = [
    {
      query: 'Please enter your name :',
      action: (name) => form.addName(name)
    },
    {
      query: 'Please enter your DOB (yyyy-mm-dd):',
      action: (dob) => form.addDOB(dob)
    },
    {
      query: 'Please enter your Hobbies :',
      action: (hobbies) => form.addHobbies(hobbies)
    },
    {
      query: 'Please enter your Phone Number :',
      action: (phNumber) => form.addPhNumber(phNumber)
    }
  ];

  const queryIterator = new Iterator(queries);
  readInput(form, queryIterator);
};

details();
