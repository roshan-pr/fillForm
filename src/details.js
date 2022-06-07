const fs = require('fs');
process.stdin.setEncoding('utf8');

const { Form } = require("./Form.js");
const { readInput } = require("./userInteraction.js");
const { Iterator } = require("./Iterator.js");

const identity = (arg) => arg;

const parseDOB = (dob) => dob.split('-');

const parseHobbies = (dob) => dob.split(',').map((hobby) => hobby.trim());

const isValidName = (name) => name.length >= 5;

const isValidDOB = (dateOfBirth) => {
  return [4, 2, 2].every((num, i) =>
    isFinite(dateOfBirth[i]) && num === dateOfBirth[i].length);
};

const hasHobbies = (hobbies) => hobbies.every((hobby) => hobby.length > 0);

const isValidPhNumber = (phNum) => phNum.length === 10 && isFinite(phNum);

const details = function () {
  const queries = [
    {
      field: 'name',
      query: 'Please enter your name :',
      parser: identity,
      validate: isValidName
    },
    {
      field: 'dob',
      query: 'Please enter your DOB (yyyy-mm-dd):',
      parser: parseDOB,
      validate: isValidDOB
    },
    {
      field: 'hobbies',
      query: 'Please enter your Hobbies :',
      parser: parseHobbies,
      validate: hasHobbies
    },
    {
      field: 'phNumber',
      query: 'Please enter your Phone Number :',
      parser: identity,
      validate: isValidPhNumber
    }
  ];

  const queryIterator = new Iterator(queries);
  readInput(queryIterator);
};

details();
