const { readFileSync } = require('fs');
const connection = require('./connection');

module.exports = () => {
  connection.query(readFileSync('./build.sql'));
  if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test')
    connection.query(readFileSync('./fakeData.sql'));
};
